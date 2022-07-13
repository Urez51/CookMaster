import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {TextField, Button,Autocomplete, Input, Typography, Chip} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import {addRecipe,
  deleteErrorMassage,
  clearMessageAfterAddedRecipe } from './../../store/recipe/actionsCreators'
import './AddNewRecipe.css'
import {addOneIngridient, getAllIngridients,deleteOneIngridient,addOneStepOnState} from './../../store/ingridients and stap/actionsCreators'

function AddNewRecipe(){
  const {errorMassage,newRecipeMessage } = useSelector((state)=>state.recipes)
  const {allIngridients,recipeIngridients, stepsForRecipes} = useSelector((state)=>state.ingridientsAndSteps)
  const [errorIngridient,setErrorIngridient] = useState(true)
  const [step,setStep]= useState()
  const [body,setBody]= useState()
  const [img,setImg]= useState()
  const clearForm= useRef()
  const clearInputAmountIngridient = useRef()
  const clearFormStep = useRef()
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(()=>{
    dispatch(getAllIngridients())
  },[])
  const [selectIngridient,setselectIngridient] = React.useState()
  const [amountIngridient,setseamountIngridient] = React.useState()
  // console.log(amountIngridient)
  const handlerInputIng = React.useCallback((event)=>{
    const wow = JSON.parse(event.target.getAttribute('data-value'))
    setselectIngridient(wow)
  })
  const defaultProps = {
    options: allIngridients,
    getOptionLabel: (option) => (option.name + " " + "(" + option.measure + ")"), 
  }
  const submitFormIngridient = React.useCallback((event)=>{
    event.preventDefault()
    if(selectIngridient !== null && !!amountIngridient ){
      
    dispatch(addOneIngridient(selectIngridient,amountIngridient))
    setseamountIngridient('')
    clearInputAmountIngridient.current.reset()
    }else{
      setErrorIngridient(false)
    }
  })
  const hendlerDeleteIngridient = React.useCallback((id)=>{
    dispatch(deleteOneIngridient(id))
  },)
  const sendRecipe = React.useCallback((event) => {
    event.preventDefault()
    const {title:{value:title}, body:{value:body},img:{value:img} } = event.target;
    const recipe = {title,body,img};
    dispatch(addRecipe(recipe,recipeIngridients,stepsForRecipes))
  },[recipeIngridients,stepsForRecipes]);


  const handlerDeleteMassage = React.useCallback(()=>{
  if( errorMassage !== undefined )
    dispatch(deleteErrorMassage());
  },[errorMassage, dispatch]);

  const handlerdeleteComplite = React.useCallback(()=>{
    dispatch(clearMessageAfterAddedRecipe())
  },[dispatch])

  useEffect(()=>{
    if(newRecipeMessage !== undefined && errorMassage === undefined ) {
      clearForm.current.reset()
    }
  },[newRecipeMessage, errorMassage])
const addOneStep = useCallback((event) => {
  event.preventDefault()
  const Step = {
    step, body, img, 
  }
dispatch(addOneStepOnState(Step))
clearFormStep.current.reset()
})
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
          <Box>{recipeIngridients.map((el)=> (<Box key={el.id}><Chip label={`${el.name} ${el.amount} (${el.measure})`} /><IconButton onClick={()=> hendlerDeleteIngridient(el.id)} aria-label="delete" size="small">
  <DeleteIcon fontSize="small" /></IconButton></Box>))}</Box>
          { !errorIngridient ? (<Box><p style={{color: "red",fontSize: 20}}>*Для отправки ингридиента заполните поля</p></Box>): null}

          <Box className='Form-add-ingridients'>
            
              
          <Autocomplete
      onChange={handlerInputIng}
      {...defaultProps}
      // {...defaultPropsS}
       disablePortal
       id="combo-box-demo"
       options={allIngridients}
        sx={{ width: 300 }}
        // renderOption={(parapms)=><Fragment>{parapms.name}</Fragment>}
        renderOption={(props, option) => (<Box data-value={JSON.stringify(option)} {...props} > {option.name} ({option.measure}) </Box>)}
        renderInput={(params) => (<TextField  label="выберете ингридиент" 
        {...params} inputProps={{...params.inputProps}}/>)}
        // getOptionLabel={option=>option.name}
          />        
         <form ref={clearInputAmountIngridient}>
            <TextField
            type="number"
            label="Количество"
            name=""
            variant="outlined"
            className='New-Recipe-form__input'
            min="0"
            onChange={(event)=>{setseamountIngridient(event.target.value)}}
            onFocus={()=>setErrorIngridient(true)}
            
            /> 
         
          <Button onClick={submitFormIngridient} variant="outlined">Добавить ингридиент</Button>
         </form>

          </Box>
          <Box>
            <form ref={clearFormStep}>
            <TextField
            type="number"
            label='Номер шага'
            name="stepNumber"
            variant="outlined"
            className='New-Recipe-form__input'
            onChange={(event)=> setStep(event.target.value)}
            />
            <TextField
            type="text"
            label="Описание шага"
            name="stepBody"
            variant="outlined"
            multiline
            maxRows={20}
            className='New-Recipe-form__input'
            onChange={(event)=> setBody(event.target.value)}
            />
            <TextField
            type="text"
            label="Url картинки шага"
            name="stepImg"
            variant="outlined"
            className='New-Recipe-form__input'
            onChange={(event)=> setImg(event.target.value)}
          />
           <Button type='button' onClick={addOneStep} variant="outlined">Добавить ингридиент</Button>
            </form>
          </Box>
          <Box>{stepsForRecipes.map((el)=> (<Box key={el.step}><Chip label={`Шаг:${el.step} \n Описание:${el.body}`} />{' '}Фото<Box style = {
                {background: `center/cover url(${el.img}) no-repeat`,
                 height : 100}
              }></Box><IconButton onClick={()=> hendlerDeleteIngridient(el.step)} aria-label="delete" size="small">
  <DeleteIcon fontSize="small" /></IconButton></Box>))}</Box>
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
