import React, { useEffect, useState } from 'react'
import '../styles/blue.css'
import { URL } from '../utils/url'
function Blue() {
    const [blue, setBlue] = useState(null)
    const [blueCard, setBlueCard] = useState(null)
    useEffect(() => {
        getBlue()
        getBlueCard()
    }, [])
    async function getBlue() {
        let fetchBlue = await fetch(`${URL}/all-services`)
        let json = await fetchBlue.json()
        setBlue(json?.data[0])
    }
    async function getBlueCard() {
        let fetchBlueCard = await fetch(`${URL}/cards`)
        let json = await fetchBlueCard.json()
        setBlueCard(json?.data)
    }
    return (
        <section className='blue'>
                <div className="back_blue"></div>
            <div className="container">
                <div className="blue__content">
                    <h2>{blue?.title}</h2>
                    <button className='button'>Все услуги</button>
                </div>
                    <div className="blue__wrapper">
                    {blueCard?.map((item) => {
                        return (
                            <div className="blue__card" key={item?._id}>
                                <img width={350} height={300} src={item?.imageLink} alt="" />
                                <h4>{item?.title}</h4>
                                <p>{item?.description}</p>
                                <span>{item?.referal}</span>

                            </div>
                        )


                    })}
                </div>

            </div>

        </section>
    )
}

export default Blue
