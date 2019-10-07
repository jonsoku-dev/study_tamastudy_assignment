import React, { useState, useEffect } from 'react';
import MainPresenter from './MainPresenter';

const Main = () => {
  const [value, setValue] = useState([]);
  const [result, setResult] = useState(0);

  const handleNumber = num => {
    if (value.length === 0 && num === '0') {
      return null;
    }
    setValue([...value, num]);
  };

  const handleCal = f => {
    if (f !== '=') {
      setValue([...value, f]);
    } else {
      const formula = value.join('');
      const formulaResult = eval(formula);
      setResult(formulaResult);
    }
  };

  const handleReset = () => {
    setValue([]);
    setResult(0);
  };

  return (
    <MainPresenter
      handleNumber={handleNumber}
      handleCal={handleCal}
      handleReset={handleReset}
      value={value}
      result={result}
    />
  );
};

export default Main;
