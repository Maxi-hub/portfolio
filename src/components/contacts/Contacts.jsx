import { useNavigate } from "react-router-dom"
import { ContactsForm } from "./ContactsForm";
import { ContactsInfo } from "./ContactsInfo";
import s from './contacts.module.css'


export const Contacts = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className={`${s.contacts} ${s.center}`}>
            <button className={s.buttonBack} onClick={handleBack}>&lt; Вернуться</button>
            <h1 className={s.title}>Мои контакты</h1>
            <div className={s.box}>
                <ContactsInfo />
                <ContactsForm />
            </div>
        </div>
    )
}
