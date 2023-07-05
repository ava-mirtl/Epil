import React from 'react';
import styles from "./button.module.scss"

export default function Button({txt, type, disabled, func}) {
    return (
        func
        ?
        <button className={styles.btn} type={type} disabled={disabled} onClick={()=>func()}>{txt} </button>
        : 
        <button className={styles.btn} type={type} disabled={disabled}>{txt} </button>

    )

}
