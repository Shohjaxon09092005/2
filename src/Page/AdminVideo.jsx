import React, { useRef } from 'react'
import { URL } from '../utils/url'

function AdminVideo() {
    let title = useRef()
    let desc = useRef()
    let video = useRef()
    let image = useRef()
    async function updateForm(e) {
        e.preventDefault()
        let ready = {
            title:title.current.value,
            description: desc.current.value,
            video:video.current.value,
            imageLink: image.current.value,
        }
await fetch(`${URL}/videos/666fe661a627cdbe6cae528d`,{
    method:"PUT",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(ready)
})

    }
    return (
        <div className='adminVideo'>
            <form onSubmit={(e) => updateForm(e)} className='hero_form' >
                <h2>Video page</h2>
                <input ref={title} type="text" placeholder='title' />
                <input ref={desc} type="text" placeholder='description' />
                <input ref={video} type="text" placeholder='video' />
                <input ref={image} type="text" placeholder='image' />
                <button type="submit">Update</button>
            </form>

        </div>
    )
}

export default AdminVideo
