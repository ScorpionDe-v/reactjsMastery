import React from 'react'

const Product = ({title,brand,price,ram,rom,camera,price,fingerprint}) => {
    // const obj={
    //   title:'Galaxy S24 Ultra',
    //   brand:'Samsung',
    //   price:100000   
    // }
  return (
    <div>
      <h3>Mobile Name = {title}</h3>
      <h3>Mobile Brand = {brand}</h3>
      <h3>Mobile Price = {price}</h3>
      <h3>Mobile RAM = {ram}</h3>
      <h3>Mobile ROM = {rom}</h3>
      <h3>Mobile Camera = {camera}</h3>
      <h3>Mobile Price = {price}</h3>
      <h3>Finger Print = {fingerprint}</h3>
    </div>
  )
}

export default Product
