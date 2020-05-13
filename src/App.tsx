import React from 'react';
import logo from './logo.svg';
import './App.css';

//local imports
import StandardButton from './atoms/button/standard-button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div style={{display:'inline-block'}}>
          <StandardButton 
              value = 'New Standard Button'
              name = 'my new name'
              id = 'new-button-id'
              clickHandler = { (e) =>{console.log('clicked')}} 
              color = '#FFFFFF'
              bgColor = 'black'
          />
          <StandardButton clickHandler = { (e) =>{console.log('clicked')}}/>
        </div>
        test
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
