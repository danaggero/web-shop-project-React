import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [allChecked, setAllChecked] = useState(false);
  const [individualChecks, setIndividualChecks] = useState({
    age: false,
    terms: false,
    privacy: false,
    marketing: false,
  });

  // 모두 동의 체크박스 클릭 시 실행되는 함수
  const handleAllCheck = () => {
    const newCheckState = !allChecked;
    setAllChecked(newCheckState);
    setIndividualChecks({
      age: newCheckState,
      terms: newCheckState,
      privacy: newCheckState,
      marketing: newCheckState,
    });
  };

  // 개별 체크박스 클릭 시 실행되는 함수
  const handleIndividualCheck = (key) => {
    setIndividualChecks((prev) => {
      const updatedChecks = { ...prev, [key]: !prev[key] };
      const isAllChecked = Object.values(updatedChecks).every((value) => value);
      setAllChecked(isAllChecked);
      return updatedChecks;
    });
  };

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const navigate = useNavigate();

  // 이메일 입력 핸들러
  const handleEmail = (e) => {
      const value = e.target.value;
      setEmail(value);
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regex.test(value)){
        setEmailValid(true);
    } else {
        setEmailValid(false);
    }
};

  // 비밀번호 입력 핸들러
  const handlePw = (e) => {
      const value = e.target.value;
      setPw(value);
      const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if(regex.test(value)){
        setPwValid(true);
      }else{
        setPwValid(false);
      }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onClickConfirmButton();
  };  

  const onClickConfirmButton = (e) => {
    alert('회원가입이 완료되었습니다.')
    navigate('/');
  };

  // 입력 유효성에 따른 버튼 상태 업데이트
  useEffect(() => {
    if(emailValid && pwValid){
        setNotAllow(false);
        return;
    }
      setNotAllow(true);
  }, [emailValid, pwValid]);




  return (
    <div id="main" className="flex flex-col h-[1400px] mx-[400px] mt-[100px]">
      <h2 id="login__title" className="mt-[100px] mb-[60px] text-2xl font-bold">
        회원가입
      </h2>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        {/* 이메일 입력 */}
        <label htmlFor="email-address" className="flex flex-col mb-[7px]">
          <span className="text-[rgba(0,0,0,0.7)] font-semibold mb-[7px]">이메일주소</span>
          <input
            id="login-id"
            type="email"
            value={email}
            onChange={handleEmail}
            placeholder="example@email.com"
            className="text-2xl border-[rgba(0,0,0,0.7)] mb-[10px] focus:outline-none focus:border-black"
          />
        </label>
        {/* 이름 입력 */}
        <label htmlFor="register-username" className="flex flex-col mb-[7px]">
          <span className="text-[rgba(0,0,0,0.7)] font-semibold mb-[7px]">이름</span>
          <input
            id="login-username"
            type="username"
            placeholder="이름을 입력하세요"
            className="text-2xl border-[rgba(0,0,0,0.7)] mb-[10px] focus:outline-none focus:border-black"
          />
        </label>

        {/* 닉네임 입력 */}
        <label htmlFor="register-nickname" className="flex flex-col mb-[7px]">
          <span className="text-[rgba(0,0,0,0.7)] font-semibold mb-[7px]">닉네임</span>
          <input
            id="login-nickname"
            type="nickname"
            placeholder="닉네임을 입력하세요"
            className="text-2xl border-[rgba(0,0,0,0.7)] mb-[10px] focus:outline-none focus:border-black"
          />
        </label>
        

        {/* 비밀번호 입력 */}
        <label htmlFor="register-password" className="flex flex-col mb-[7px]">
          <span className="text-[rgba(0,0,0,0.7)] font-semibold mb-[7px]">비밀번호</span>
          <input
            id="login-password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="text-2xl border-[rgba(0,0,0,0.7)] mb-[10px] focus:outline-none focus:border-black"
          />
        </label>

        {/* 전화번호 입력 */}
        <label htmlFor="phone-number" className="flex flex-col mb-[7px]">
          <span className="text-[rgba(0,0,0,0.7)] font-semibold mb-[7px]">전화번호</span>
          <input
            id="phone-number"
            type="tel"
            placeholder="전화번호를 '-'를 제외하고 입력하세요"

            className="text-2xl border-[rgba(0,0,0,0.7)] mb-[10px] focus:outline-none focus:border-black"
          />
        </label>

        {/* 주소 입력 */}
        <label htmlFor="address" className="flex flex-col font-semibold mb-[7px]">
          <span className="text-[rgba(0,0,0,0.7)] mb-[7px]">주소</span>
          <input
            id="address"
            type="text"
            className="text-2xl border-[rgba(0,0,0,0.7)] mb-1 focus:outline-none focus:border-black"
          />
          <input
            id="specific-address"
            type="text"
            className="text-2xl border-[rgba(0,0,0,0.7)] mb-[10px] focus:outline-none focus:border-black"
          />
        </label>

        {/* 이용약관 */}
        <div id="이용약관" className="flex flex-col h-[300px] bg-slate-100 my-10 font-bold text-[rgba(0,0,0,0.9)]">
          <div className="h-20 flex items-center">
            <input
              className="w-[20px] h-[20px] mr-2"
              type="checkbox"
              checked={allChecked}
              onChange={handleAllCheck}
            />
            <span> 모두 동의합니다</span>
          </div>
          <div className="h-10 flex items-center">
            <input
              type="checkbox"
              checked={individualChecks.age}
              onChange={() => handleIndividualCheck("age")}
              className="mr-2  w-[15px] h-[15px]"
            />
            <span> [필수] 만 14세 이상입니다</span>
          </div>
          <div className="h-10 flex items-center">
            <input
              type="checkbox"
              checked={individualChecks.terms}
              onChange={() => handleIndividualCheck("terms")}
              className="mr-2 w-[15px] h-[15px]"
            />
            <span> [필수] 이용약관 동의</span>
          </div>
          <div className="h-10 flex items-center">
            <input
              type="checkbox"
              checked={individualChecks.privacy}
              onChange={() => handleIndividualCheck("privacy")}
              className="mr-2 w-[15px] h-[15px]"
            />
            <span> [필수] 개인 정보 수집 및 이용 동의</span>
          </div>
          <div className="h-10 flex items-center">
            <input
              type="checkbox"
              checked={individualChecks.marketing}
              onChange={() => handleIndividualCheck("marketing")}
              className="mr-2 w-[15px] h-[15px]"
            />
            <span> [선택] 광고성 정보 수신 모두 동의</span>
          </div>
        </div>

        {/* 회원가입 버튼 */}
        <input
          type="submit"
          value="본인인증하고 가입하기"
          className="bg-black text-white text-lg rounded-md border-none mb-[5px] cursor-pointer w-[384px] h-[57px] mx-auto"
        />
      </form>
    </div>
  );
}

export default RegisterForm;
