import React from 'react';
import utube from "../../assets/img/utube.png";
import ReactPlayer from 'react-player/lazy'
import styles from "./youtube.module.scss"

export default function Youtube() {
    return (
        <>
        <div className={styles.container}>
            <img src={utube} alt="youtube иконка" />
            <p className={styles.txt}>Познакомьтесь с нами</p>
        </div>
        <div className={styles.video}>
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
        controls={false}
        playing={true}
        /></div>
</>
    )

}
