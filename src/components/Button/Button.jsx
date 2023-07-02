import React from 'react';
import styles from "./button.module.scss"

export default function Button({txt}) {
    return (
            <div className={styles.btn}>{txt}</div>
    )

}
