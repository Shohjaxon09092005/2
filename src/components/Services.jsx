import React, { useEffect,  useState } from 'react'
import '../styles/services.css'
import { URL } from '../utils/url'
function Services() {
    const [service, setService] = useState(null)
    const [serContent, setSerContent] = useState(null)
    
    useEffect(() => {
        getService()
        getSerContent()
    }, [])
    async function getService() {
        let fetchService = await fetch(`${URL}/services`)
        let json = await fetchService.json()
        setService(json?.data[0])

    }
    async function getSerContent() {
        let fetchSerContent = await fetch(`${URL}/content-services`)
        let json = await fetchSerContent.json()
        setSerContent(json?.data)

    }
    console.log(serContent);
    return (
        <section className='service'>
            <div className="container">
                <div className="service__content">
                    <h2>{service?.title}</h2>
                    <p>{service?.description}</p>
                </div>
                <div className="service__grid">
                    {serContent?.map((item) => {
                        return (
                            <div className="service__card" key={item?._id}>
                                <img width={100} height={100} src={item?.imageLink} alt="" />
                                <div className="service__text">
                                    <h4>{item?.title}</h4>
                                    <p>{item?.description}</p>
                                </div>

                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Services
