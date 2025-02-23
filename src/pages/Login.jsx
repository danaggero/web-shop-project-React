import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm2 from "../components/LoginForm2";


const Login = () => {


  return (
    <div id="wrap" className="mx-auto w-[1280px] h-[1400px] bg-gray-100">
      <Header />
      <LoginForm2 />
      <Footer />
    </div>
  )
}

export default Login;