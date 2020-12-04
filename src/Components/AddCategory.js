import React, { useState } from 'react'
import Proptypes from 'prop-types';

export const AddCategory = ({setCategory}) => {
    const [imputValiu, setimputValiu] = useState('');
    const handleInputChange= (e) =>{
     setimputValiu(e.target.value);
    }
    const handleSumbit = (e) =>{
      e.preventDefault();
      if (imputValiu.trimEnd().length>2) {
        setCategory( cats => [imputValiu,...cats]);
        setimputValiu('');
      }
      
    }
    return (
        <form onSubmit={handleSumbit}>
            
            <h2> Añadir componete</h2>
            <input type='text' value={imputValiu} onChange={handleInputChange}></input>
            </form>
    )
}

AddCategory.propTypes ={
  setCategory:Proptypes.func.isRequired
}
