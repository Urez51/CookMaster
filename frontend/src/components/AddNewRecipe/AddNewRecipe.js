import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {TextField, Button} from '@mui/material';
import {addRecipe,deleteErrorMassage } from './../../store/recipe/actionsCreators'
import './AddNewRecipe.css'

function AddNewRecipe(){
  const [ok, setOk] = React.useState(false)
  const {errorMassage,newRecipeMessage } = useSelector((state)=>state.recipes)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const sendRecipe = React.useCallback((event) => {
    event.preventDefault()
    const {title:{value:title}, body:{value:body},img:{value:img} } = event.target;
    const recipe = {title,body,img};
    dispatch(addRecipe(recipe))
    event.target.body.value=''
    event.target.title.value=''
    event.target.img.value=''
  },[dispatch])
   const handlerDeleteMassage = React.useCallback(()=>{
    if( errorMassage !== undefined )
    dispatch(deleteErrorMassage())
   },[errorMassage])
    const handlerdeleteComplite = React.useCallback(()=>{
       setOk(false)
    },[])
    useEffect(()=>{  
    setOk((prev)=> !prev)
    },[newRecipeMessage])
  return(
   <section className='New-Recipe-section'>
    <div className='container'>
      <div className='New-Recipe'>
        <h2 className='New-Recipe-title'>Новый рецепт</h2>
        {errorMassage && errorMassage ? <p className='New-Recipe-error'>*{errorMassage}</p>: <></>}
        {ok?<p className='New-Recipe-complite'>{newRecipeMessage}</p>:<></>}
        <form className='New-Recipe-form' onSubmit={sendRecipe} >
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
          />
          <TextField
            type="text"
            label="Url картинки"
            name="img"
            variant="outlined"
            className='New-Recipe-form__input'
            onChange={handlerDeleteMassage}
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
