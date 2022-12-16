import React, { useEffect, useState } from "react";
//css-in-js
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/resultData";
import { StyledContainer, StyledBtn } from "../App";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti").toUpperCase();
  //최종적으로 도출한 결과 객체
  const [resultData, setResultData] = useState({});

  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  return (
    <StyledContainer>
      <Header>나와 찰떡궁합인 반려견은?</Header>
      <Title>
        <p>{resultData.best}</p>
        <BsFillSuitHeartFill className="heartIcon" />
        <p className="dogName">{resultData.name}</p>
      </Title>
      <DogImage>
        <div className="imageCircle">
          <img src={resultData.image} alt="결과 이미지" width={120} />
        </div>
      </DogImage>
      <Contents>
        <Desc>
          <div>
            <p>{resultData.descDog}</p>
            <p className="pointText">{resultData.name}</p>
            <p>와</p>
          </div>
          <div>
            <p>{resultData.descMbti}</p>
            <p className="pointText">{resultData.best}</p>
            <p>는</p>
          </div>
          <div>
            <p className="dotText">찰떡궁합</p>
            <p>입니다.</p>
          </div>
        </Desc>
        {/* <StyledBtn onClick={() => navigate("/")}>테스트 다시하기</StyledBtn> */}
      </Contents>
    </StyledContainer>
  );
};

export default Result;

const Header = styled.div`
  display: block;
  font-family: "NanumSquareNeo-Variable";
  background-color: #ff935c;
  color: #fff;
  font-size: 0.6rem;
  border: 0;
  border-radius: 15px;
  height: 30px;
  width: 250px;
  margin: 5px auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Cafe24Ssurround";
  margin-bottom: 10px;

  p {
    margin: 0 20px;
  }

  .heartIcon {
    color: #dc5353;
  }

  .dogName {
    font-size: 1.2rem;
  }
`;

const DogImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .imageCircle {
    width: 180px;
    height: 180px;
    padding-bottom: 15px;
    padding-left: 3px;
    border-radius: 90px;
    background-color: #f4ead5;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    margin-top: 10px;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Desc = styled.div`
  font-family: "NanumSquareNeo-Variable";
  font-size: 0.6rem;
  text-align: center;
  margin-top: 20px;

  p {
    margin-bottom: 3px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .pointText {
      font-size: 0.65rem;
      font-weight: 700;
      margin-left: 5px;
      color: #dc5353;
    }

    .dotText {
      text-emphasis: "♥︎" #dc5353;
      font-size: 0.6rem;
      margin-bottom: 9px;
      margin-right: 3px;
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-color: #dc5353;
    }
  }
`;
