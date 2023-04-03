
import  './Minav.css';

function Minav(props){
   //console.log(props.op);
   

    return (
        <div className='contenedor-nav'  >
            <div className='item-nav'   >
                {props.op.map((it) => <a>{it}</a>)}
            </div>
        </div>
    )
}    

export default Minav;
