import React from 'react'
import About from '../components/About';
import Blue from '../components/Blue';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Project from '../components/Project';
import Services from '../components/Services';
import Video from '../components/Video';
import Login1 from '../components/Login1';
function Home() {
  return (
    <main>
     <Header/>

        <Hero/>
      <Services/>
      <About/>
      <Blue/>
      <Project/>
      <Video/>
      <Login1/>
    </main>
  )
}

export default Home
