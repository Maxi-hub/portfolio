import React from 'react'

export const ExperienceItem = ({company, date, position, children}) => {
    return (
        <div className='experience-item'>
            <h2 className='company'>{company}</h2>
            <p className='date'>{date}</p>
            <p className='position'>{position}</p>
            {children}
        </div>
    )
}
