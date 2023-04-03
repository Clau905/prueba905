import '../css/Menu.css';
import Item from '../componentes/menuvertical/Item.js';
import {useState} from 'react';


function Menu(opciones){
const [opc,setOpciones]=useState(opciones);

return(
        <>
            <h2> Menu</h2>
            {
            opc.map((a) =>  
             
            <Item  opcion = {a.nombre}    />    
            )
            }
        </>
    );

}
export default Menu;  