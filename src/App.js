import './App.css';
import logo from './images/luiswhite.png'
import Screen from './components/Screen';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('Hola');

  const addInput = value => {
    setInput(input + value)
  }


  return (
    <div className="App">
      <div className="luiscarrera__logo-container">
        <img 
          src={logo} 
          alt="luiscarrera logo" 
          className="luiscarrera__logo" />
      </div>
      <div className="calculator__container">
        <Screen 
          input={input}/>
        <div className="row">
          <Button doClick={addInput}>1</Button>
          <Button doClick={addInput}>2</Button>
          <Button doClick={addInput}>3</Button>
          <Button doClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button doClick={addInput}>4</Button>
          <Button doClick={addInput}>5</Button>
          <Button doClick={addInput}>6</Button>
          <Button doClick={addInput}>-</Button>
        </div>
        <div className="row">
          <Button doClick={addInput}>7</Button>
          <Button doClick={addInput}>8</Button>
          <Button doClick={addInput}>9</Button>
          <Button doClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button doClick={addInput}>=</Button>
          <Button doClick={addInput}>0</Button>
          <Button doClick={addInput}>.</Button>
          <Button doClick={addInput}>/</Button>
        </div>
        <div className="row">
          <ClearButton>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
