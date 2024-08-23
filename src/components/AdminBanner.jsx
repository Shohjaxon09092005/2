import React, { useRef } from 'react'
import { URL } from '../utils/url'

function AdminBanner() {
    
    let title = useRef()
    let desc = useRef()
    let link = useRef()
    let image = useRef()
    async function handeSubmit(e) {
        e.preventDefault()
        let tayyor = {
            title: title.current.value,
            description:desc.current.value,
            hyperlink: link.current.value ,
            imageLink: image.current.value,
        }
        await fetch(`${URL}/about-us/666fdeda8363a53ccab0b940`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(tayyor)

        })

    }
    return (
        <div className='adminBanner'>
            <form className='hero_form' onSubmit={(e) => handeSubmit(e)} >
                <h2>Banner Section</h2>
                <input ref={title} type="text" placeholder='title' />
                <input ref={desc} type="text" placeholder='description' />
                <input ref={link} type="text" placeholder='link' />
                <input ref={image} type="text" placeholder='image' />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default AdminBanner
