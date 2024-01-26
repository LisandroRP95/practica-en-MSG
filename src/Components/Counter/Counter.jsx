import {React, useState} from 'react';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Counter = () => {
    

    const [contador, setContador] = useState(1);
  
    const incrementar = () => {
        if(contador < 10)[
        setContador( contador + 1)]
     
    }
    
    const decrementar = () => {
        if(contador > 1)[
        setContador(contador - 1)]
    }
    
    const resetear = () => {
        toast("Se ha reseteado el contador");
        setContador(1)
      }
  
    return (
    <>
      <h3>{contador}</h3>
      <Button onClick={incrementar} variant="outline-success">+ Agregar</Button>{' '}
      <Button onClick={decrementar} variant="outline-danger">- Eliminar</Button>{' '}
      <Button onClick={resetear} as="input" type="reset" value="Resetear contador" />
      <ToastContainer/>
    </>
    )
}

export default Counter