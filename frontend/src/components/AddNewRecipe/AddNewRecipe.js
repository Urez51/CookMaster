import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {TextField, Button} from '@mui/material';
import {addRecipe,
  deleteErrorMassage,
  clearMessageAfterAddedRecipe } from './../../store/recipe/actionsCreators'
import './AddNewRecipe.css'

function AddNewRecipe(){
  const {errorMassage,newRecipeMessage } = useSelector((state)=>state.recipes)
  const clearForm= useRef()
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const sendRecipe = React.useCallback((event) => {
    event.preventDefault()
    const {title:{value:title}, body:{value:body},img:{value:img} } = event.target;
    const recipe = {title,body,img};
    dispatch(addRecipe(recipe))
    // console.log(newRecipeMessage);
    //   console.log(errorMassage);
    // console.log(newRecipeMessage !== undefined);
  },[dispatch]);

  const handlerDeleteMassage = React.useCallback(()=>{
  if( errorMassage !== undefined )
    dispatch(deleteErrorMassage());
  },[errorMassage, dispatch]);

  const handlerdeleteComplite = React.useCallback(()=>{
    dispatch(clearMessageAfterAddedRecipe())
  },[dispatch])

  useEffect(()=>{
    if(newRecipeMessage !== undefined && errorMassage === undefined ) {
      console.log(newRecipeMessage);
      console.log(errorMassage);
      clearForm.current.reset()
    }
  },[newRecipeMessage, errorMassage])

  return(
   <section className='New-Recipe-section'>
    <div className='container'>
      <div className='New-Recipe'>
        <h2 className='New-Recipe-title'>Новый рецепт</h2>
        {errorMassage && errorMassage ? <p className='New-Recipe-error'>*{errorMassage}</p>: <></>}
        <p className='New-Recipe-complite'>{newRecipeMessage}</p>
        <form ref={clearForm} className='New-Recipe-form' onSubmit={sendRecipe} >
          <TextField
            type="text"
            label="Новый рецепт"
            name="title"
            variant="outlined"
            className='New-Recipe-form__input'
            onChange={handlerDeleteMassage}
            onFocus={handlerdeleteComplite}
          />
          <TextField
            type="text"
            label="Описание рецепта"
            name="body"
            variant="outlined"
            multiline
            maxRows={20}
            className='New-Recipe-form__input'
            onChange={handlerDeleteMassage}
            onFocus={handlerdeleteComplite}
          />
          <TextField
            type="text"
            label="Url картинки"
            name="img"
            variant="outlined"
            className='New-Recipe-form__input'
            onChange={handlerDeleteMassage}
            onFocus={handlerdeleteComplite}
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
