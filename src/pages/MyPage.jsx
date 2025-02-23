import Header from "../components/Header";
import MyPageForm from "../components/MyPageForm";
import Footer from "../components/Footer";


const MyPage = () => {
  return (
    <div id="wrap" className="mx-auto h-[1400px] ">
      <Header />
      <MyPageForm />
      <Footer />
    </div>
  )
}

export default MyPage;