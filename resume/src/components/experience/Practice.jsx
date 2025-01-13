import React from 'react'

export const Practice = ({ practice }) => {
    return (
        <>
            <p className="practice-about">В процессе обучения изучала теорию и применяла знания на практике:</p>
            <ul>
                {practice.map((item, index) => (
                    <li key={index} className="practice-item"><b>{item.title}: </b>{item.description}.
                        <p className="practice-link"><a href={item.link}>{item.link}</a></p>
                    </li>
                ))}
            </ul>
        </>
    )
}
