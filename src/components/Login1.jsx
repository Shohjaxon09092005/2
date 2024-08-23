import '../styles/login.css'
function Login1() {

  return (
    <section className='login1'>
        <div className="container">
            <div className="login1__content">
            <h2>Подпишитесь на нашу рассылку</h2>
            <p>Полезные статьи, акции, новости - получите все это сейчас!</p>
            <form className='form' action="#!">
                <input type="text" placeholder='Ваш e-mail'/>
                <button type="submit">Подписаться</button>
            </form>
            <h6>Мы не шлем спам, и передаем никому ваши данные.</h6>

            </div>

        </div>
      
    </section>
  )
}

export default Login1
