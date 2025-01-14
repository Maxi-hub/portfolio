import React from 'react'

export const ContactsItem = ({ iconSrc, altText, link, content }) => {
    return (
            <div className="contacts-item">
                <img
                    className="contacts-icon"
                    src={iconSrc} alt={altText} />
                {link ? <a href={link} target="_blank" rel="noreferrer">{content}</a> : <p>{content}</p>}
            </div>
    )
}
