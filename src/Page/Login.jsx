import React, { useEffect, useRef, useState } from 'react'
import '../styles/loginPage.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { URL } from '../utils/url'
function Login() {
  let email_input=useRef()
  let password_input=useRef()
  let navigate =useNavigate()
  const [allUsers,setAllUsers]=useState(null)
  const [xabar,setXabar]=useState(false)
  useEffect(()=>{
    getUsers()

  },[])
  async function getUsers(){
    let fetchUsers =await fetch(  `${URL}/users`)
    let json =await fetchUsers.json()
    setAllUsers(json.data)
  }
  function handleSubmit(e){
    e.preventDefault()
    let user =allUsers.find((item)=>item.email ===email_input.current.value)
    if(user?.password===password_input.current.value){
      navigate(`/admin/${user._id}`)

    }else{
      navigate('/login')
      setXabar(true)
    }
  }
  return (
    <div className='login__wrapper'>
      <h1>Login</h1>
      
      {xabar && <h2>login yoki parol xato</h2>}
      <form onSubmit={(e)=>handleSubmit(e)} >
        <input ref={email_input} type="email" placeholder='email' />
        <input ref={password_input}  type="text" placeholder='password' />
        <button type="submit">Login</button>
      </form>
      <NavLink to='/'>Go Back</NavLink>
    </div>
  )
}

export default Login
