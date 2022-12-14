import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<Question />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </StyledWrapper>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  html {
    height:100%;
  }

  body {
    background: linear-gradient(to bottom, #F9E090, #FF935C);
    height: 100%;
    margin: 0;
    color: #555;
  }
  `;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 10px;
`;

export const StyledContainer = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 600px;
  height: 600px;
  padding: ${({ padding }) => padding};
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledBtn = styled.button`
  display: block;
  font-family: "Cafe24Ssurround";
  background-color: #ff935c;
  color: #fff;
  font-size: 0.85rem;
  border: 0;
  border-radius: 5px;
  height: 55px;
  min-width: 85%;
  margin: 20px auto;
  padding: 0;
  cursor: pointer;
  box-sizing: border-box;
`;
