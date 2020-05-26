import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> I am react Person </p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
    
      </header>
    </div>
  );
}

function Person(){
  return (
  <div style={{border:'1px solid green', margin:'20px'}}>
    <h2>This is Heading two</h2>
    <h3>This is heading three</h3>
  </div>
  )
}
export default App;
