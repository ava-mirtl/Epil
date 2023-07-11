import React, { useState, useRef }from 'react';
import utube from "../../assets/img/utube.png";
import styles from "./youtube.module.scss";
import video from "../../assets/video/video.mp4";
import video2 from "../../assets/video/video_webm.webm"

export default function Youtube() {
    const [active, setActive] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const videoRef = useRef(null);
    const toggleStop = () => {
    videoRef.current.pause();
    setActive(false)
   };

   const togglePlay = (e) => {
    e.stopPropagation();
    setActive(true)
       if (isPlaying) {
           videoRef.current.pause();
       } else {
           videoRef.current.play();
       }
       setIsPlaying(!isPlaying);
   };
    
    return (
        <>
        <div className={styles.container}>
            <img src={utube} alt="youtube иконка" onClick={()=>setActive(true)}/>
            <p className={styles.txt} onClick={()=>setActive(true)}>Познакомьтесь с нами</p>
        </div>
        <div className={active?styles.popup:styles.video}  onClick={()=>toggleStop()}>
            <video 
                onClick={(e)=>togglePlay(e)}
                ref={videoRef}
                width="80%"
                height="60%"
                controls>
                    <source src={video} type='video/mp4'/>
                    <source src={video2} type='video/webm'/>
                    Ваш браузер не поддерживает тег video.
            </video>
            <div>
            </div>
    </div>
</>
    )
}
