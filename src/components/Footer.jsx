import React from 'react'
import { ContactsItem } from './contacts/ContactsItem'

export const Footer = () => {
    return (
        <div className="footer">
            <div>
                <ContactsItem
                    iconSrc="/resume/img/mail.png"
                    altText="Иконка электронной почты"
                    content="em.lebedeva@mail.ru"
                />
                <ContactsItem
                    iconSrc="/resume/img/telegram.png"
                    altText="Иконка телеграм"
                    link="https://t.me/em_leb"
                    content="https://t.me/em_leb"
                />
            </div>
            <div>
                <ContactsItem
                    iconSrc="/resume/img/phone.png"
                    altText="Иконка телефонной трубки"
                    content="+7985-153-9474"
                />
                <ContactsItem
                    iconSrc="/resume/img/github.png"
                    altText="Иконка github"
                    link="https://github.com/Maxi-hub"
                    content="https://github.com/Maxi-hub"
                />
            </div>
        </div>
    )
}
