import React from 'react';
import logo from '../../assets/img/logo.png';
import geo from '../../assets/img/geo.png';
import phone from '../../assets/img/phone.png';
import telegram from '../../assets/img/telegram.png';
import wasap from '../../assets/img/wapp.png';

import styles from "./header.module.scss";

export default function Header() {

    return (
        <div className={styles.header__container}>
          <div className={styles.header}>
            <div className={styles.logo_block}>
            <img className={styles.logo} src={logo} alt="logo"/>
            <div className={styles.geo_block}>
              <img src={geo} alt="геопозиция"/>
              <p>Москва</p>
            </div>
            </div>
            <div className={styles.right_block}>

            <div className={styles.icons_block}>
              <a href="https:/t.me/golayapravdaaaa">
                <img src={telegram} alt="телеграм"/>
              </a>
              <a href="https://wa.me/79265300603">
                <img src={wasap} alt="ватсап"/>
              </a>
            </div>

            <div className={styles.phone_block}>
            <a className={styles.phone} href='tel:+79265300603'><img src={phone} alt="телефон"/><p>+7(926) 530-06-03</p></a>
            <div className={styles.btn}>Заказать обратный звонок</div>
            </div>
            </div>

                
          </div>
        </div>
        )}
