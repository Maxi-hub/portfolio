import { useSelector } from "react-redux";

export const Skills = () => {
    const theme = useSelector(state => state.theme);

    return (
        <div className="skills">
            <div id='skillsBox' className={`skills-box ${theme === 'light' ? 'dark' : 'light'}`}>
                <h1 className="skills-title">навыки</h1>
                <details className="skills-details">
                    <summary className="skills-subtitle subtitle1">профессиональные навыки</summary>
                    <ul className={`skills-list ${theme}`}>
                        <li>HTML, CSS, SCSS</li>
                        <li>Адаптивная верстка</li>
                        <li>Java Script</li>
                        <li>React</li>
                        <li>Git/GitHub</li>
                        <li>Node.js</li>
                        <li>английский язык - базовый уровень</li>
                    </ul>
                </details>
                <details className="skills-details">
                    <summary className="skills-subtitle">личностные качества</summary>
                    <ul className={`skills-list ${theme}`}>
                        <li>нацеленность на результат</li>
                        <li>умение эффективно общаться с коллегами и клиентами</li>
                        <li>способность работать в команде</li>
                        <li>готовность к изменениям и умение быстро осваивать новые технологии</li>
                        <li>креативное мышление</li>
                    </ul>
                </details>
            </div>
        </div>
    )
}
