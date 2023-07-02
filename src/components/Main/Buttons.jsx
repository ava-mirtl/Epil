import React from 'react';
import Button from '../Button/Button';
import Youtube from '../Youtube/Youtube';
import styles from "./main.module.scss";

export default function Buttons() {
    return (
        <div className={styles.btns_container}>
            <Button txt="ЗАПИСАТЬСЯ ОНЛАЙН" />
            <Youtube/>
        </div>

    )

}
