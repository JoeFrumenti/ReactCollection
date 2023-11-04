import React, {useState, useContext} from 'react';

import '../App.css';
import skeletonImage from '../images/skeleton.jpg';
import sunImage from '../images/sun.jpg';

let context = React.createContext(null);

function Parent() {
  const [cardThemes, setCardThemes] = useState(Array(6).fill(false));


  function setDarkMode(){
  document.body.style = 'background: grey;';

    let temp = Array(cardThemes.length).fill(true);
    setCardThemes(temp);
  }

  function setLightMode(){
  document.body.style = 'background: white;';

    let temp = Array(cardThemes.length).fill(false);
    setCardThemes(temp);
  }


  return (
    <context.Provider value={[cardThemes,setCardThemes]}>

      <button onClick={setLightMode}>LIGHT MODE</button>
      <button onClick={setDarkMode}>DARK MODE</button>

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
  const [cardThemes, setCardThemes] = useContext(context);
  let text;
  let image;

  function switchProperties(){
      let temp = Array(cardThemes.length);
      for(let i =0; i < cardThemes.length;i++)
      {
        temp[i] = cardThemes[i];
      }
      temp[index] = !temp[index];
      setCardThemes(temp);
    }

  if(cardThemes[index]){
    text = "AAAA SO SPOOKY";
    image = skeletonImage;
  }
  else{
    text = "What a beautiful baby!";
    image = sunImage;
  }

  return(
    <div className = "Card" onClick={switchProperties}>
      <img src = {image} alt = "skelly"/>
      {text}
    </div>
  )
}
export default Parent;
