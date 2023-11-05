import * as React from 'react';
import axios from 'axios';
import {Routes, Route, Link} from 'react-router-dom';

const path = 'http://localhost:8080/';


function Spring() {

  const deleteUser = () => {
    axios.delete(path + 'user/Mariam')
    .then((response) => {
        if(response.status === 200){
          console.log(response.data);
        }
        else
          console.error("Nah");
      })
      .catch((error) => {
        console.error("Delete error:", error);
      })
    };


  const addUser = () => {
    axios.post(path + 'user').then((response) => {
       if(response.status === 200){
         console.log(response.data);
       }
       else
         console.error("Nah");
       })
     .catch((error) => {
       console.error("Add error:", error);
     })
    };


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
      console.error('Fetch error:', error);
    });
  };

  const getHello = () => {
      fetch('http://localhost:8080/sayHello')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // or response.text() if the response is not JSON
      })
      .then(data => {
        // Handle the data received from the API
        console.log(data);
      })
      .catch(error => {
        // Handle errors, such as network issues or server errors
        console.error('Fetch error:', error);
      });
    };

  return(
    <>
      <button onClick={fetchData}> Get </button>
      <button onClick={getHello}> Hello </button>
      <button onClick={deleteUser}> Delete </button>
      <button onClick={addUser}> Post </button>
    </>
  )
}

export default Spring;

