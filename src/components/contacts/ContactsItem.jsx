import s from './contacts.module.css'

export const ContactsItem = ({ iconSrc, altText, link, content }) => {
    return (
        <div className={s.item}>
            <img
                className={s.icon}
                src={iconSrc} alt={altText} />
            {link
                ? <a href={link} target="_blank" rel="noreferrer">
                    {content}
                </a>
                : <p className={s.text}>{content}</p>}
        </div>
    )
}
