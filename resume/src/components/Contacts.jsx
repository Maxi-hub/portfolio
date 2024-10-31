import { useNavigate } from "react-router-dom"


export const Contacts = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className="contacts center">
            <button className="button-back" onClick={handleBack}>&lt; Вернуться</button>
            <h1 className="contacts-title" >Мои контакты</h1>
            <div className="contacts-box">
                <div className="contacts-info">
                    <div className="contacts-item">
                        <img className="icon-mail" src="../img/mail.png" alt="Иконка электронной почты" />
                        <p>em.lebedeva@mail.ru</p>
                    </div>
                    <div className="contacts-item">
                        <img className="icon-telegram" src="../img/telegram.png" alt="Иконка телеграм" />
                        <a href="https://t.me/+79851539474">https://t.me/+79851539474</a>
                    </div>
                    <div className="contacts-item">
                        <img className="icon-phone" src="../img/phone.png" alt="Иконка телефонной трубки" />
                        <p>+7985-153-9474</p>
                    </div>

                </div>
                <form className="contacts-form">
                    <div className="contacts-form-item">
                        <label htmlFor="name">Ваше имя</label>
                        <input className="contacts-inputName" type="text" id="name" placeholder="Ваше имя" required />
                    </div>
                    <div className="contacts-form-item">
                        <label htmlFor="e-mail">Ваш email</label>
                        <input className="contacts-inputEmail" type="email" id="email" placeholder="email@example.ru" required />
                    </div>
                    <div className="contacts-form-item">
                        <label htmlFor="text">Введите ваш текст</label>
                        <textarea className="contacts-inputText" type='text' placeholder="Введите ваш текст. Форма отправки текста будет настроена при размещении на сервере" required></textarea>
                    </div>
                    <button type="submit" className="button-send">Отправить</button>
                </form>
            </div>
        </div>
    )
}
