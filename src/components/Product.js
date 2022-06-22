import React from 'react'
import {ProductItem} from "./ProductItem";

export const Product = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">Products List</h3>
      {props.Products.length===0? "No Products to display":
      props.Products.map((Product)=>{
        console.log(Product.sno);
        return (<ProductItem Product={Product} key={Product.sno} onDelete={props.ondelete}/>
        )
      
      })
    }
    </div>
  )
}

