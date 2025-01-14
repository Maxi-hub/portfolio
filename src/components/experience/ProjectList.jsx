import React from 'react'
import { Practice } from './Practice'

export const ProjectList = ({ projects, practice }) => {
    return (
        <ol>
            {projects.map((project, index) => (
                <li key={index}>
                    <h3>{project.title}</h3>
                    <a href={project.link}>{project.link}</a>
                    <p>{project.description}</p>
                    <p>Основные задачи, которые я выполнила:</p>
                    <ul>
                        {project.tasks.map((task, i) =>
                            <li key={i}>{task}</li>
                        )}
                    </ul>
                    <p>Стек: {project.stack}</p>
                </li>
            ))}
            <Practice practice={practice} />
        </ol>
    )
}
