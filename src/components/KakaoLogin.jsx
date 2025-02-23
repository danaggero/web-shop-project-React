import kakaoLoginImg from "../assets/images/kakao_login_medium_wide.png";
import {getKakaoLoginUrl} from "../api/authApi";


const KakaoLoginButton = () =>{

    const handleKakaoLogin = () => {
        window.location.href = getKakaoLoginUrl();
    };

    return(
        <button className="w-full max-w-sm mx-auto mt-2 rounded-md overflow-hidden" onClick={handleKakaoLogin}>
            <img className="w-full h-auto" src={kakaoLoginImg} alt="카카오 로그인" />
        </button>
    );
};

export default KakaoLoginButton;