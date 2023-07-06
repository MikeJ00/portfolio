import React from 'react'
import style from './Footer.module.css'


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <div className={style.author}>
                    <h2>Mike Berasneu</h2>
                </div>
            <div className={style.footerContacts}>
                <a className={style.footerItem} href = "">Future Icon
                <img src=""/>
                </a>
                <a className={style.footerItem} href = "">Future Icon
                <img src=""/>
                </a>
                <a className={style.footerItem} href = "">Future Icon
                <img src=""/>
                </a>
                <a className={style.footerItem} href = "">Future Icon
                <img src=""/>
                </a>
            </div>
                <div className={style.copyright}>
                    © 2023 All rights reserved
                </div>
            </div>
        </div>
    )
}

