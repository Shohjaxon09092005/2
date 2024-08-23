import React, { useEffect, useState } from 'react'
import '../styles/about.css'
import Banner from './Banner'
import { URL } from '../utils/url'
function About() {
    const [about, setAbout]=useState(null)
    useEffect(()=>{
        getAbout()
    },[])
    async function getAbout(){
        let fetchAbout =await fetch(`${URL}/about-us`)
        let json = await fetchAbout.json()
        setAbout(json?.data[0])
    }
  return (
    <section className='about'>
      <div className="container">
        <div className="about__wrapper">
            <div className="about__content">
                <h2>{about?.title}</h2>
                <p>{about?.description}</p>
                <span>{about?.hyperlink}</span>
            </div>
            <img  width={500} height={350} src={about?.imageLink} alt="" />
        </div>
        <Banner/>
      </div>
    </section>
  )
}

export default About
