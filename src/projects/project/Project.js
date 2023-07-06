import React from 'react'
import style from './StyleForProject.module.css'


export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <a href={""}>Watch</a>
            </div>
            <div className={style.description}>
            <h3>{props.title}</h3>
            <span >
                {props.description}
            </span>
        </div>
        </div>
    )
}

