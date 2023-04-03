import './Carrito.modules.css';
import { useState } from 'react';
import { useContext } from 'react';
import { FaCartPlus } from "react-icons/fa";
//import { Context } from '../Contexto/Context.js';



function Carrito(props){


return(
           
        <div className='carritoTotal'>

        {< FaCartPlus  className="App-logo"   />}  
           <p>$0  </p>
        </div>

    );

}
export default  Carrito;