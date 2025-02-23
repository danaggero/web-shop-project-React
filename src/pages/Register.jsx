import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";


const Register = () => {
  return (
    <div id="wrap" className="mx-auto w-[1280px] h-[1800px] bg-gray-100">
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  )
}

export default Register;