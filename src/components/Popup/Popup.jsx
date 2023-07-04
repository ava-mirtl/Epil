import React, {useRef} from 'react';
import Forma from '../Form/Forma';
import styles from "./popup.module.scss";

export default function Popup({lazer, txt, setState}) {
  const popupRef = useRef(null);
      
      const handleClick=(e)=>{
       if (!popupRef.current.contains(e.target)){        
        setState(false)        }
      }
    return(
        <div className={styles.container} 
        onClick={(e)=>{handleClick(e)}}
        >     
            <div className={!lazer?styles.popup_container:styles.lazer_container}
            ref={popupRef}>
              <div className={styles.title_container}>
                <div className={styles.title}>{txt}</div> 
                <div className={styles.x} onClick={()=>{setState(false)}}>X</div> </div>
              <div className={styles.content_container}> 
                    <Forma/>
              </div> 
            </div>
        </div>
    )
}