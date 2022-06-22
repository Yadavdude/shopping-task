import React from 'react'

export const ProductItem = ({Product, onDelete}) => {
  return (
    <>
    <div>
      <h4>{Product.title}</h4>
      <p>{Product.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>onDelete(Product)}>Delete</button>
    </div>
    <hr/>
    </>
  )
}


