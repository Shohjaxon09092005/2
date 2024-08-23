import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/register.css'
import { URL } from '../utils/url'
function Register() {
  let name__input=useRef()
  let phone__input=useRef()
  let email__input=useRef()
  let password__input=useRef()
  function handleSubmit(e){
    e.preventDefault();
    let ready={
      username: name__input.current.value,
      phone_number: phone__input.current.value,
      email: email__input.current.value,
      password: password__input.current.value,
      imageLink: "https://picsum.photos/100/100",

    };
    fetch(`${URL}/users/`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(ready)
    })
  }
  return (
    <div className='form__wrapper'>
      <form className='form' onSubmit={(e)=>handleSubmit(e)}>
        <h1>Register</h1>
        <input ref={name__input} type="text" placeholder='name' />
        <input ref={phone__input} type="number" placeholder='phone' />
        <input ref={email__input} type="email" placeholder='email' />
        <input ref={password__input} type="text" placeholder='password' />
        <button type="submit">Register</button>
        <NavLink to='/'>Go Back</NavLink>

      </form>
    </div>
  )
}

export default Register
