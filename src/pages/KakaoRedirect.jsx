import { useSearchParams } from "react-router-dom";

const KakaoRedirect = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code"); // 인가 코드 가져오기

  console.log("인가 코드:", code); // 콘솔에서 확인

  return <p>로그인 중... (인가 코드 확인: {code})</p>;
};

export default KakaoRedirect;