import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React from "react";
const baseURL = "http://localhost:3002";

function App() {

  React.useEffect(() => {

    const userJson = { 
      fullname: 'Ali Tasci',
      email:'ali2@ali.com',
      password:'AliPass'
  };
    axios.post(
      `${baseURL}/register`,userJson,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      }
    )
    .then(json => console.log(json))
    .catch(err => console.log(err));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
