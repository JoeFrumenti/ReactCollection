import * as React from 'react';
import MaskedInput from 'react-text-mask';
import axios from 'axios';

import {useState} from 'react';


const path = 'http://localhost:8080/';


function Spring() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [userData, setUserData] = useState({
    username: null,
    password: null,
  })

  const deleteUser = () => {
    axios.delete(path + 'user/mariam')
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
    const mariam = {
                     username: 'mariam',
                     password: 'IloveAlex',
                   };

    axios.post(path + 'user', mariam).then((response) => {
       if(response.status === 200){
         console.log(response.data);
       }
       else
         console.log("error: User already exists");
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

  const updateUsername = event => {
    setUsername(event.target.value);
  };

  const updatePassword = event => {
      setPassword(event.target.value);
  };

  const login = async () => {
    const params = {
      param1: username,
      param2: password,
    };


    const url = new URL(path + 'user/login');
    url.search =  new URLSearchParams(params).toString();
    console.log(url.href);

    try {
      const response = await fetch(url.href);
      const data = await response;
      console.log(data);
      if(data.status == 200)
      {
        console.log("Login success!");
        setUserData({
          username: username,
          password: password,
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  };

  const logout = () => {
    setUserData({
      username: null,
      password: null,
    });
  }

  return(
    <>
      Current login: {userData.username}
      <br/>
      <button onClick={fetchData}> Get </button>
      <button onClick={getHello}> Hello </button>
      <button onClick={deleteUser}> Delete </button>
      <button onClick={addUser}> Post </button>
      <br/>
      <br/>
      <input
        type="text"
        id="username"
        name="username"
        onChange={updateUsername}
        value={username}
      />
      <br/>
      <input
       // mask = {[]}
        type="text"
        id="password"
        name="password"
        onChange={updatePassword}
        value={password}
      />
      <br/>
      <button onClick={login}> Log In </button>
      <button onClick={logout}> Log Out </button>
    </>
  )
}

export default Spring;

