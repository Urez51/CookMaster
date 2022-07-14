import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {TextField, Button,Autocomplete, Input, Typography, Chip} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import {addRecipe,
  deleteErrorMassage,
  clearMessageAfterAddedRecipe,
  addPhotoRecipe } from './../../store/recipe/actionsCreators'
import './AddNewRecipe.css'
import {addOneIngridient, getAllIngridients,deleteOneIngridient,addOneStepOnState,deleteOneStep,addPhotoStep} from './../../store/ingridients and stap/actionsCreators'
import { v4 as uuidv4 } from "uuid";
function AddNewRecipe(){
  const {errorMassage,newRecipeMessage,photoRecipe } = useSelector((state)=>state.recipes)
  console.log(photoRecipe);
  const {allIngridients,recipeIngridients, stepsForRecipes,photoStep} = useSelector((state)=>state.ingridientsAndSteps)
  const [errorIngridient,setErrorIngridient] = useState(true)
  const [step,setStep]= useState()
  const [body,setBody]= useState()
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
  const hendlerUloadPhoto= React.useCallback((e)=>{
    try {
      const picturesData = [...e.target.files];
      const data = new FormData();
      picturesData.forEach((img) => {
        data.append("homesImg", img);
      });
      dispatch(addPhotoRecipe(data))
    } catch (error) {}

  })
  console.log(step,body);
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
  const hendlerDeleteStep = React.useCallback((id)=>{
    dispatch(deleteOneStep(id))
  },)
  const sendRecipe = React.useCallback((event) => {
    event.preventDefault()
    const {title:{value:title}, body:{value:body} } = event.target;
    const recipe = {title,body,img:photoRecipe};
    dispatch(addRecipe(recipe,recipeIngridients,stepsForRecipes))
  },[recipeIngridients,stepsForRecipes,photoRecipe]);


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
  const numStep = Number(step)
  const Step = {
    numStep, body, img:photoStep, 
  }
dispatch(addOneStepOnState(Step))
clearFormStep.current.reset()
},[photoStep])
const hendlerUloadPhotoStep= React.useCallback((e)=>{
  try {
    const picturesData = [...e.target.files];
    const data = new FormData();
    picturesData.forEach((img) => {
      data.append("homesImg", img);
    });
    dispatch(addPhotoStep(data))
  } catch (error) {}

})
  return(
   <section className='New-Recipe-section'>
    <div className='container'>
      <div className='New-Recipe'>
        <h2 className='New-Recipe-title'>Новый рецепт</h2>
        {errorMassage && errorMassage ? <p className='New-Recipe-error'>*{errorMassage}</p>: <></>}
        <p className='New-Recipe-complite'>{newRecipeMessage}</p>
        <form ref={clearForm} className='New-Recipe-form Form-add' onSubmit={sendRecipe} >
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
          <Input
            type="file"
            name="img"
            variant="outlined"
            className='New-Recipe-form__input'
            onChange={hendlerUloadPhoto}
            onFocus={handlerdeleteComplite}
          />
          <Box className="list-ingr">{recipeIngridients.map((el)=> (<Box className="list-ingr__item" key={el.id}><Chip label={`${el.name} ${el.amount} (${el.measure})`} /><IconButton onClick={()=> hendlerDeleteIngridient(el.id)} aria-label="delete" size="small">
  <DeleteIcon fontSize="small" /></IconButton></Box>))}</Box>
          { !errorIngridient ? (<Box><p style={{color: "red",fontSize: 20}}>*Для отправки ингредиента заполните поля</p></Box>): null}

          {/* <Box className='Form-add-ingridients'> */}
            
              
       
         <form className='Form-add-ingridients Form-add' ref={clearInputAmountIngridient}>
            <TextField
            type="number"
            label="Количество"
            name=""
            variant="outlined"
            className='Form-add-ingridients__input'
            min="0"
            onChange={(event)=>{setseamountIngridient(event.target.value)}}
            onFocus={()=>setErrorIngridient(true)}
            
            />
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
            renderInput={(params) => (<TextField  label="выберете ингредиент" 
              {...params} inputProps={{...params.inputProps}}/>)}
              // getOptionLabel={option=>option.name}
            /> 
         
            <Button className='Form-add-ingridients__btn' onClick={submitFormIngridient} variant="outlined">Добавить ингредиент</Button>
         </form>
{/* 
          </Box> */}
          {/* <Box> */}
            <form className='Form-add-step Form-add'ref={clearFormStep}>
            <TextField
            type="number"
            label='Номер шага'
            name="stepNumber"
            variant="outlined"
            className='Form-add-step__input'
            defaultValue={1}
            onChange={(event)=> setStep(event.target.value)}
            />
            <TextField
            type="text"
            label="Описание шага"
            name="stepBody"
            variant="outlined"
            multiline
            maxRows={20}
            className='Form-add-step__input'
            onChange={(event)=> setBody(event.target.value)}
            />
            <Input
            type="file"
            label="фото шага"
            name="stepImg"
            variant="outlined"
            className='Form-add-step__input'
            onChange={hendlerUloadPhotoStep}
          />
           <Button type='button' onClick={addOneStep} variant="outlined">Добавить Шаг</Button>
            </form>
          {/* </Box> */}
          <Box className="list-steps">{stepsForRecipes.map((el)=> (<Box className="list-steps__item" key={uuidv4()}><Chip label={`Шаг:${el.numStep} \n Описание:${el.body}`} />{' '}Фото<Box style = {
                {background: `center/cover url(${el.img}) no-repeat`,
                 height : 100}
              }></Box><IconButton onClick={()=> hendlerDeleteStep(el.numStep)} aria-label="delete" size="small">
            <DeleteIcon fontSize="small" /></IconButton></Box>))}
          </Box>

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
