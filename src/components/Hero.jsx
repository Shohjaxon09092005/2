import React, { useEffect, useState } from 'react'
import '../styles/hero.css'
import { URL } from '../utils/url';
function Hero() {
  const [hero, setHero] = useState(null);
  useEffect(() => {

    getHero()
  }, [])
  async function getHero() {
    let fetchHero = await fetch(`${URL}/headers`)
    let json = await fetchHero?.json()
    setHero(json?.data[0])
  }
  return (
    <section className='hero' style={{ backgroundImage: `url(${hero?.imageLink})` }}>
      <div className="container">
        <div className="hero__content">
          <p>{hero?.title}</p>
          <h2>{hero?.description}</h2>
          <button className='button'>Наши проекты</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
