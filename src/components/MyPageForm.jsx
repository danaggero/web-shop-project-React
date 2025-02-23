import useAuthStore from "../store/authStore";

const MyPageForm = () => {

    const { isLoggedIn, currentUser } = useAuthStore();


    return(
        <div className="h-[1000px] w-[1280px] my-8 mx-auto">
            <div className="w-[1280px] h-[150px] flex items-center bg-slate-700 ">
                {
                    isLoggedIn ?
                    <h1 className="ml-8 mt- text-4xl text-white">{currentUser?.name}</h1>
                    : <h1>로그인</h1>
                }
            </div>

            <div className="flex flex-col ml-3">
                <div className="mt-12 border-b-4 font-semibold text-3xl">나의 쇼핑 정보</div>
                <ul className="ml-5 my-5 text-lg">
                    <li className="my-2 hover:cursor-pointer">주문배송조회</li>
                    <li className="my-2 hover:cursor-pointer">취소/교환/반품 내역</li>
                    <li className="my-2 hover:cursor-pointer">상품 리뷰</li>
                </ul>
                <div className="mt-4 border-b-4 font-semibold text-3xl">나의 계정 정보</div>
                <ul className="ml-5 my-5 text-lg">
                    <li className="my-2 hover:cursor-pointer">회원정보수정</li>
                    <li className="my-2 hover:cursor-pointer">쿠폰</li>
                </ul>
            </div>

        </div>
    )
}

export default MyPageForm;