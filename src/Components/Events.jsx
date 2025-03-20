import React from 'react'

const Events = () => {

    const handleClick=()=>{
        alert('you click the button')
    }

    const addition =(a)=>{
       alert(a+10) 
    }

  return (
    <div>
      <h1>We are learning events</h1>
      <button onMouseOver={handleClick}>Click this button</button>
      <button onClick={()=>addition(10)}>Button 2</button>
    </div>
  )
}

export default Events
