import aboutUsImg from "../assets/images/aboutuscontent.jpg";
import ThinkSync from "../assets/images/thinksync.png";

const AboutUsContent = ()=>{
    return(
        <div className="min-h-[600px] my-24 text-center relative mx-auto">
            <h1 className="font-medium text-3xl my-10">&quot;Connect, Synchronize&quot;</h1>
            <img src={aboutUsImg} alt="AboutUsImg" className="brightness-75 max-w-[1280px] mx-auto rounded-lg" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-6 text-2xl text-gray-100 font-extrabold leading-relaxed ">
                <h2>Team ThinkSync 는 2025년도 1월에 모인 웹 개발 프로젝트 그룹입니다.</h2>
                <br />
                <h2>ThinkSync는 사용자 간 연결성을 기반으로 
                사용자 중심의 혁신적인 웹 솔루션을 개발합니다.</h2>
            </div>
            <img src={ThinkSync} alt="ThinkSyncLogo" className="ml-auto my-10" />

        </div>
    )
}

export default AboutUsContent;