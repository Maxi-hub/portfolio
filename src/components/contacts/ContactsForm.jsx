import { useForm, ValidationError } from '@formspree/react';
import s from './contacts.module.css'

export const ContactsForm = () => {
    const [state, handleSubmit] = useForm("xeoonzwz");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.formItem}>
                <label htmlFor="name">Ваше имя</label>
                <input
                    className={s.input}
                    type="text"
                    id="name"
                    placeholder="Ваше имя"
                    required />
            </div>
            <div className={s.formItem}>
                <label htmlFor="e-mail">Ваш email</label>
                <input
                    className={s.input}
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
            <div className={s.formItem}>
                <label htmlFor="text">Введите ваш текст</label>
                <textarea
                    className={s.input}
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
            <button type="submit" className={s.buttonSend} disabled={state.submitting}>Отправить</button>
        </form>
    )
}
