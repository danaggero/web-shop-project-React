import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";

const Home = () => {
  return (
    <div id="wrap" className="mx-auto w-full h-[1400px] ">
      <Header />
      <ImageSlider />
      <Main />
      <Footer />
    </div>
  )
}

export default Home;