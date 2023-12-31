//This was my first project in React. The code isn't pretty,
//as I had no idea how React worked when I started this.
//I've decided to leave the code as is to show my progress as
//I learn more aspects of React to make my code more concise

import * as React from 'react';

import {useState, useContext} from 'react';

import '../App.css'

let debug = false;


export default function Game()
{
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  let moves = [<li key = {0}> You are on move {0}</li>];

  const [orderReversed, setOrderReversed] = useState(false);
  const [renderedMoves, setRenderedMoves] = useState(moves);

  if(debug){
    console.log("RUNNING GAME");
    console.log("ORDER REVERSED IS " + orderReversed);
    }


  function handlePlay(nextSquares)
    {
      if(debug)
        console.log("RUNNING HANDLEPLAY");

      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setCurrentMove(nextHistory.length - 1);
      setHistory(nextHistory);
      updateMoves(history);
      setXIsNext(!xIsNext);
      setRenderedMoves(moves.slice(0));
    }

  //squares returns each element, move return each index

    function updateMoves(history)
    {
        if(debug)
          console.log("RUNNING UPDATEMOVES");
        moves = [];
        for(let i = 0; i < currentMove + 2; i++)
        {
            let description;
            if(i > 0)
              description = 'Go to move # ' + i;
            else
              description = "Go to game start";

            if(i === currentMove + 1)
            {
              moves.push(
                <li key = {i}> You are on move {i}</li>
              );
            }
            else moves.push(
              <li key = {i}>
                <button onClick = {() => jumpTo(i, orderReversed)}>{description}</button>
              </li>
            );
        };

          setRenderedMoves(moves.slice(0, currentMove));


    }


  function toggleOrder()
  {
    if(debug)
      console.log("RUNNING TOGGLEORDER");
    setOrderReversed(!orderReversed);
  }


  function jumpTo(nextMove, doReverse)
  {
    if(debug)
      console.log("RUNNING JUMPTO")
    setCurrentMove(nextMove);
    setXIsNext(nextMove%2 === 0);

    let newMoves = moves.slice(0,nextMove);

    newMoves.push(<li key = {nextMove}> You are on move {nextMove}</li>)
    //updateMoves(history);
    if(debug)
      console.log(doReverse);

    setRenderedMoves(newMoves);
  }

    if(debug){
        console.log("    ");
    }


    return(
           <div className = "game">
             <div className = "game-board">
               <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} turn = {currentMove}/>
             </div>

             <div className = "game-info">
               <PastMoves moves={renderedMoves} orderReversed = {orderReversed} />
             </div>

             <div className = "orderButton">
               <button onClick = {toggleOrder}> Toggle Order </button>
             </div>


           </div>
       );
}

function PastMoves({moves, orderReversed}) {
  if(debug)
    console.log("RUNNING PASTMOVES AND OR IS " + orderReversed);
  if(orderReversed)
    moves = moves.slice(0).reverse();
  return(
          <ul>
            <ol> {moves} </ol>
          </ul>)
}

function Board({ xIsNext, squares, onPlay, turn }) {

  const winResults = calculateWinner(squares);

  const winner = winResults[0];
  const coloredSpots = winResults[1];

  let status;
  if(winner)
    status = "Winner: " + winner;
  else if(turn === 9)
    status = "Draw!"
  else
    status = "Next player: " + (xIsNext ?  "X" : "O")
;
  function handleClick(i)
  {
    if(winner || squares[i])
        return;
    const nextSquares = squares.slice();
    if(xIsNext)
        nextSquares[i] = "X";
    else
        nextSquares[i] = "O";

    onPlay(nextSquares);

  }

  const squareArray = [];


  squareArray.push(<div> {status} </div>);
  for(let i = 0; i < 3; i ++)
  {
    for(let j = 0; j < 3; j++)
    {
      if(coloredSpots.includes(i+ 3*j))
        squareArray.push(<Square value = {squares[i + 3*j]} onSquareClick = {() => handleClick(i + 3*j)} color = "red"/>);
      else
        squareArray.push(<Square value = {squares[i + 3*j]} onSquareClick = {() => handleClick(i + 3*j)} color = "black"/>);

    }
    squareArray.push(<div className = "row"> </div>);
  }

  //squareArray.push(</div>);
  return squareArray;

}
function Square({value, onSquareClick, color})
{

    return <button className = "square"
            onClick = {onSquareClick}
            style = {{color: color}}>

            {value}
            </button>
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], lines[i]];
    }
  }
  return [null, []];
}