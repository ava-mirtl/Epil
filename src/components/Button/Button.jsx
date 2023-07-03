import React from 'react';
import styles from "./button.module.scss"

export default function Button({txt, type, disabled, setState}) {
    return (
        setState
        ?
        <button className={styles.btn} type={type} disabled={disabled} onClick={()=>setState(true)}>{txt} </button>
        : 
        <button className={styles.btn} type={type} disabled={disabled}>{txt} </button>

    )

}
