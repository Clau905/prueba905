//import '../../css/Item.css';

import styles from './Button.module.css';
const Button = ({label,color,fcion})=>{
return(
   
         
    <button onClick={fcion}    style={{backgroundColor:`${color}  `  }} className={styles.button} >
          {label}   
    </button>

     
      
    );

}
export default  Button;
   