  import React, {useRef} from 'react';
import { Formik, Form, Field } from 'formik';
import Button from '../Button/Button';
import styles from "./popup.module.scss";

export default function Popup({img, txt, setState}) {
  const popupRef = useRef(null);

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
      
      const handleClick=(e)=>{
       if (!popupRef.current.contains(e.target)){        
        setState(false)        }
      }

      const handleSubmit = (values) => {
            console.log(values.username, values.phone);

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
        <div className={styles.container} 
        onClick={(e)=>{handleClick(e)}}
        >     
            <div className={styles.popup_container}
            ref={popupRef}>
              <div className={styles.content_container}>
                <div className={styles.left}> <div className={styles.title}>{txt}</div>  
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
                </div></div>
               
                <div className={styles.lady}>
                  <div className={styles.x} onClick={()=>{setState(false)}}>X</div>
                  <img src={img} alt="lady"/>
                </div>  
              </div> 
            </div>
        </div>
    )
}