import React, { useEffect, useCallback } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllRecipe, addToFavoriteRecipe } from "../../store/recipe/actionsCreators";
import { v4 as uuidv4 } from 'uuid';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.recipes.recipes);
  const user = useSelector((state) => state.auth.User)
  
  // добавление/удаление в избранное
  const addOrDeleteFavoriteRecipe = useCallback((event) => {
    event.preventDefault();
    const id = event.target.value;
    dispatch(addToFavoriteRecipe(id))
  }, []);

  useEffect(() => {
    dispatch(getAllRecipe());
  }, [dispatch]);
  
  return (
    <section className="home-section">
      <div className="container">
        <div className="home">
          <ul className="home__list-cards cards-list">
          {cards.map((el) => (
            <li className="cards-list__item" id={el.id} key={uuidv4()}>
              <Card sx={{ maxWidth: 350 }} className="card">
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
                        {el.products.map(item => (
                          <li className="list-priducts__item" key={uuidv4()}>{item}</li> 
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
                    id={cards.id}
                    value={el.id}
                    label="Favorites"
                    className={el['Favorite_recipes.recipe_id'] ? 'red' : 'gray'}
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
    </section>
  );
}

export default Home;
