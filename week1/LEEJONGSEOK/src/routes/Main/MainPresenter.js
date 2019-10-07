import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 500px;
  margin: 50px auto 0;
`;
const FormulaWrapper = styled.div`
  text-align: right;
`;
const ResultWrapper = styled.div`
  text-align: right;
`;

const FunctionWrapper = styled.div`
  height: inherit;
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  > button {
    border: 1px solid black;
    margin: 0;
    padding: 0.5rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: black;
    }
  }
`;

const NumberWrapper = styled.div`
  display: grid;
  grid-gap: 0.3rem;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 30px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    cursor: pointer;
    &:nth-of-type(1) {
      grid-column: 3/4;
      grid-row: 1/2;
    }
    &:nth-of-type(2) {
      grid-column: 2/3;
      grid-row: 1/2;
    }
    &:nth-of-type(3) {
      grid-column: 1/2;
      grid-row: 1/2;
    }

    &:nth-of-type(4) {
      grid-column: 3/4;
      grid-row: 2/3;
    }
    &:nth-of-type(5) {
      grid-column: 2/3;
      grid-row: 2/3;
    }
    &:nth-of-type(6) {
      grid-column: 1/2;
      grid-row: 2/3;
    }

    &:nth-of-type(7) {
      grid-column: 3/4;
      grid-row: 3/4;
    }
    &:nth-of-type(8) {
      grid-column: 2/3;
      grid-row: 3/4;
    }
    &:nth-of-type(9) {
      grid-column: 1/2;
      grid-row: 3/4;
    }

    &:nth-of-type(10) {
      grid-column: 1 / 3;
    }
    transition: all 0.2s ease;
    &:hover {
      background-color: blue;
      color: white;
    }
  }
`;

const MainPresenter = ({ value, result, handleNumber, handleCal, handleReset }) => {
  const renderNumber = () => {
    const Number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    // const Number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    Number.sort((a, b) => {
      return b - a;
    });
    return Number.map((n, i) => (
      <div onClick={() => handleNumber(n)} key={i}>
        {n}
      </div>
    ));
  };

  const renderFunction = () => {
    const Function = ['+', '-', '*', '/', '='];
    return (
      <>
        {Function.map((f, i) => (
          <button onClick={() => handleCal(f)} key={i}>
            {f}
          </button>
        ))}
        <button onClick={() => handleReset()}>CE</button>
      </>
    );
  };

  const renderValue = () => {
    return value.map((v, i) => <span key={i}>{v}</span>);
  };

  console.log(value);

  return (
    <MainContainer>
      <FormulaWrapper>{value.length === 0 ? '입력해주세요' : renderValue()}</FormulaWrapper>
      <ResultWrapper>{result}</ResultWrapper>
      <FunctionWrapper>{renderFunction()}</FunctionWrapper>
      <NumberWrapper>{renderNumber()}</NumberWrapper>
    </MainContainer>
  );
};

export default MainPresenter;
