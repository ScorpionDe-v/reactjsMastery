import React from 'react'
import Superman from './Superman'

const Person = () => {

     
  const name= "Dev"
  const age = 24

  const person={
  name:'Nakul',
  age:24,
  gmail:'nakul@gmail.com',
  pincode:209695
  }

   const product={
    title:"iphone",
    model:'iphone-15',
    price:65000
   }

  return (
    <>
     <div>
      {/* <h1>{name}</h1> */}
      {/* <p>{age}</p> */}
      <h1>Name = {person.name}</h1>
      <h1>Age = {person.age}</h1>
      <h1>Gmail = {person.gmail}</h1>
      <h1>Pincode = {person.pincode}</h1>
    </div>
    <Superman/>
    <div>title={product.title}</div>
    <div>title={product.model}</div>
    <div>title={product.price}</div>
    </>
  )
}

export default Person
