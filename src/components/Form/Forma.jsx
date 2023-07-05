import React, { useContext }from 'react';
import { DataContext } from '../data/data';
import { Formik, Form, Field } from 'formik';
import Button from '../Button/Button';
import styles from "./form.module.scss";

export default function Forma() {
  const {epilForm} = useContext(DataContext);

    function validateUsername(value) {
        let error;
        if (!value) {
            error = 'Введите имя';
          } else if (
            !/^[a-zA-Zа-яёА-ЯЁ]+$/u.test(value)
          ) {
            error = 'Недопустимые символы в поле "Имя"';
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
        epilForm?
            console.log("да", epilForm, values.username, values.phone)
            :
            console.log("net", values.username, values.phone)


        //   emailjs.send("service_onlg9xh","template_32oil1t", {
        //       phone: phone,
        //       name:  username,
        //       }, 'ZjXCD_toGWo9fEoVg') 
        //       .then((result) => {
        //         console.log(result);}, 
        //       (error) => {
        //         console.log(error);}
        //       );
                // setActive(true)
          }

    return(
                <div className={styles.form_container}>
                    <Formik
                        initialValues={{ username: '', phone: '' }}
                        onSubmit={values => {
                            handleSubmit(values);
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