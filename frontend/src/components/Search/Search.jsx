import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Autocomplete, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Input, TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { searchRecipe } from '../../store/searchRecipe/actionsCreators'
import { useNavigate } from 'react-router-dom'
import { getAllIngridients } from "../../store/ingridients and stap/actionsCreators";

function Search() {
  const recipe = useSelector((state) => state.searchRecipe.searchRecipe);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {allIngridients} = useSelector((state)=>state.ingridientsAndSteps)
  const handleSearch = (event) => {
    event.preventDefault();
    const title = event.target.title.value.toLowerCase().trim();
    dispatch(searchRecipe(title));
  }
  const [selectIngridient,setselectIngridient] = React.useState()
  const handlerInputIng = React.useCallback((event)=>{
    const wow = JSON.parse(event.target.getAttribute('data-value'))
    setselectIngridient (wow)
  })
  useEffect(()=>{
    dispatch(getAllIngridients())
  },[])
  const defaultProps = {
    options: allIngridients,
    getOptionLabel: (option) => (option.name + " " + "(" + option.measure + ")"), 
  }
  return (

    <div className="container">
      <div style={{ "display": 'flex', "flexDirection": 'column', "alignItems": 'center', "marginTop": '5%' }}>
          <form onSubmit={handleSearch}>
            <Accordion style={{ "maxWidth": '960px', "minWidth": '960px', "marginBottom": "20px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Поиск по названию</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Input placeholder="Введите название блюда" name="title" type="text" style={{ "maxWidth": '900px', "minWidth": '900px' }} />
              </AccordionDetails>
              <Button size="small" color="primary" type="submit" style={{ "marginLeft": "3%" }}>
                Искать
              </Button>
            </Accordion>
          </form>
        <form className='Form-add-ingridients Form-add' >
            <TextField
            type="number"
            label="Количество"
            name=""
            variant="outlined"
            className='Form-add-ingridients__input'
            min="0"
            
            />
                      <Autocomplete
            onChange={handlerInputIng}
            {...defaultProps}
            disablePortal
            id="combo-box-demo"
            options={allIngridients}
            sx={{ width: 300 }}
            renderOption={(props, option) => (<Box data-value={JSON.stringify(option)} {...props} > {option.name} ({option.measure}) </Box>)}
            renderInput={(params) => (<TextField  label="выберете ингредиент" 
              {...params} inputProps={{...params.inputProps}}/>)}
            /> 

            <Button className='Form-add-ingridients__btn'  variant="outlined">Добавить ингредиент</Button>
        </form>
        {Object.keys(recipe).length !== 0 && (
          <ul className="home__list-cards cards-list">
              <li className="cards-list__item" id={recipe[0]['recipe_id']} key={uuidv4()}>
                <Card style={{ maxWidth: '320px', }} className="card">
                  <CardActionArea>
                    <CardMedia component="img" height="140" image={recipe[0]['Recipe.img']} />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div" className="cards-list__item-title">
                        {recipe[0]['Recipe.title']}
                      </Typography>
                      <Typography variant="body3" color="text.secondary" className="cards-list__item-body">
                        {recipe[0]['Recipe.title']}
                      </Typography>

                      <Typography variant="body3" color="text.secondary" className="cards-list__item-body">
                        <ul className="list-priducts">
                          {recipe.map((product) => (
                            <li className="list-priducts__item" key={uuidv4()}>{product['Product.name']}</li> 
                          ))}
                        </ul>
                      </Typography>
                      
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" id={recipe[0]['recipe_id']} onClick={() => navigate(`/recipe/${recipe[0]['recipe_id']}`, { replace: true })}>
                      Подробнее
                    </Button>
                  </CardActions>
                </Card>
              </li>
          </ul>
          )}
      </div>
    </div>
    );
}

export default Search;
