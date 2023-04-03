
import '../Banermarmol/Banermarmol.modules.css';
import Minav from '../Nav/Minav.js';
import Carrito  from '../Carrito/Carrito.js';

     
function Banermarmol(props){
const misOp=['Home','Quienes Somos','Contacto', 'Productos'];

return(
        <div className='contenedorMarmol'>
           <h2> {props.titu}</h2>
           <div className='miNav'> <Minav op={misOp} /> </div> 
           <div>   <Carrito></Carrito>   </div>
            <br/>
            <button className='contboton'> Ver Pedido</button>
        </div>
    );

}
export default Banermarmol;