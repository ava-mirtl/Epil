import React, { useContext } from 'react';
import { DataContext } from '../../data/data';
import Sticker from "../Sticker";
import Cards from "../Minicards";
import Button from '../../Button/Button';
import Youtube from '../../Youtube/Youtube';
import Quiz from "../../Quiz/Quiz";
import { useMatch } from 'react-router-dom';
import {
    Title1, 
    Title2, 
    Title3, 
    Title4, 
    Title5, 
    Subsubtitle, 
    Subtitle1, 
    Subtitle2,
    Subtitle3,
    Subtitle4,
    Subtitle5} from "./Title"
import styles from "../main.module.scss";

export default function Woman() {
const {quiz, setQuiz, } = useContext(DataContext);
const match1 = useMatch('/woman1');
const match2 = useMatch('/woman2');
const match3 = useMatch('/woman3');
const match4 = useMatch('/woman4');
const match5 = useMatch('/woman5');

const handleState = () =>{
    setQuiz(true)
}

    return (<>
        <div className={styles.container}>
            <div className={styles.fon}>
                <div className={styles.fon_w}></div>
                <div className={styles.main}>
                    <div className={styles.leftW}>
                        {match1&&<Title1/>}
                        {match2&&<Title2/>}                    
                        {match3&&<Title3/>}                    
                        {match4&&<Title4/>}                    
                        {match5&&<Title5/>}                    
                        <div className={styles.promo_block}>
                            {match4? <></>:<div className={styles.promo_label}>Акция</div>}
                        {match1&&<Subtitle1/>}
                        {match2&&<Subtitle2/>}                    
                        {match3&&<Subtitle3/>}                    
                        {match4&&<Subtitle4/>}                    
                        {match5&&<Subtitle5/>}                 
                        </div>
                    
                        {match4&&<Subsubtitle/>}                    
                        {match5&&<Subsubtitle/>} 
                        <div className={styles.bksp}></div>
                        <Cards/>
                        <div className={styles.btns_container}>
                            <Button txt="ЗАПИСАТЬСЯ ОНЛАЙН" func={handleState}/>
                            <Youtube/>
                        </div>
                        <div className={styles.license}>Номер мед. лицензии: Л041-01137-77/00377330</div>
                        <div className={styles.btns_container_mi}>
                            <Button txt="ЗАПИСАТЬСЯ ОНЛАЙН" func={handleState}/>
                            <div className={styles.license_mi}>Номер мед. лицензии: Л041-01137-77/00377330</div>
                            <Youtube/>
                        </div>
                    </div> 
                    <div className={styles.woman_right}>
                        <Sticker/>
                    </div>
                </div>
            </div>
        </div>
        {quiz&&<Quiz setState={setQuiz}/>}
        </>
        )}