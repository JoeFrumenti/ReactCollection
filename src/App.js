import * as React from 'react';

import logo from './logo.svg';
import './App.css';

import {Routes, Route} from 'react-router-dom';

import Game from './Pages/TicTacToe';
import Parent from'./Pages/Drilling';
import Home from './Pages/Home';
import Spring from './Pages/Spring';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path='/Game' element = {<Game />} />
        <Route path='/Context' element = {<Parent />} />
        <Route path='/Spring' element = {<Spring />} />
      </Routes>

    </div>
  );
}

export default App;
