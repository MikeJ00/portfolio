import React from 'react'
import style from "./Main.module.css"
import styleContainer from "../../src/common/styles/Container.module.css"


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
            <div className={style.text}>
                <h1>Frontend developer</h1>
                <p>Hello! I'm Mike. Frontend developer from Minsk, Belarus. I'm experienced in UI development using React / Redux /TypeScript.</p>
            </div>
            <div className={style.photo}></div>
            </div>
        </div>
    )
}

