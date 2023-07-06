import React from 'react'
import style from './Contacts.module.css'


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <div className={style.title}>
                    <h2>Contacts</h2>
                </div>
                <form className={style.form}>
                    <input placeholder="Name"/>
                    <input placeholder="E-mail"/>
                    <textarea placeholder="Your message"></textarea>
                    <button className={style.button}>Send a message</button>
                </form>
            </div>
        </div>
    )
}

