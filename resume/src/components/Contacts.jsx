export const Contacts = () => {
    return (
    <div className="contacts">
        <div>
        e-mail: em.lebedeva@mail.ru
        </div>
        <form className="contacts-form">
            <div>
                <label htmlFor="name">Ваше имя
                    <input className="contacts-inputName" type="text" id="name" placeholder="your name" required />
                </label>
            </div>
            <div>
                <label htmlFor="e-mail">Ваш email
                    <input className="contacts-inputEmail" type="email" id="email" placeholder="email@example.ru" required />
                </label>
            </div>
            <div>
                <label htmlFor="text">
                    <textarea className="contacts-inputText" type='text' placeholder="Введите ваш текст" required></textarea>
                </label>
            </div>
        </form>
    </div>
        
    )
}
