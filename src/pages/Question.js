import React, { useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StyledContainer } from "../App";
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
    <StyledContainer>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNo / QuestionData.length) * 100}
      />
      <Title>
        {QuestionData[questionNo].title.split("\n").map((line) => {
          return (
            <p>
              {line}
              <br />
            </p>
          );
        })}
      </Title>
      <ButtonGroup>
        <Button
          onClick={() => handelClickBtn(1, QuestionData[questionNo].type)}
          style={{
            width: "80%",
            minHeight: "110px",
            fontSize: "18px",
            marginTop: "20px",
            padding: "20px",
          }}
        >
          {QuestionData[questionNo].answera.split("\n").map((line) => {
            return (
              <p>
                {line}
                <br />
              </p>
            );
          })}
        </Button>
        <Button
          onClick={() => handelClickBtn(0, QuestionData[questionNo].type)}
          style={{
            width: "80%",
            minHeight: "110px",
            fontSize: "18px",
            marginTop: "20px",
            backgroundColor: "purple",
            border: "0px",
            padding: "20px",
          }}
        >
          {QuestionData[questionNo].answerb.split("\n").map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </Button>
      </ButtonGroup>
    </StyledContainer>
  );
};

export default Question;

const Title = styled.div`
  font-size: 15pt;
  text-align: center;
  font-family: "NanumSquareNeo-Variable";
  margin-top: 20px;

  p {
    margin: 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "NanumSquareNeo-Variable";

  p {
    margin: 0;
  }
`;
