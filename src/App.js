import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const person = {
  name:"Jasim Uddin",
  job: "Pakibagi"
}

const person2 = {
  name:"Kamal Hossain",
  job:"Eag Supplier"
}

const style = {
  color:'red',
  backgroundColor:'yellow'
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
  <h2 className="" style={style}>heading title {person.name + " " + person.job}</h2>
  <h3 style={{backgroundColor:'cyan', color:'blue'}}>Name:{person2.name + " " + person2.job}</h3>
         <h2>This is Jasim Uddin practice React js</h2>
        </p>
     
      </header>
    </div>
  );
}

export default App;
