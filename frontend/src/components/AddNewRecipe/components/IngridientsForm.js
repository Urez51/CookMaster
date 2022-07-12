import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {TextField, Button} from '@mui/material';
import {addRecipe,
  deleteErrorMassage,
  clearMessageAfterAddedRecipe } from './../../store/recipe/actionsCreators'
import './AddNewRecipe.css'
import { Box, Autocomplete } from '@mui/system';


function IngridientsForm(){
   const [state, detState] = useState({name: '', mes: '', q: ''})

   const setCurrentIng = (val)=>setState(prev=>{...prev, name: val.name, mes: val.name})
  return(
     <Box>
      <Autocomplete
       disablePortal
       id="combo-box-demo"
       options={}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
        onChange = {setCurrentIng}
/>     
<TextField
            type="text"
            label="Новый рецепт"
            name="title"
            variant="outlined"
            className='New-Recipe-form__input'
            onChange={handlerDeleteMassage}
            onFocus={handlerdeleteComplite}
          />
          <Chip label="Chip Filled" />
     </Box>
  )
}
