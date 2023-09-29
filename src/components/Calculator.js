import React, { useState } from 'react';
import Output from './Output';
import calculate from './logic/calculate';
import Quotes from './Quotes';

const Calculator = () => {
  const [calcState, setCalcState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const { total, next, operation } = calcState;

  const displayValue = `${total || ''} ${operation || ''} ${next || ''}`;
  // const placeholderValue = '0';
  const handleBtnClick = (btnLabel) => {
    const newCalculatorState = calculate(calcState, btnLabel);
    setCalcState(newCalculatorState);
  };

  const buttons = [
    { id: 'clear', label: 'A/C' },
    { id: 'plus-minus', label: '+/-' },
    { id: 'modulus', label: '%' },
    { id: 'division', label: '÷' },
    { id: 'seven', label: '7' },
    { id: 'eight', label: '8' },
    { id: 'nine', label: '9' },
    { id: 'multiply', label: 'x' },
    { id: 'four', label: '4' },
    { id: 'five', label: '5' },
    { id: 'six', label: '6' },
    { id: 'subtraction', label: '-' },
    { id: 'one', label: '1' },
    { id: 'two', label: '2' },
    { id: 'three', label: '3' },
    { id: 'addition', label: '+' },
    { id: 'zero', label: '0' },
    { id: 'decimal', label: '.' },
    { id: 'equal', label: '=' },
  ];
  return (
    <>
      <section className="main-container">
        <Output value={displayValue} />
        {buttons.map((btn) => (
          <button
            key={btn.id}
            type="button"
            className={btn.id}
            onClick={() => handleBtnClick(btn.label)}
          >
            {btn.label}
          </button>
        ))}
      </section>
      <Quotes />
    </>
  );
};

export default Calculator;
