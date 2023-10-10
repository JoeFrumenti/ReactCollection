import React, {useState, useContext} from 'react';

let context = React.createContext(null);
function Drilling() {
  const fName = "first";
  return (
    <context.Provider value={{ fName }}>
        <Child />
    </context.Provider>


  );
}
function Child() {
  const { fName } = useContext(context);
  return(
    <>
      {fName}
    </>
  )
}

export default Drilling;
