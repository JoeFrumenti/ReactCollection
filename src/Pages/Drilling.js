import React, {useState, useContext} from 'react';

import '../App.css';
import skeletonImage from '../images/skeleton.jpg'

let context = React.createContext(null);
function Drilling() {
  const fName = "This is an example of context";
  return (
    <context.Provider value={{ fName }}>
        <Child />
    </context.Provider>


  );
}

function Child() {
  const { fName } = useContext(context);
  return(
    <div className = "Card">
      <img src = {skeletonImage} alt = "skelly"/>
      {fName}
    </div>
  )
}

export default Drilling;
