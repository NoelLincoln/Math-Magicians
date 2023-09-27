import React from 'react';

const Calculator = () => (

  <section className="main-container">
    <input type="number" placeholder="0" />
    <div className="clear">A/C</div>
    <div className="plus-minus">+/-</div>
    <div className="modulus">%</div>
    <div className="division orange">÷</div>
    <div className="seven">7</div>
    <div className="eight">8</div>
    <div className="nine">9</div>
    <div className="multiply orange">x</div>
    <div className="four">4</div>
    <div className="five">5</div>
    <div className="six">6</div>
    <div className="subtraction orange">-</div>
    <div className="one">1</div>
    <div className="two">2</div>
    <div className="three">3</div>
    <div className="addition orange">+</div>
    <div className="zero">0</div>
    <div className="decimal">.</div>
    <div className="equal orange">=</div>
  </section>

);

export default Calculator;
