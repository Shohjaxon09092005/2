import React, { useEffect, useReducer, useRef, useState } from 'react'
import { URL } from '../utils/url'

function OurProject() {
    const [update, forceUpdate] = useReducer(x => x + 1, 0)
    const [data, setData] = useState(null)
    const [id, setId] = useState("")
    useEffect(() => {
        getData()
    }, [update])
    async function getData() {
        let fetchData = await fetch(`${URL}/projects`)
        let json = await fetchData.json()
        setData(json.data)

    }

    let title = useRef()
    let desc = useRef()
    async function handleSubmit(e) {
        e.preventDefault()
        let ready = {
            title: title.current.value,
            description: desc.current.value,
        }
        await fetch(`${URL}/all-projects/666fe207faf59070189b5dc5`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ready)
        })
    }
    let c_title = useRef()
    let c_img = useRef()
    let up_title = useRef()
    let up_img = useRef()
    let up_form = useRef()
    async function CreateForm(e) {
        e.preventDefault()
        let tayyor = {
            title: c_title.current.value,
            imageLink: c_img.current.value
        }
        await fetch(`${URL}/projects`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tayyor)
        })
    }
    async function delData(e) {
        e.preventDefault()
        await fetch(`${URL}/projects/${e.target.id}`,
            {
                method: "DELETE"
            }
        )
        forceUpdate()
    }
    async function updateForm(e) {
        e.preventDefault()
        setId(e.target.id)

        up_form.current.classList.add("open")

    }
    async function formUpdate(e) {
        e.preventDefault()
        let ready = {
            title: up_title.current.value,
            imageLink: up_img.current.value
        }
        await fetch(`${URL}/projects/${id

        }`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ready)
        })
        up_title.current.value=""
        up_img.current.value=""
        up_form.current.classList.remove("open")
        forceUpdate()
    }
    return (
        <div className='ourPro'>
            <div className="container">
                <form onSubmit={(e) => handleSubmit(e)} className='hero_form'>
                    <h2>Our project  section</h2>
                    <input ref={title} type="text" placeholder='title' />
                    <input ref={desc} type="text" placeholder='description' />
                    <button type="submit">update</button>
                </form>
                <div className="our_wrapper">
                    <form className='hero_form' onSubmit={(e) => CreateForm(e)} >
                        <input ref={c_title} type="text" placeholder='title' />
                        <input ref={c_img} type="text" placeholder='image' /> <br />
                        <button type="submit">create</button>
                    </form>
                    <div>
                        <form onSubmit={(e) => formUpdate(e)} ref={up_form} className='hero_form ourUpdate' >
                            <input ref={up_title} type="text" placeholder='title' />
                            <input ref={up_img} type="text" placeholder='image' /> <br />
                            <button type="submit">update</button>
                        </form>
                    </div>
                    <div className="ourGrid">
                        {data?.map((item, index) => {
                            return (
                                <div key={index} className="ourCard">
                                    <img width={100} height={100} src={item?.imageLink} alt="" />
                                    <button onClick={(e) => delData(e)} id={item._id}>Delete</button>
                                    <button onClick={(e) => updateForm(e)} id={item._id}>Update</button>
                                </div>
                            )
                        })}


                    </div>

                </div>
            </div>

        </div>
    )
}

export default OurProject
