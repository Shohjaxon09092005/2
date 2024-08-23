import React, { useEffect, useReducer, useState } from 'react'
import '../styles/users.css'
import { NavLink } from 'react-router-dom'
import { URL } from '../utils/url'
function Users() {
    const [user ,setuser]=useState(null)
    const[x,y]=useReducer(x=>x+1,0)
    useEffect(()=>{
        getUsers()

    },[x])
    async function getUsers(){
        let fetchUsers=await fetch(`${URL}/users`)
        let json =await fetchUsers.json()
        setuser(json?.data)
    }
    function deleteUser(e){
       
        fetch(`${URL}/users/${e.target.id}`,{
            method:'DELETE'
        })
        y()

    }
  return (
    <div className='users'>
        <NavLink to='/'>Main page</NavLink>
     {user?.map((item)=>{
        return(
            
            <div className="user__card" key={item?._id}>
            <h4>{item.username}</h4>
            <p>{item.email}</p>
            <button id={item._id} onClick={(e)=>deleteUser(e)}>delete</button>
          </div>
        )
     })}
    </div>
  )
}

export default Users
