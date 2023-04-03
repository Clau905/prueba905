import './App.modules.css';
import Banermarmol from './componentes/Banermarmol/Banermarmol.js';
import Cards from './componentes/Cards/Cards.js';
import  { useState } from 'react';
import * as React from 'react';
import ListCard from './componentes/ListCard/ListCard.js';
import { data } from './data';

function App(){
/* defino el estado */
let [estado,setAgregarAlCarro]=useState( {productos: data,   enCarrito :[],  esCarroVisible: false})
    
/* defino la fcion que modifica el estado  */
  setAgregarAlCarro = (producto) => {
    const Carrito = estado.enCarrito;
    Carrito=[...producto];
        
      
    return  {   /*devuelve un objeto*/
      productos: data,
      enCarrito :Carrito,
      esCarroVisible: false
    };
    
  } 
  return (
    <div className="App">      
      <Banermarmol titu='MI E-COMMERCE'   >   </Banermarmol>     
      
      <div className='contenido'>

        <div className='contenidoIzquierdo'>
          <ListCard> MENU MENU MENU </ListCard>
        </div>
        
        <div  className='contenedorCentro'>
          
          <h2>Novedades</h2>
     
          <div className='contenedorCuerpoCards'>
              <Cards
                estado={estado}
                setAgregarAlCarro={setAgregarAlCarro}
             
              />
          </div>
        </div>
        
        
        
        <div className='footer'></div>
      </div>  
  </div>
  );
}

export default App;
