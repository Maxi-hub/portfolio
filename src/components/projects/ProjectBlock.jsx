import { Link } from 'react-router-dom';
import s from './projects.module.css';
import { useSelector } from 'react-redux';

export const ProjectBlock = ({ projects }) => {
    const theme = useSelector(state => state.theme);

    return (
        <>
            {
                projects.map((project, index) => (
                    <div key={index} className={`${theme} ${s.block}`}>
                        <h3 className={s.blockTitle}>{project.title}</h3>
                        <img className={s.image} src={project.src} alt={project.alt} />
                        <div className={s.links}>
                            <Link to={project.gitHubLink} target='_blank' className={s.gitHubBlock}>
                                <div className={s.linkBox}>
                                    <img className={s.linkImg} src="/portfolio/img/github.png" alt="Иконка github" />
                                    GitHub
                                </div>
                            </Link>
                            <Link to={project.siteLink} target='_blank' className={project.siteLink ? s.internetBlock : s.internetBlockHide}>
                                <div className={`${s.linkBox} ${s.box2}`}>
                                    <img className={s.linkImg} src="/portfolio/img/internet.png" alt="Иконка всемирной паутины" />
                                    Сайт
                                </div>
                            </Link>
                        </div>
                        <div className={s.description}>
                            <p><b>Стек:</b> {project.stack}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
