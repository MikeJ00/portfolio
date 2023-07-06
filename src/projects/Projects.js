import React from 'react'
import style from './StyleForProjects.module.css'
import styleContainer from "../common/styles/Container.module.css"
import { Project } from './project/Project'


export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer} `} >
                <h2 className={style.title}>Projects</h2>
                <div className = {style.projects}>
                    <Project title={"Social Network"} description={"SPA created with React JS library, Redux for state management, TypeScript for scalability, Material UI for beauty."}/>
                    <Project title={"TODO List"} description={"Application build with ReactJS/Redux/TypeScript and styled components library."}/>
                    <Project title={"Vacation"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit..."}/>
                </div>
            </div>
        </div>
    )
}

