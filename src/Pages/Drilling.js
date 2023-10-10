import React, {useState, useContext} from 'react';

import '../App.css';
import skeletonImage from '../images/skeleton.jpg'

let context = React.createContext(null);
function Parent() {
  const fName = "This is an example of context";
  return (
    <context.Provider value={{ fName }}>
        <CardCollection />
    </context.Provider>
  );
}

function CardCollection(){
  const cards = [];

  cards.push(<Card key = {1} />);
  cards.push(<br/>);
  cards.push(<Card key = {2} />);

  return(<><div className = "Card-container"> {cards} </div> <div className = "Card-container"> {cards} </div></>);
}

function Card() {
  const { fName } = useContext(context);
  return(
    <div className = "Card">
      <img src = {skeletonImage} alt = "skelly"/>
      {fName}
    </div>
  )
}

export default Parent;
