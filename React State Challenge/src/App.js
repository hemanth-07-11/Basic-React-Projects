import React from 'react';
import './App.css';
import FoodPicker from './FoodPicker/FoodPicker';
import Clock from './Clock/Clock';
import Board from './Board/Board';
import Counter from './Counter/Counter';
import Car from './Car/Car';

function App() {
  return (
    <div className="App">
      <FoodPicker />

      <hr />

      <Clock />

      <hr />

      <Board />

      <hr />

      <Counter />

      <hr />

      <Car />

      <hr />
    </div>
  );
}

export default App;
