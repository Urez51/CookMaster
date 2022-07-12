import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllRecipe } from "../../store/recipe/actionsCreators";
import { v4 as uuidv4 } from 'uuid';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.recipes.recipes);
  // useEffect(() => {
  //   fetch('/recipe/all')
  //   .then((response) => response.json())
  //   .then((data) => setCards(data));
  // }, [])



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
                          <li className="list-priducts__item">{item}</li> 
                        ))}
                      </ul>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" id={el.id} onClick={() => navigate(`/recipe/${el.id}`, { replace: true })}>
                    Подробнее
                  </Button>
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
