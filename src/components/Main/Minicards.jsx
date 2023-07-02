import React from 'react';
import first from "../../assets/img/med.png";
import second from "../../assets/img/epil.png";
import third from "../../assets/img/pain.png";

import styles from "./main.module.scss";

export default function Minicards() {

    return (
        <div className={styles.minicards}>
            <div className={styles.minicard}>
                <img src={first} alt=""/>
                <p className={styles.minicard_txt}>У сотрудников <br/> мед.образование</p>
            </div>
            <div className={styles.minicard}>
                <img src={second} alt=""/>
                <p className={styles.minicard_txt}>Выпадение до <br/> 100% волос</p>
            </div>
            <div className={styles.minicard}>
                <img src={third} alt=""/>
                <p className={styles.minicard_txt}>Без боли</p>
            </div>
        </div>
        )}