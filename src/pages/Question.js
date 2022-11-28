import React, { useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { QuestionData } from "../assets/data/questiondata";

const Question = () => {
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  const handelClickBtn = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );

    setTotalScore(newScore);

    if (QuestionData.length !== questionNo + 1) {
      //다음 문제로
      setQuestionNo(questionNo + 1);
    } else {
      //mbti 도출
      const mbti = newScore.reduce(
        (acc, curr) =>
          curr.score >= 2
            ? acc + curr.id.substring(0, 1)
            : acc + curr.id.substring(1, 2),
        ""
      );

      // 결과 페이지 이동
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({ mbti: mbti })}`,
      });
    }

    setQuestionNo(questionNo + 1);
  };

  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNo / QuestionData.length) * 100}
      />
      <Title>{QuestionData[questionNo].title}</Title>
      <ButtonGroup>
        <Button
          onClick={() => handelClickBtn(1, QuestionData[questionNo].type)}
          style={{ width: "40%", minHeight: "200px", fontSize: "15px" }}
        >
          {QuestionData[questionNo].answera}
        </Button>
        <Button
          onClick={() => handelClickBtn(0, QuestionData[questionNo].type)}
          style={{
            width: "40%",
            minHeight: "200px",
            fontSize: "15px",
            marginLeft: "20px",
          }}
        >
          {QuestionData[questionNo].answerb}
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Title = styled.div`
  font-size: 20pt;
  text-align: center;
  font-family: "Cafe24SsurroundAir";
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "Cafe24SsurroundAir";
`;
