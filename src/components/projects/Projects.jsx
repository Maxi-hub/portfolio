import { useSelector } from 'react-redux';
import s from './projects.module.css'
import { ProjectBlock } from './ProjectBlock';

export const Projects = () => {
    const theme = useSelector(state => state.theme);

    const projects = [
        {
            title: 'Сайт поиска рецептов и планирования меню на неделю',
            src: '/portfolio/img/rfamp.png',
            alt: 'Главная страница сайта recipe finder and meal planner',
            gitHubLink: 'https://github.com/Maxi-hub/recipe_finder_and_meal_planner',
            siteLink: 'https://maxi-hub.github.io/recipe_finder_and_meal_planner/',
            stack: 'React, React Router, Redux Toolkit, React Modal, Redux Persist',
        },
        {
            title: 'Сайт о какао и шоколаде',
            src: '/portfolio/img/cocoa.png',
            alt: 'Главная страница сайта о какао и шоколаде',
            gitHubLink: 'https://github.com/Maxi-hub/Cocoa',
            siteLink: 'https://cocoauniverse.info',
            stack: 'HTML, CSS, JavaScript, принципы UI/UX',
        },
        {
            title: 'Интернет-магазин одежды и аксессуаров',
            src: '/portfolio/img/brand.png',
            alt: 'Главная страница сайта о какао и шоколаде',
            gitHubLink: 'https://github.com/Maxi-hub/React/tree/main/brand',
            stack: 'Figma, HTML, CSS, JavaScript, React',
        },
    ]

    const handleClick = (event) => {
        event.preventDefault();
        const experienceBox = document.getElementById('projectsBox');
        experienceBox.scrollIntoView({ behavior: "smooth" });
    };


    return (
        <div className={s.projects}>
            <div id='projectsBox' className={`${s.box} ${theme === 'light' ? 'dark' : 'light'}`}>
                <a href='#' className={s.arrow} onClick={handleClick}>&#9660;</a>
                <h2 className={s.title}>Создаю не просто сайты — воплощаю идеи в реальность!</h2>
                <ProjectBlock projects={projects} />
            </div>
        </div>
    )
}
