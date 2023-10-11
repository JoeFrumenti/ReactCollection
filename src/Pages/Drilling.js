import React, {useState, useContext} from 'react';

import '../App.css';
import skeletonImage from '../images/skeleton.jpg';
import sunImage from '../images/sun.jpg';

let context = React.createContext(null);
function Parent() {
  const [fName, setfName] = useState(Array(6).fill(false));


  function setAllCardsSkeleton()
  {
    let tempNames = Array(6).fill(true);
    setfName(tempNames);
  }


  return (
    <context.Provider value={{ fName }}>
        <button onClick={setAllCardsSkeleton}>SKELETON</button>
        <CardCollection />
    </context.Provider>
  );
}

function CardCollection(){
  const cards = [];

  for(let i = 0; i < 6; i++)
  {
    cards.push(<Card key = {i} index = {i}/>);
  }

  return(<>
           <div className = "Card-container"> {cards.slice(0,3)} </div>
           <div className = "Card-container"> {cards.slice(3)} </div>
         </>);
}

function Card({index}) {
  const { fName } = useContext(context);
  let text;

  if(fName[index])
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
