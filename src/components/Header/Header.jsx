import React, { useContext }  from 'react';
import logo from '../../assets/img/logo.png';
import geo from '../../assets/img/geo.png';
import phone from '../../assets/img/phone.png';
import telegram from '../../assets/img/telegram.png';
import wasap from '../../assets/img/wapp.png';
import { DataContext } from '../data/data';
import styles from "./header.module.scss";
import Popup from "../Popup/Popup";


export default function Header() {
  const {modal, setModalActive} = useContext(DataContext);


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
            <div className={styles.btn} onClick={()=>setModalActive(true)}>Заказать обратный звонок</div>
            <div className={styles.btn_mini} onClick={()=>setModalActive(true)}><img src={phone} alt="телефон"/><p>связаться</p></div>

            </div>
            </div>

                
          </div>
          {modal&&<Popup lazer={true} txt="Оставьте Ваш номер телефона и получите: Бесплатную консультацию косметолога!" setState={setModalActive}/>}
        </div>
        )}
