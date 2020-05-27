import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const nayoks =['Jasim','Alamgir', 'Rubel','Abdur Razzak', 'Sagar', 'Halka Khan','Sonabondu','Kalabondu']
  const products =[
    
    {name:'Phootoshop', price:'$200.50'},
    {name:'Illustrator', price:'$100.30'},
    {name:'Adove', price:'$20.22'},
    {name:'Premimum', price:'$150.20'}
  
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p> I am react Person </p>

       
      <Counter></Counter>
      <Users></Users>
      
        <ul>
          {
            nayoks.map(nayok =><li>{nayok}</li>)
          }
          {
            products.map(product =><li>{product.name}</li>)
          }

          {
            products.map(pd=><Product product={pd}></Product>)
          }
  
        </ul>
    
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(10);
  const increaseHandler = () => setCount(count + 1);
  return(
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>

  )
}

  function Users(){
    const [users, setUsers] = useState([]);
    useEffect( ()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))

    })
  return(
    <div>
      <h3>Dynamic User:{users.length}</h3>

      {
        users.map( user => <li>{user.name}</li>)
      }
    </div>
  )

  }

function Product (props){
  const productStyle ={
    borderRadius:'5px',
    backgroundColor:'gray',
    height:'200px',
    width:'400px',
    float:'left',
    border:'2px solid green',
    margin:'5px'
  }

  const btnStyle ={
    backgroundColor:'blue',
    color:'#fff',
    borderRadius:'5px',
    width:'100px',
    fontWeight:'bold'
  }
const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h3>Name: {name}</h3>
      <h3>Price:{price} </h3>
      <button style={btnStyle}>Buy Now</button>
    </div>
  )
}


export default App;
