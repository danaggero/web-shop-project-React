import {Routes, Route, Link} from "react-router-dom"
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import ProductDetailPage from "./pages/ProductDetail";
import Events from "./pages/Event";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";  
import Asks from "./pages/Asks";
import AsksWrite from "./pages/AsksWrite";
import MyPage from "./pages/MyPage";
import KakaoRedirect from "./pages/KakaoRedirect";


function App() {

  return ( 

    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/NotFound" element={<NotFound/>}/>
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/asks" element={<Asks />} />
        <Route path="/asks/write" element={<AsksWrite />} />
        <Route path="/kakao" element={<KakaoRedirect />} />
      </Routes>
    </>
  )
}

export default App;