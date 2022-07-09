import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {TextField, Button} from '@mui/material';

import './AddNewRecipe.css'

function AddNewRecipe(){

  const dispatch = useDispatch();
  const sendRecipe = React.useCallback((event) => {
    const {title:{value:title}, body:{value:body},img:{value:img} } = event.target;
    const recipe = {title,body,img};
    dispatch(addRecipe(recipe))
  },)

  return(
   <section className='New-Recipe-section'>
    <div className='container'>
      <div className='New-Recipe'>
        <h2 className='New-Recipe-title'>Новый рецепт</h2>
        <form className='New-Recipe-form' onSubmit={sendRecipe} >
          <TextField
            type="text"
            label="Новый рецепт"
            name="title"
            variant="outlined"
            className='New-Recipe-form__input'
          />
          <TextField
            type="text"
            label="Описание рецепта"
            name="body"
            variant="outlined"
            multiline
            maxRows={20}
            className='New-Recipe-form__input'
          />
          <TextField
            type="text"
            label="Url картинки"
            name="img"
            variant="outlined"
            className='New-Recipe-form__input'
          />
          
          <Button variant="contained" color="primary" type="submit" className='New-Recipe-form__btn'>
            Создать
          </Button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default AddNewRecipe;
