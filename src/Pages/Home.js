import * as React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

function Home() {

  document.body.style="body:white";

  return (
  <div>
    <div className="App">
      Choose a project:
    </div>
    <div>
      <Link to="Game">Tic Tac Toe</Link>
    </div>
    <div>
      <Link to="Context">Context Demo</Link>
    </div>
    <div>
      <Link to="Spring">Spring App</Link>
    </div>
   </div>
  );
}

export default Home;

