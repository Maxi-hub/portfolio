import React from 'react'

export const ContactsForm = () => {
    return (
        <form className="contacts-form">
            <div className="contacts-form-item">
                <label htmlFor="name">Ваше имя</label>
                <input
                    className="contacts-input"
                    type="text"
                    id="name"
                    placeholder="Ваше имя"
                    required />
            </div>
            <div className="contacts-form-item">
                <label htmlFor="e-mail">Ваш email</label>
                <input
                    className="contacts-input"
                    type="email"
                    id="email"
                    placeholder="email@example.ru"
                    required />
            </div>
            <div className="contacts-form-item">
                <label htmlFor="text">Введите ваш текст</label>
                <textarea
                    className="contacts-input"
                    type="text"
                    placeholder="Введите ваш текст. Форма отправки текста будет настроена при размещении на сервере"
                    required>
                </textarea>
            </div>
            <button type="submit" className="button-send">Отправить</button>
        </form>
    )
}
