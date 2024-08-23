import React from 'react'
import '../styles/footer.css'
import rasm1 from '../pochta.png'
import rasm2 from '../call.png'
import rasm3 from '../location (2).png'
import rasm4 from '../Group.png'
function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__wrapper">
            <div className="foouter__card">
                <h3>Контактная информация</h3>
                <span><img src={rasm1} alt=""  />test@test.ru</span>
                <span><img src={rasm2}alt=""  />+8 777 555 66 99</span>
                <span><img src={rasm3} alt=""  />Москва, Бульвар Ленина 33</span>
            </div>
            <div className="foouter__card">
                <h3>Основные ссылки</h3>
                <span><img src={rasm4} alt=""  />Главная</span>
                <span><img src={rasm4} alt=""  />Наши проекты</span>
                <span><img src={rasm4} alt=""  />Наши услуги</span>
                <span><img src={rasm4} alt=""  />Контакты</span>
            </div>
            <div className="foouter__card">
                <h3>Наши проекты</h3>
                <span><img src={rasm4} alt=""  />РосНано</span>
                <span><img src={rasm4} alt=""  />Сколково</span>
                <span><img src={rasm4} alt=""  />Проект “Восток”</span>
                <span><img src={rasm4} alt=""  />ТЭЦ Калининграда</span>
            </div>
            <div className="foouter__card">
                <h3>Социальные сети</h3>
                <span><img src={rasm4} alt=""  />VK.com</span>
                <span><img src={rasm4} alt=""  />Instagram</span>
                <span><img src={rasm4} alt=""  />Facebook</span>
                <span><img src={rasm4} alt=""  />Twitter</span>
            </div>
        </div>
        <p>(с) 2019. Все права защищены.</p>
      </div>
    </footer>
  )
}

export default Footer
