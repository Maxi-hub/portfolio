import { useSelector } from "react-redux";

export const Skills = () => {
    const theme = useSelector(state => state.theme);

    const skills = [
        {
            name: "Hard skills",
            list: ["HTML, CSS, SCSS", "Адаптивная верстка", "Java Script", "React", "Git/GitHub", "Node.js", "английский язык - базовый уровень"],
        },
        {
            name: "Soft skills",
            list: ["Внимание к деталям, аналитическое и критическое мышление", "Умею быстро находить информацию и использовать ее", "Системный подход, умею и люблю решать сложные задачи, аргументирую свои решения", "Умею общаться и договариваться как с командой, так и c клиентами", "Работаю ответственно и с энтузиазмом"],
        }
    ]

    return (
        <div className="skills">
            <div id='skillsBox' className={`skills-box ${theme === 'light' ? 'dark' : 'light'}`}>
                <h1 className="skills-title">навыки</h1>
                {skills.map((skill, index) => (
                    <details className="skills-details">
                        <summary className="skills-subtitle">{skill.name}</summary>
                        <ul className={`skills-list ${theme}`}>
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
