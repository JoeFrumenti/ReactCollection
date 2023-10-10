import * as React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

function Home() {
  return (
  <div>
    <div className="App">
      This is the Home page
    </div>
    <div>
      <Link to="Game">Tic Tac Toe</Link>
    </div>
    <div>
      <Link to="Context">Context Demo</Link>
    </div>
   </div>
  );
}

export default Home;

