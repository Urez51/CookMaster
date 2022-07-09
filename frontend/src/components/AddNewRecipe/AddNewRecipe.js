import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {TextField, Button} from '@mui/material';
import { useParams } from 'react-router-dom';

function AddNewRecipe(){
  const {id} = useParams;
  const dispatch = useDispatch();
  const sendRecipe = useCallback((event) => {
    event.preventDefault();
    const {title:{value:title}, body:{value:body},img:{value:img} } = event.target;
    console.log(title,body,img)
  })

  return(
   <section className='Login-section'>
    <div className='container'>
      <div className='Login'>
        <h2 className='Login-title'>Новый рецепт</h2>
        <form className='Login-form' onSubmit={sendRecipe} >
          <TextField
            type="text"
            label="Новый рецепт"
            name="title"
            variant="outlined"
            className='Login-form__input'
          />
          <TextField
            type="text"
            label="Описание рецепта"
            name="body"
            variant="outlined"
            className='Login-form__input'
          />
          <TextField
            type="text"
            label="Url картинки"
            name="img"
            variant="outlined"
            className='Login-form__input'
          />
          
          <Button variant="contained" color="primary" type="submit" className='Login-form__btn'>
            Создать
          </Button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default AddNewRecipe;
