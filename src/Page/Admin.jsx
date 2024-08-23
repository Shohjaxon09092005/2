import React, { useEffect, useReducer, useRef, useState } from 'react'
import {  NavLink, useParams } from 'react-router-dom'
import '../styles/admin.css'
import AdminBanner from '../components/AdminBanner'
import AdminBannerNumber from '../components/AdminBannerNumber'
import AdminBlue from '../components/AdminBlue'
import AdminBlueCard from '../components/AdminBlueCard'
import { URL } from '../utils/url'
import OurProject from '../components/OurProject'
import AdminVideo from './AdminVideo'
function Admin() {
  const [allUsers, setAllUsers] = useState(null)
  const[a,b]=useReducer(x=>x+1, 0)
  let id = useParams()
  useEffect(() => {
    getUsers()
    getService()
  }, [a])
  async function getUsers() {
    let fetchUsers = await fetch(`${URL}/users`)
    let json = await fetchUsers.json()
    setAllUsers(json.data)
  }
  let user = allUsers?.find((item) => item._id === id.userID)
  // Hero start
  let hero_title = useRef()
  let hero_desc = useRef()
  let hero_img = useRef()

  function heroSubmit(e) {
    e.preventDefault()
    let ready = {
      title: hero_title.current.value,
      description: hero_desc.current.value,
      imageLink: hero_img.current.value,
    }
    console.log(ready);
    fetch(  `${URL}/headers/666fd2a7047f1c41557d23f8`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"

      },

      body: JSON.stringify(ready)
    })
  }
  //Hero end
  // Service start
  let ser_title = useRef()
  let ser_subtitle = useRef()
  function handleService() {
    let ready = {
      description: ser_title.current.value,
      title: ser_subtitle.current.value,

    }
    console.log(ready);

    fetch(`${URL}/services/666fdd54e522b23994263bd9`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ready)

    })
    b()
  }
  const[serID,setSerID]=useState(null)
  let editForm=useRef()
  function openEditForm(e){
    editForm.current.classList.add('open')
    setSerID(e.target.id)

  }
  let create_ser_title=useRef()
  let create_ser_subtitle=useRef()
  let create_ser_img=useRef()
  function createSerCard(e){
    e.preventDefault()
    let ready={
      title:create_ser_title.current.value,
      description:create_ser_subtitle.current.value,
      imageLink: create_ser_img.current.value
    };
    fetch(`${URL}/content-services`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json"

      },

      body: JSON.stringify(ready)
    })
    b()
  }
  const[ser,setSer]=useState(null)
  async function getService(){
    let fetchSer =await fetch(`${URL}/content-services`)
    let json=await fetchSer.json()
    setSer(json?.data)
  }
  console.log(ser);
  function delSerCard(e){
    fetch(`${URL}/content-services/${e.target.id}`,{
      method:"DELETE",
    
    })
    
  }
let edit_ser_title=useRef()
let edit_ser_subtitle=useRef()
let edit_ser_img=useRef()
  function editSerCard(e){
    let ready={
      description: edit_ser_title.current.value,
      title: edit_ser_subtitle.current.value,
      imageLink:edit_ser_img.current.value
    }
    e.preventDefault()
    fetch(`${URL}/content-services/${serID}`,{
      method:"PUT",  
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ready)
    })
  }
  //Service end
  return (
    <div >
      <div>
        <h1>Welcome {user?.username}</h1>
        <h4>email:{user?.email}</h4>
        <h4>phone:{user?.phone_number}</h4>
        <h4>password:{user?.password}</h4>

      </div>
      <div className="login__wrapper">
        <form onSubmit={(e) => heroSubmit(e)} >
          <h2>Hero</h2>
          <NavLink to='/user'>Users</NavLink>
          <input ref={hero_title} type="text" placeholder='title' />
          <input ref={hero_desc} type="text" placeholder='description' />
          <input ref={hero_img} type="text" />
          <button type="submit">Submit</button>

        </form>
      </div>
      <NavLink to='/'>Go Back</NavLink>
      <form className='hero_form service' onSubmit={(e) => handleService(e)}>
        <h2>service</h2>
        <input ref={ser_title} type="text" placeholder='title' />
        <input ref={ser_subtitle} type="text" placeholder='subtitle' />
        <button type="submit">Update</button>
      </form>
      <div className="service__wrapper">
        <form onSubmit={(e)=>createSerCard(e)} className='hero_form service_card_create'>
          <h2>Service card create</h2>
          <input ref={create_ser_title} type="text" placeholder='title' />
          <input  ref={create_ser_subtitle} type="text" placeholder='subtitle' />
          <input ref={create_ser_img} type="text" placeholder='img' />
          <button type="submit">create</button>
        </form>
        <div>
          <form onSubmit={(e)=>editSerCard(e)} ref={editForm} className='hero_form service_card_update'>
            <h2>Service card update</h2>
            <input ref={edit_ser_title} type="text" placeholder='title' />
            <input ref={edit_ser_subtitle} type="text" placeholder='subtitle' />
            <input ref={edit_ser_img} type="text" placeholder='img' />
            <button type="submit">update</button>
          </form>
        </div>
        <div className="xyz">
         {ser?.map((item)=>{
          return(
            <div className="ser_cards" key={item?._id}>
            <h2>{item.title}</h2>
            <button id={item._id} onClick={(e)=>delSerCard(e)}>delete</button>
            <button id={item._id} onClick={(e)=>openEditForm(e)}>update</button>
          </div>
          )
         })}
        </div>
      </div>

      <AdminBanner/>
      <AdminBannerNumber/>  
      <AdminBlue/>
      <AdminBlueCard/>
      <OurProject/>
      <AdminVideo/>

    </div>
  )
}

export default Admin
