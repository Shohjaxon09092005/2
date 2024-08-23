import React, { useEffect, useReducer, useRef, useState } from 'react'
import { URL } from '../utils/url'

function AdminBannerNumber() {
    const [number, setNumber] = useState(null)
    const[update,forceUpdade]=useReducer(x=>x+1,0)
    useEffect(() => {
        getNumber()
    }, [update])
    async function getNumber() {
        let fetchNumber = await fetch(`${URL}/about-us_number`)
        let json = await fetchNumber.json()
        setNumber(json?.data)
    }
    let title=useRef()
    let num=useRef()
    let img=useRef()
    let update_title=useRef()
    let update_num=useRef()
    let update_img=useRef()
    let update_form=useRef()
    const[id,setId]=useState("")
async function createNumber(e){
    e.preventDefault()
    let ready={
        title: title.current.value,
        numbers: num.current.value,
        imageLink: img.current.value
    }
    await fetch(`${URL}/about-us_number`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(ready)
    })
    forceUpdade()
}
function openUpdateForm(e){
    setId(e.target.id)
update_form.current.classList.add("open")
}
async function updateNumber(e){
    e.preventDefault()
    let ready={
        title: update_title.current.value,
        numbers: update_num.current.value,
        imageLink: update_img.current.value
    };
    await fetch(`${URL}/about-us_number/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(ready)
    
    })
forceUpdade()
update_form.current.classList.remove("open")
}
function deleteNumber(e){
    fetch(`${URL}/about-us_number/${e.target.id}`,{
        method:"DELETE",})
        forceUpdade()
}

    return (
        <div className='number_wrapper'>
            <form onSubmit={(e)=>createNumber(e)} className='hero_form' >
                <input ref={title} type="text" placeholder='title' />
                <input ref={num} type="text" placeholder='number' />
                <input ref={img} type="text" placeholder='rasm' />
                <button>create</button>
            </form>
            <div>
                 <form onSubmit={(e)=>updateNumber(e)} ref={update_form} className='update_number hero_form' >
                <input ref={update_title} type="text" placeholder='title' />
                <input ref={update_num} type="text" placeholder='number' />
                <input ref={update_img} type="text" placeholder='rasm' />
                <button>update</button>
            </form>
            </div>
           
            <div className="number_grid">
                {number?.map((item) => {
                    return (
                        <div className="number_card" key={item._id}>
                            <h4>{item.title}</h4>
                            <button id={item._id} onClick={(e)=>deleteNumber(e)}>del</button>
                            <button id={item._id} onClick={(e)=>openUpdateForm(e)}>update</button>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default AdminBannerNumber
