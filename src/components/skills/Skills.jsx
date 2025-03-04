import { useSelector } from "react-redux";
import s from './skills.module.css';

export const Skills = () => {
    const theme = useSelector(state => state.theme);

    const skills = [
        {
            name: "Стек технологий",
            list: ["HTML, CSS, SCSS", "Адаптивная верстка", "Java Script", "React", "Redux", "Material UI", "Git/GitHub", "Node.js", "Английский язык - Intermediadate"],
        },
    ]

    return (
        <div className={s.block}>
            <div id='skillsBox' className={`${s.box} ${theme === 'light' ? 'dark' : 'light'}`}>
                {skills.map((skill, index) => (
                    <details key={index} className={s.details} open>
                        <summary className={s.subtitle}>{skill.name}</summary>
                        <ul className={`${s.list} ${theme}`}>
                            {skill.list.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </details>
                ))}                
            </div>
        </div>
    )
}
