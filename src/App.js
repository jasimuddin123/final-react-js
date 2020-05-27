import React, { useState } from 'react';
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
  const [count, setCount] = useState(12);
  return(
  <h2>Count : {count}</h2>

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
