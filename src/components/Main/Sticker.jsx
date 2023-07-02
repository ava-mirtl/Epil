import React from 'react';
import lazer from '../../assets/img/main-lazer.png'
import styles from "./main.module.scss"

export default function Sticker() {

    return (
        <div className={styles.sticker}>
            <div><div className={styles.header}>RUIKD - ЛАЗЕР №1 в России</div>
            <div className={styles.text}>
                <div className={styles.txt1}>Любой тип кожи</div>
                <div className={styles.txt1}>Любой цвет волос</div>
                <div className={styles.txt}>Без ожогов</div>
            </div>
            <div className={styles.point}>— Эффект уже после 1-й процедуры</div>
            <div className={styles.point}>— Сокращает с 10 до 6 процедур</div>
            </div>
            <img src={lazer} alt="аппарат для лазерной эпиляции"  />
        </div>
        )}