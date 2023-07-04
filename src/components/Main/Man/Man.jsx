import React, { useContext } from 'react';
import { DataContext } from '../../data/data';
import Sticker from "../Sticker";
import Cards from "../Minicards";
import Popup from '../../Popup/Popup';
import Button from '../../Button/Button';
import Youtube from '../../Youtube/Youtube';
import styles from "../main.module.scss";

export default function Man() {
    const {active, setActive} = useContext(DataContext);

    return (<>
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.left}>
                    <h1 className={styles.title}>Студия лазерной эпиляции для мужчин в Москве</h1>
                    <div className={styles.promo_block}>
                        <div className={styles.promo_label}>Акция</div>
                        <div className={styles.promo_txt}>на окантовку бороды/зона щёк <span className={styles.price}>1500 </span> 900</div>
                    </div>
                    <div className={styles.list_block}>
                        <p className={styles.list_title}>Мы знаем, как минимум <span className={styles.bold}>4 причины </span>сделать эпиляцию: </p>
                        <ul>
                            <li>Ежедневное бритье сильно раздражает кожу.</li>
                            <li>После удаления волос бритвой появляются вросшие волосы.</li>
                            <li>Ухоженная борода, не нужно каждый день ровнять, длительный эффект.</li>
                            <li>В небритых зонах подмышек появляется запах пота.</li>
                        </ul>
                    </div>
                    <div className={styles.txt_vizit}>
                    Результат после 1 посещения!
                    </div>
                    <Cards/>
                    <div className={styles.btns_container}>
                        <Button txt="ЗАПИСАТЬСЯ ОНЛАЙН" setState={setActive}/>
                        <Youtube/>
                    </div>
                </div> 
                <div className={styles.right}>
                    <Sticker/>
                </div>
            </div>
        </div>
        {active&&<Popup lazer={false} txt="Оставьте Ваш номер телефона и мы с вами свяжемся!" setState={setActive}/>}
        </>
        )}