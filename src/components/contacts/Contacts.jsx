import { useNavigate } from "react-router-dom"
import { ContactsForm } from "./ContactsForm";
import { ContactsInfo } from "./ContactsInfo";


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
                <ContactsInfo />
                <ContactsForm />
            </div>
        </div>
    )
}
