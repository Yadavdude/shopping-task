// import './App.css';
import Header from './Header';
import {AddProduct} from './AddProduct';
import {Product} from './Product';
import React, { useState, useEffect  } from 'react';
import {useNavigate} from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();
  let initProduct;
 if( localStorage.getItem("Product") === null){
   initProduct = [];

 }
 else{
   initProduct = JSON.parse(localStorage.getItem("Product"));
 }
 
 const  onDelete = (Product)=>{
   console.log("I am ondelete of Product", Product);
 

  setProducts(Products.filter((e) => {
    return e !== Product;
  }));
  console.log("deleted", Products)
  localStorage.setItem("Products", JSON.stringify(Products));
 } 

 const addProduct = (title, desc) => {
  console.log(title,desc);
   console.log("I am adding this Product", title, desc)
   let sno ;
   if(Products.length === 0) {
     sno = 0;
   }
   else{
      sno = Products[Products.length -1 ].sno + 1;
   }
   const myProduct = {
     sno: sno,
     title: title,
     desc:  desc,
   }
   setProducts([...Products, myProduct]);
   console.log(myProduct);  

 }

  const [Products, setProducts] = useState(initProduct);
  useEffect(() => {
    if (!localStorage.getItem('user-info')) {
      navigate('/')
  }
    localStorage.setItem("Products", JSON.stringify(Products));
   }, [Products])

  return (
    <React.Fragment>
   
   <Header  title="My Shopping" searchBar={true}/>

     <AddProduct addProduct={addProduct}/>
   <Product Products={Products} ondelete={onDelete}/>
    </React.Fragment>
  );
}

export default Homepage;
