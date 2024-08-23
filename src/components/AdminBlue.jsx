import React, { useRef } from 'react'
import { URL } from '../utils/url'
function AdminBlue() {
    let title = useRef()
    async function handeSubmit(e) {
        e.preventDefault()
        let tayyor = {
            title: title.current.value,
          
        }
        await fetch(`${URL}/all-services/666fe0d4580596affdff3001`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(tayyor)

        })

    }
    return (
        <div className='adminBlue'>
            <form className='hero_form' onSubmit={(e) => handeSubmit(e)} >
                <h2> Blue Banner Section</h2>
                <input ref={title} type="text" placeholder='title' />
                <button type="submit">Update</button>
            </form>

        </div>
    )
}

export default AdminBlue
