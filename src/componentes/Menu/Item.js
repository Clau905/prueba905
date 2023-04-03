import '../../css/Item.css';
function Item(props){

return(
        <div className='item-vertical'>
         
           <a href='#' className='item-vertical'> {props.opcion} </a>
            

        </div>
    );

}
export default  Item;