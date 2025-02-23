import React from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../store/authStore";
import Users from "../assets/data/dummy.json"



function SideBar({ isSidebarOpen, setIsSidebarOpen }) {
  
    const { isLoggedIn, currentUser } = useAuthStore();


    return (
    <>
      {/* 사이드바 */}
      <div 
        className={`fixed top-0 left-0 h-full w-96 bg-white shadow-lg transition-transform duration-300 z-50 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-5 flex items-center border-b h-24">
        {
            isLoggedIn && currentUser 
            ? (
            <>
              <span className="p-2 font-semibold text-xl"> {currentUser.name}</span>
               <span>님 환영합니다.</span>           
            </>
            )
            :
            (<h2 className="text-xl font-extrabold"><Link to={"/login"}>로그인</Link></h2>)
        }
          {/* 닫기 버튼 */}
          <button className="ml-auto mr-3 text-gray-500 hover:text-black" onClick={() => setIsSidebarOpen(false)}>
            <span className="material-icons">close</span>
          </button>
        </div>
        <ul className="p-10 space-y-8">
          <div className="p-20 border-solid border-4 border-gray-200 m-auto w-60 h-60 bg-gray-200 rounded-3xl">

          </div>
          <li className="cursor-pointer hover:text-gray-600  text-center">
            <div className="font-bold text-2xl">닉네임</div>
            <div className="font-semibold text-lg mt-2">Gold</div>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <div>주문배송조회</div>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <div>취소/교환/반품 내역</div>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <div>회원정보수정</div>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <div>쿠폰</div>
          </li>
        </ul>
      </div>

      {/* 배경 클릭 시 닫힘 */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}

export default SideBar;
