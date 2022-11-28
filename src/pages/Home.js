import React from "react";
//css-in-js
import styled from "styled-components";
import MungImage from "../assets/mungmain.png";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <Wrapper>
      <Header>예비 멍집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img src={MungImage} alt="mungImage" width={350} />
        </LogoImage>
        <Desc>Mbti를 기반으로 하는 나와 잘 맞는 멍멍이 찾기 !</Desc>
        <Button>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
`;

const LogoImage = styled.div`
  margin-top: 20px;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
  margin-bottom: 20px;
`;
