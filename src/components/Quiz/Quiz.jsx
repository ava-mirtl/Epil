import React, {useRef, useState, useContext }  from 'react';
import { DataContext } from '../data/data';
import Popup from "../Popup/Popup";
import Button from '../Button/Button';
import { Formik, Field, Form } from 'formik';
import styles from "./quiz.module.scss";

export default function Quiz() {
    const {modal, setModalActive, setEpilForm, setQuiz, quiz} = useContext(DataContext);
    const [counter, setCounter]= useState(1);

    const popupRef = useRef(null);

    const handleClick=(e)=>{
        if (!popupRef.current.contains(e.target)){        
        setQuiz(false)}
    }


    const handleForward=()=>{
        if(counter===1){
            setCounter(2)
        }
        else  if(counter===2){
            setCounter(3)
        }
        else  if(counter===3){
            setCounter(4)
            setModalActive(true);
        }
    }
    const handleBackward=()=>{
        if(counter===1){
            setQuiz(false)
        }
        else  if(counter===2){
            setCounter(1)
        }
        else  if(counter===3){
            setCounter(2)
        }
    }
    
    
    return(
        <><div className={!modal&quiz?styles.container:styles.none} 
            onClick={(e)=>{handleClick(e)}}>
                <div className={styles.popup}
                    ref={popupRef}>
                    <div className={styles.header}>
                        <div className={styles.header_title}>
                        Ответьте на 3 вопроса, чтобы мы могли сделать индивидуальное предложение
                        </div> 
                        <div className={styles.counter}>
                        {counter}/3
                        </div>
                    </div>
                    <div className={styles.up}>
                        <Formik initialValues={{ epil: '', zone: '', contraindications: ''}}
                                onSubmit={(values, {resetForm})   => {
                                    setEpilForm(values);
                                }}>
                            {({ values }) => (
                                <Form>                    
                                    {counter===1&&<div  className={styles.form_cont}><div className={styles.up_title} id="epil"> Пробовали ли Вы до этого лазерную эпиляцию?</div>
                                        <div  className={styles.label_c} role="group" aria-labelledby="epil">
                                            <label>
                                                <Field type="radio" name="epil" value="Да" />
                                                    Да
                                            </label>
                                            <label>
                                                <Field type="radio" name="epil" value="Нет" />
                                                    Нет
                                            </label>
                                            <label>
                                                <Field type="radio" name="epil" value="Затрудняюсь ответить" />
                                                    Затрудняюсь ответить
                                            </label>
                                    </div></div>}
                                    {counter===2&&<div  className={styles.form_cont}><div id="zone-radio" className={styles.up_title}>Какую зону хотите сделать?</div>
                                    <div className={styles.label_c} role="group" aria-labelledby="zone-radio">
                                        <label>
                                            <Field type="radio" name="zone" value="Комлекс трёх зон" />
                                            Комлекс трёх зон
                                        </label>
                                        <label>
                                            <Field type="radio" name="zone" value="Бикини" />
                                            Бикини
                                        </label>
                                        <label>
                                            <Field type="radio" name="zone" value="Подмышки" />
                                            Подмышки
                                        </label>
                                        <label>
                                            <Field type="radio" name="zone" value="Всё тело" />
                                            Всё тело
                                        </label>
                                        <label>
                                            <Field type="radio" name="zone" value="Бёдра" />
                                            Бёдра
                                        </label>
                                        <label>
                                            <Field type="radio" name="zone" value="Голень" />
                                            Голень
                                        </label>
                                        <label>
                                            <Field type="radio" name="zone" value="Затрудняюсь ответить" />
                                            Затрудняюсь ответить
                                        </label>
                                    </div></div>}
                                    {counter===3&&<div  className={styles.form_cont}><div className={styles.up_title} id="contra">
                                        Есть ли у Вас хоть одно из противопоказаний?
                                    </div>
                                    <div className={styles.label_c} role="group" aria-labelledby="contra">
                                        <label>
                                            <Field type="radio" name="contraindications" value="Сахарный диабет" />
                                                Сахарный диабет
                                        </label>
                                        <label>
                                            <Field type="radio" name="contraindications" value="Псориаз" />
                                                Псориаз
                                        </label>
                                        <label>
                                            <Field type="radio" name="contraindications" value="Беременность" />
                                                Беременность
                                        </label>
                                        <label>
                                            <Field type="radio" name="contraindications" value="Онкологический диагноз" />
                                                Онкологический диагноз
                                        </label>
                                        <label>
                                            <Field type="radio" name="contraindications" value="Нет" />
                                                Нет
                                        </label>
                                    </div></div>}
                                    <div className={styles.btns}>
                                        <button  className={styles.gray_btn} onClick={handleBackward}>НАЗАД</button>        
                                        <Button type='submit' txt="ВПЕРЕД" func={handleForward}/>        
                                    </div>
                                </Form>
                            )}
                        </Formik>
                </div>
            </div>
        </div>
        {(counter===4&modal)
?
<Popup lazer={true} txt="Оставьте Ваш номер телефона и получите: Бесплатную консультацию косметолога!" setState={setModalActive}/>
:<div/>}
        </>
    )}
