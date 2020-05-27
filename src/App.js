import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =['Jasim', 'Zahid Iqbal', 'Bapparaz', 'Sonabondu']
  const products =[
    {name:'Photoshop', price:'$299.59'},
    {name:'Illustrator', price:'$199.50'},
    {name:'Adobe', price:'$100.20'}

  ]
  return (
    <div className="App">
      <header className="App-header">
        <p> I am react Person </p>

      <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
     

     
    
      </header>
    </div>
  );
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
      <h3>Name:{name}</h3>
      <h3>Price: {price} </h3>
      <button style={btnStyle}>Buy Now</button>
    </div>
  )
}


export default App;
