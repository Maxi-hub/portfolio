import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


export const ContactsForm = () => {
    const [state, handleSubmit] = useForm("xeoonzwz");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="contacts-form">
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
                    name="email"
                    id="email"
                    placeholder="email@example.ru"
                    required />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className="contacts-form-item">
                <label htmlFor="text">Введите ваш текст</label>
                <textarea
                    className="contacts-input"
                    id="message"
                    name="message"
                    type="text"
                    placeholder="Не стесняйтесь! Напишите мне, если у вас есть пожелания или предложения."
                    required>
                </textarea>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>
            <button type="submit" className="button-send" disabled={state.submitting}>Отправить</button>
        </form>
    )
}
