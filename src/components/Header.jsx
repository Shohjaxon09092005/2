import React, { useRef } from 'react'
import '../styles/header.css'
import rasm from '../burgerMenu.png'
import { NavLink } from 'react-router-dom'
function Header() {
  let modal_bur =useRef()
  let burger_icon=useRef()
  function modal(){
    modal_bur.current.classList.add("open")
    burger_icon.current.classList.add("del_burger")


  }
  function delX(){
    modal_bur.current.classList.remove("open")
    burger_icon.current.classList.remove("del_burger")
  }
  return (
    <header className='header'>
      <div className="container">
        <div ref={modal_bur} className="modal">
          <span onClick={delX}>X</span>
        <ul className='header__list1'>
            <li>Главная</li>
            <li>Наши проекты</li>
            <li>Услуги</li>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink to='/register'>Register</NavLink>
            </li>
        </ul>
        </div>
        <img ref={burger_icon} onClick={modal} className='burger' width={50}  height={50} src={rasm} alt="" />
        <ul className='header__list del'>
            <li>Главная</li>
            <li>Наши проекты</li>
            <li>Услуги</li>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink to='/register'>Register</NavLink>
            </li>
        </ul>
      </div>
        <hr />
    </header>
  )
}

export default Header
