import React from 'react';
import styles from "./button.module.scss"

export default function Button({txt, type, func}) {
    return (
        func
        ?
        <button className={styles.btn} type={type}  onClick={()=>func()}>{txt} </button>
        : 
        <button className={styles.btn} type={type} >{txt} </button>

    )

}
