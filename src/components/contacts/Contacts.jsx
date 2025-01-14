import { useNavigate } from "react-router-dom"
import { ContactsItem } from "./ContactsItem";
import { ContactsForm } from "./ContactsForm";


export const Contacts = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className="contacts center">
            <button className="button-back" onClick={handleBack}>&lt; Вернуться</button>
            <h1 className="contacts-title">Мои контакты</h1>
            <div className="contacts-box">
                <div className="contacts-info">
                    <ContactsItem
                        iconSrc="../../img/mail.png"
                        altText="Иконка электронной почты"
                        content="em.lebedeva@mail.ru"
                    />
                    <ContactsItem
                        iconSrc="../img/telegram.png"
                        altText="Иконка телеграм"
                        link="https://t.me/+79851539474"
                        content="https://t.me/+79851539474"
                    />
                    <ContactsItem
                        iconSrc="../img/phone.png"
                        altText="Иконка телефонной трубки"
                        content="+7985-153-9474"
                    />
                    <ContactsItem
                        iconSrc="../img/github.png"
                        altText="Иконка github"
                        link="https://github.com/Maxi-hub"
                        content="https://github.com/Maxi-hub"
                    />
                </div>
                <ContactsForm />
            </div>
        </div>
    )
}
