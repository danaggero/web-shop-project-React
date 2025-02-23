import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import main1 from "../assets/images/main1.jpg";
import padding2 from "../assets/images/padding2.jpg";
import main3 from "../assets/images/main3.jpg";

// 커스텀 이전 버튼 컴포넌트
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-5 z-10 transform -translate-y-1/2 p-6
              transition duration-300 opacity-10 rounded-3xl hover:opacity-60"
  >
  <span className="material-icons text-3xl">
arrow_back_ios_new
</span>
  </button>
);

// 커스텀 다음 버튼 컴포넌트
const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-5 z-10 transform -translate-y-1/2 p-6
              transition duration-300 opacity-10 rounded-3xl hover:opacity-60"
  >
  <span className="material-icons text-3xl">
arrow_forward_ios
</span>
  </button>
);

const ImageSlider = () => {
  const settings = {
    dots: true,                // 하단 점 네비게이션
    infinite: true,            // 무한 스크롤
    speed: 500,                // 슬라이드 속도 (ms)
    slidesToShow: 1,           // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1,         // 한 번에 넘어가는 슬라이드 개수
    autoplay: true,            // 자동 재생
    autoplaySpeed: 5000,       // 자동 재생 간격
    arrows: true,
    nextArrow: <CustomNextArrow />, // 커스텀 다음 버튼
    prevArrow: <CustomPrevArrow />, // 커스텀 이전 버튼
  };

  return (
    <div className="relative w-full my-10 mb-12">
      <Slider {...settings}>
        <div>
          <img className="w-full h-[650px] object-cover object-top" 
          src={main1} alt="Slide 1" />
        </div>
        <div>
          <img className="w-full h-[650px] object-cover object-top"  src={padding2} alt="Slide 2" />
        </div>
        <div>
          <img className="w-full h-[650px] object-cover object-top" src={main3} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
