import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Autocomplete, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, IconButton, Input, TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { searchRecipe } from '../../store/searchRecipe/actionsCreators'
import { useNavigate } from 'react-router-dom'
import { addOneIngridientForSearch, clearIngridientForSearch, deleteIngridientOnstateSearch, getAllIngridients, sendForSearch } from "../../store/ingridients and stap/actionsCreators";
import { useCallback } from "react";
import { addToFavoriteRecipe } from "../../store/recipe/actionsCreators";


function Search() {
  const recipe = useSelector((state) => state.searchRecipe.searchRecipe);
  const user = useSelector((state) => state.auth.User)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [like, setlike] = React.useState(false)
  const {allIngridients,ingridientsSearch,recipeSearchIng} = useSelector((state)=>state.ingridientsAndSteps)
  const handleSearch = (event) => {
    event.preventDefault();
    const title = event.target.title.value.toLowerCase().trim();
    dispatch(searchRecipe(title));
  }
  const addOrDeleteFavoriteRecipe = useCallback((event) => {
    event.preventDefault();
    const id = event.target.value;
    console.log(id)
    dispatch(addToFavoriteRecipe(id))
  }, []);
  console.log(recipeSearchIng, 'z nenf');
  const [selectIngridient,setselectIngridient] = React.useState()
  const handlerInputIng = React.useCallback((event)=>{
    const wow = JSON.parse(event.target.getAttribute('data-value'))
    setselectIngridient (wow)
  })
  const addIngridientForSeach= useCallback((e)=>{
    e.preventDefault()
    dispatch(addOneIngridientForSearch(selectIngridient))
  },[selectIngridient])
  useEffect(()=>{
    dispatch(getAllIngridients())
    return (()=> dispatch(clearIngridientForSearch())) 
  },[])
  const defaultProps = {
    options: allIngridients,
    getOptionLabel: (option) => (option.name + " " + "(" + option.measure + ")"), 
  }
  const sendIngredientsForSearch = useCallback(()=>{
    console.log(ingridientsSearch);
    dispatch(sendForSearch(ingridientsSearch))
  },[ingridientsSearch])
  const hendlerDeleteIngridientForSearch= useCallback((id)=>{
    dispatch(deleteIngridientOnstateSearch(id))
  })
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

            <Button className='Form-add-ingridients__btn' onClick={addIngridientForSeach} variant="outlined">Добавить ингредиент</Button>
            <Button className='Form-add-ingridients__btn' onClick={()=>{
            sendIngredientsForSearch()
            // dispatch(clearIngridientForSearch())
            }} variant="outlined">Поиск по ингридиентам</Button>

        </form>
        <Box className="list-ingr">{ingridientsSearch.map((el)=> (<Box className="list-ingr__item" key={el.id}><Chip label={`${el.name} (${el.measure})`} /><IconButton onClick={()=> hendlerDeleteIngridientForSearch(el.id)} aria-label="delete" size="small">
  <DeleteIcon fontSize="small" /></IconButton></Box>))}</Box>
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
           <ul className="home__list-cards cards-list">
          {recipeSearchIng.map((el) => (
            <li className="cards-list__item" id={el.id} key={uuidv4()}>
              <Card sx={{ maxWidth: 320 }} className="card">
                <CardActionArea>
                  <CardMedia component="img" height="140" image={el.img} />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" className="cards-list__item-title">
                      {el.title}
                    </Typography>
                    <Typography variant="body3" color="text.secondary" className="cards-list__item-body">
                      {el.body}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant="body3" color="text.secondary" className="cards-list__item-body">
                      <ul className="list-priducts">
                        {el['Recipe_products'].map(item => (
                          <li className="list-priducts__item" key={uuidv4()}>{item['Product']['name']}</li> 
                        ))}
                      </ul>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className="card__btn">
                  <Button size="small" color="primary" id={el.id} onClick={() => navigate(`/recipe/${el.id}`, { replace: true })}>
                    Подробнее 
                  </Button>
                  {user.id && 
                    <Button
                    id={recipeSearchIng.id}
                    value={el.id}
                    label="Favorites"
                    className={el['Favorite_recipes'].length > 0 || like ? 'red' : 'gray'}
                    onClick={addOrDeleteFavoriteRecipe}
                  >❤</Button>
                  }
                </CardActions>
              </Card>
            </li>
          ))}
          </ul>
      </div>
    </div>
    );
}

export default Search;
