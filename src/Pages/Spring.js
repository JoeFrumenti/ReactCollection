import * as React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

function Spring() {


  const fetchData = () => {
    fetch('http://localhost:8080/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // or response.text() if the response is not JSON
    })
    .then(data => {
      // Handle the data received from the API
      console.log(data);
    })
    .catch(error => {
      // Handle errors, such as network issues or server errors
      console.error('No fetch sry:', error);
    });
  };

  return(
    <button onClick={fetchData}> Get </button>
  )
}

export default Spring;

