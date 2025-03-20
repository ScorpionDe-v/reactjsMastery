import React, { useState } from 'react'

const Counter = () => {
    // let counter=0;
    const [product,setProduct]=useState('iphone');
    const [arr , setArr]=useState([10,20,30])
    const [obj , setObj]=useState({
      name : 'suman',
      salary : 50000,
      age:24

    })
    const [counter,setcounter]= useState(10);

    const increaseBy1=()=>{
      // counter++;
      setcounter(counter+1);
      console.log("counter = ",counter)  
    }
    const decreaseBy1=()=>{
      // counter--;
      setcounter(counter-1);
      console.log(("counter =",counter))
    }
  return (
    <div>
      <h2>Name = {obj.name}</h2>
      <h2>Name = {obj.salary}</h2>
      <h1>{counter}</h1>
      <button onClick={increaseBy1}>Increase</button>
      <button onClick={decreaseBy1}>Decrease</button>
    </div>
  )
}

export default Counter
