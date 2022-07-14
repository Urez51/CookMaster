import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Input } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { searchRecipe } from '../../store/searchRecipe/actionsCreators'
import { useNavigate } from 'react-router-dom'

function Search() {
  const recipe = useSelector((state) => state.searchRecipe.searchRecipe);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    const title = event.target.title.value.toLowerCase().trim();
    dispatch(searchRecipe(title));
  }

  return (
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

        {Object.keys(recipe).length !== 0 && (
        <ul className="home__list-cards cards-list">
            <li className="cards-list__item" id={recipe[0]['recipe_id']} key={uuidv4()}>
              <Card style={{ "minWidth": '330px', "maxWidth": '330px', }} className="card">
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
    );
}

export default Search;
