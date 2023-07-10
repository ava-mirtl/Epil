import React, { useContext }from 'react';
import { DataContext } from '../data/data';
import emailjs from '@emailjs/browser';
import { Formik, Form, Field } from 'formik';
import Button from '../Button/Button';
import styles from "./form.module.scss";

export default function Forma() {
  const {epilForm, setActive, setModalActive, setEpilForm, setQuiz} = useContext(DataContext);

    function validateUsername(value) {

        let error;
        if (!value) {
            error = 'Введите имя';
          }
          else if (value === 'admin'){
            error = 'Отличная попытка!';
          }
          return error;
      }
      
      function validatePhone(value) {
        let error;
        if (!value){
            error = "Введите номер телефона";
          }
        else if (!/^((8|\+7)[-]?)?(\(?\d{3}\)?[- ]?)?[\d- ]{7,10}$/.test(value)) {
          error = "Допустимый формат: +7 (999) 999-99-99; 8 999-999-99-99; 8 999 999 99; 79999999999";
        }
        return error;
      }
      const handleSubmit = (values) => {
        console.log(epilForm);
        epilForm?
            handleBigForm(values.phone, values.username, epilForm.zone, epilForm.contraindications, epilForm.epil):
            handleForm(values.phone, values.username)
          }
          const handleForm = (phone, username) =>{
            
            emailjs.send("service_5c2ig1m", "template_yv7fr9s", {
                    phone: phone,
                    from_name:  username,
                   
                    }, "viy8Z8sPUzp2B0OpU") 
                    .then((result) => {
                      console.log(result);}, 
                    (error) => {
                      console.log(error);}
                    );
                    handleState(setActive, setModalActive, setEpilForm)
          }
          const handleBigForm = (phone, username, zone, contraindications, epil) =>{
            console.log(contraindications);
            emailjs.send("service_5c2ig1m", "template_43fzdzh", {
                    phone: phone,
                    from_name:  username,
                    zone: zone, 
                    contraindications: contraindications, 
                    epil: epil
                    }, "viy8Z8sPUzp2B0OpU") 
                    .then((result) => {
                      console.log(result);}, 
                    (error) => {
                      console.log(error);}
                    );
                    handleState( setModalActive, setEpilForm)
          }
          
          const handleState = ( setModalActive) =>{
            setModalActive(false);
            setEpilForm(false);
            setQuiz(false)
          }
    return(
                <div className={styles.form_container}>
                    <Formik
                        initialValues={{ username: '', phone: '' }}
                        onSubmit={(values, {resetForm})  => {
                            handleSubmit(values);
                            resetForm();
                        }}>
                        {({ errors, touched, isSubmitting }) => (
                            <Form>
                                <Field name="username" validate={validateUsername} placeholder="ИМЯ"/>
                                    {errors.username && touched.username && <div>{errors.username}</div>}
                                <Field name="phone" validate={validatePhone} placeholder="ТЕЛЕФОН"/>
                                    {errors.phone && touched.phone && <div>{errors.phone}</div>}
                                <Button txt='ОТПРАВИТЬ' type='submit' disabled={isSubmitting}/>
                            </Form>
                        )}
                    </Formik>
                </div>
    )
}