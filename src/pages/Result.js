import React, { useEffect, useState } from "react";
//css-in-js
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/resultData";

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  //최종적으로 도출한 결과 객체
  const [resultData, setResultData] = useState({});

  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Header>예비 멍집사 판별기</Header>
      <Contents>
        <Title>결과보기</Title>
        <SubTitle>
          <BestMbti>{resultData.best}</BestMbti>
          {resultData.name}
        </SubTitle>
        <DogImage>
          <img src={resultData.image} alt="결과 이미지" width={200} />
        </DogImage>
        <Desc>
          <p>{resultData.descDog}와</p>
          <p>{resultData.descMbti}는</p>
          <span>찰떡궁합</span> 입니다.
        </Desc>
        <Button onClick={() => navigate("/")}>테스트 다시하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #e5ded4;
`;

const Header = styled.div`
  font-size: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Cafe24Ssurround";
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Cafe24SsurroundAir";
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
`;

const SubTitle = styled.div`
  font-size: 25pt;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BestMbti = styled.div`
  margin-right: 10px;
  color: blueviolet;
`;

const DogImage = styled.div`
  margin-top: 20px;
`;

const Desc = styled.div`
  font-size: 16pt;
  margin-top: 20px;
  margin-bottom: 40px;
  text-align: center;
`;
