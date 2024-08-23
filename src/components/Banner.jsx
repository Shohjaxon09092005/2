import React, { useEffect, useState } from 'react'
import { URL } from '../utils/url'

function Banner() {
    const [banner, setBanner] = useState(null)
    useEffect(() => {
        getBanner()
    }, [])
    async function getBanner() {
        let fetchBanner = await fetch(`${URL}/about-us_number`)
        let json = await fetchBanner.json()
        setBanner(json?.data)
    }
    return (
        <div className='banner'>
            <div className="banner__wrapper">
                {banner?.map((item) => {
                    return (
                        <div className="banner__card" key={item?._id}>
                            <div className="banner__img">
                                <img width={100} src={item?.imageLink} alt="" />
                                <h4>{item?.numbers}</h4>
                            </div>
                            <p>{item?.title}</p>
                        </div>

                    )
                })}

            </div>
        </div>

    )
}

export default Banner
