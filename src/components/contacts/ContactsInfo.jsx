import React from 'react'
import { ContactsItem } from './ContactsItem'
import s from './contacts.module.css'

export const ContactsInfo = () => {
    const contactItems = [
        {
            iconSrc: "./img/mail.png",
            altText: "Иконка электронной почты",
            content: "em.lebedeva@mail.ru"
        },
        {
            iconSrc: "./img/telegram.png",
            altText: "Иконка телеграм",
            link: "https://t.me/em_leb",
            content: "https://t.me/em_leb",
        },
        {
            iconSrc: "./img/phone.png",
            altText: "Иконка телефонной трубки",
            content: "+7985-153-9474"
        },
        {
            iconSrc: "./img/github.png",
            altText: "Иконка github",
            link: "https://github.com/Maxi-hub",
            content: "https://github.com/Maxi-hub"
        }
    ]

    return (
        <div className={s.info}>
            {
                contactItems.map((item, index) => (
                    <ContactsItem
                        key={index}
                        iconSrc={item.iconSrc}
                        altText={item.altText}
                        link={item.link || undefined}
                        content={item.content}
                    />
                ))
            }
        </div>
    )
}
