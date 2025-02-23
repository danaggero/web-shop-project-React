import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import SideBar from "./SideBar";
import { useState } from "react";


function Header() {

  const Navigate = useNavigate();
  const {isLoggedIn, logout, login} = useAuthStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  console.log('현재 로그인 상태:', isLoggedIn);

  return (
    
  <div id="header">

    {/* Header-top */}
    <div id="header-top" className="bg-[#708090] flex justify-between items-center p-5 mt-5">
      <div id="logo" className="text-[white] text-3xl font-extrabold">
      <Link to={"/"}>ECLO</Link>
      </div>
      {
        isLoggedIn ?
          <ul className="text-[white] flex list-none gap-5">
            <li className="flex items-center gap-1">
              <span className="material-icons">shopping_cart</span>
              <Link to={"/cart"}>장바구니</Link>
            </li>
            <li className="flex items-center gap-1">
              <span className="material-icons">account_circle</span>
              <Link to={"/mypage"}>마이페이지</Link>
            </li>
            <li className="flex items-center gap-1">
              <span className="material-icons">assignment</span>
              <Link to={"/Register"}>회원가입</Link>
            </li>
            <li className="flex items-center gap-1">
              {
                isLoggedIn ? 
                <>
                <span className="material-icons">logout</span>
                <div className="cursor-pointer" onClick={()=>{logout(); alert('로그아웃 되었습니다.')}}>로그아웃</div>
                </>
                :
                <>
                <span className="material-icons">login</span>
                <Link to={"/login"}>로그인</Link>
                </>
              }
            </li>
          </ul>
            :
            <ul className="text-[white] flex list-none gap-5">

            <li className="flex items-center gap-1">
              <span className="material-icons">assignment</span>
              <Link to={"/Register"}>회원가입</Link>
            </li>
            <li className="flex items-center gap-1">
              {
                isLoggedIn ? 
                <>
                <span className="material-icons">logout</span>
                <div className="cursor-pointer" onClick={()=>{logout(); alert('로그아웃 되었습니다.')}}>로그아웃</div>
                </>
                :
                <>
                <span className="material-icons">login</span>
                <Link to={"/login"}>로그인</Link>
                </>
              }
            </li>
          </ul>     
      }
      </div>
      
    {/* Header-middle */}
    <div id="header-middle" className="flex bg-white justify-between py-5 items-center text-[#708090]">
      <div id="nav" className="flex items-center">
        <button onClick={() => setIsSidebarOpen(true)} className="ml-5 bg-transparent w-10 h-10 m-auto "><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#708090"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        </button>

 
        <ul className="flex items-center gap-10 px-10">
          <li className="cursor-pointer font-[650] inline-block" onClick={() => Navigate("/")}>Home</li>
          <li className="cursor-pointer font-[650] inline-block" onClick={() => Navigate("/NotFound")}>Magazine</li>
          <li className="cursor-pointer font-[650] inline-block" onClick={() => Navigate("/asks")}>Services</li>
          <li className="cursor-pointer font-[650] inline-block" onClick={() => Navigate("/events")}>Events</li>
          <li className="cursor-pointer font-[650] inline-block" onClick={() => Navigate("/about")}>About Us</li>
        </ul>
      </div>
      <div className="relative w-72 mx-5">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full bg-white text-base outline-none transition-shadow focus:shadow-lg"
        />
        <span className="material-icons absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-black">
          search
        </span>
      </div>
      <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </div>
      
    {/* Header-bottom */}
    <div id="header-bottom" className="bg-white pt-2 bottom-1">
      <ul className="flex list-none gap-14 pl-12 py-3">
        <li className="font-libre text-3xl cursor-pointer  font-semibold w-1/5">Best</li>
        <li className="relative group font-libre text-3xl cursor-pointer font-semibold hover:underline hover:underline-offset-4 w-1/5">
          Women
          {/* 서브 메뉴 */}
          <ul className="absolute left-0 top-full pt-2 w-[220px] bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Outer</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Top</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Pants</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Shoes</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Accessories</li>
          </ul>
        </li>

        <li className="relative group font-libre text-3xl cursor-pointer font-semibold hover:underline hover:underline-offset-4 w-1/5">Men
          {/* 서브 메뉴 */}
          <ul className="absolute left-0 top-full pt-2 w-[220px] bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Outer</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Top</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Pants</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Shoes</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Accessories</li>
          </ul>
        </li>
        
        <li className="relative group font-libre text-3xl cursor-pointer font-semibold hover:underline hover:underline-offset-4 w-1/5">Kid
          {/* 서브 메뉴 */}
          <ul className="absolute left-0 top-full pt-2 w-[220px] bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Outer</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Top</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Pants</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Shoes</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Accessories</li>
          </ul>
        </li>
        
        <li className="font-libre text-3xl cursor-pointer font-semibold hover:underline hover:underline-offset-4">Ranking</li>        
        <li className="font-libre text-3xl text-gray-200 w-20">|</li>

        <li className="font-libre text-3xl text-gray-500 cursor-pointer w-full">Social</li>
      </ul>
    </div>
  </div>

    
  );
}

export default Header;