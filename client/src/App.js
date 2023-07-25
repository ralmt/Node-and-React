import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {

    axios.get('http://localhost:5000/message')
      .then(res => {
        // console.log('Status Code:', res.status);

        const msg = res.data;
        // console.log(msg.message);
        setMessage(msg.message);

      })
      .catch(err => {
        console.log('Error: ', err.message);
      });
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {message}
        </a>
      </header>
    </div>
  );
}

export default App;
