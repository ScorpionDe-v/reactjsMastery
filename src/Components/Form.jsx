import React, { useState } from 'react'

const Form = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your form has been submitted"+name+" "+email+" "+password);
        setName('');
        setEmail('');
        setPassword('');
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
      name:- <input value={name} onChange={(e)=>setName(e.target.value)} type="text" />
      <h5>{name}</h5>
      </div>
      
      <br />
      <div>
        Email:- <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
        <h5>{email}</h5>
      </div>
      
      <br />
      <div>
        Password:- <input value={password} onChange={(e)=>setPassword(e.target.value)}  type="password"/>
        <h5>{password}</h5>
      </div>
      
      <br />
      <div>
        <button>Submit</button>
      </div>
      </form>
    </div>
  )
}

export default Form
