import React from 'react'
import style from './Remote.module.css'


export const Remote = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={style.remoteContainer}>
                <div className={style.title}>
                    <h2>Remote work and relocation are considered by me</h2>
                </div>
            <div className={style.indent}>
                <a className={style.button} href = "">Contact me</a>
            </div>
            </div>
        </div>
    )
}

