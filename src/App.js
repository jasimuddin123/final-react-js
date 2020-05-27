import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =['Jasim', 'Zahid Iqbal', 'Bapparaz', 'Sonabondu']
  return (
    <div className="App">
      <header className="App-header">
        <p> I am react Person </p>

        <Person name="Jasim Uddin" job="Sp Supervisor"></Person>
        <Person name="Saima" job="House Wife"></Person>

     
    
      </header>
    </div>
  );
}
function Person(props){
  return(
  <div style={{border:'10px solid green', color:'cyan', width:'599px', backgroundColor:'gray',margin:'10px'}}>

    <h3> My Name: {props.name} </h3>
    <h3>My Profession: {props.job} </h3>
  </div>

  )
}


export default App;
