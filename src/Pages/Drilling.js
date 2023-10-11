import React, {useState, useContext} from 'react';

import '../App.css';
import skeletonImage from '../images/skeleton.jpg'

let context = React.createContext(null);
function Parent() {
  const [fName, setfName] = useState(true);


  function setAllCards()
  {
    setfName(!fName);
  }


  return (
    <context.Provider value={{ fName }}>
        <button onClick={setAllCards}> CHANGE THEME </button>
        <CardCollection />
    </context.Provider>
  );
}

function CardCollection(){
  const cards = [];

  for(let i = 0; i < 3; i++)
  {
    cards.push(<Card key = {i} />);
  }

  return(<><div className = "Card-container"> {cards} </div> <div className = "Card-container"> {cards} </div> </>);
}

function Card() {
  const { fName } = useContext(context);
  let text;
  if(fName)
    text = "TRUE";
  else
    text = "FALSE";

  return(
    <div className = "Card" onClick={switchProperties}>
      <img src = {skeletonImage} alt = "skelly"/>
      {text}
    </div>
  )

  function switchProperties(){
    console.log("CLICKED");
  }

}

export default Parent;
