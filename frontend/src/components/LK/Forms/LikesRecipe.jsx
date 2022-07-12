import React, { useEffect, useState } from "react";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { getFavorite, addToFavoriteRecipe } from "../../../store/recipe/actionsCreators";
import { useNavigate } from "react-router-dom";
import "./LikesRecipe.css";

function LikesRecipe() {
  const favoriteRecipes = useSelector((state) => state.recipes.favoriteRecipes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // добавление/удаление в избранное
  const addOrDeleteFavoriteRecipe = (event) => {
    event.preventDefault();
    const id = event.target.value;
    console.log("🚀 ~ file: LikesRecipe.jsx ~ line 24 ~ addOrDeleteFavoriteRecipe ~ id", id)
    dispatch(addToFavoriteRecipe(id))
  }

  useEffect(() => {
    dispatch(getFavorite());
  }, [dispatch]);

  return (
    <section className="MyRecipe">
      <h2>Избранные рецепты</h2>
      <ul className="recipe-card-list">
        {favoriteRecipes.map((recipe) =>
          !recipe.delete_visible ? (
            <li className="recipe-card-list__item" id={recipe.id}>
              <Card sx={{ maxWidth: 320 }} className="card">
                <CardActionArea>
                  <CardMedia component="img" height="140" image={recipe.img} />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      className="recipe-card-list__item-title"
                    >
                      {recipe['Recipe.title']}
                    </Typography>
                    <Typography
                      variant="body3"
                      color="text.secondary"
                      className="c"
                    >
                      {recipe['Recipe.body']}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography
                      variant="body3"
                      color="text.secondary"
                      className="cards-list__item-body"
                    >
                      <ul className="list-priducts">
                        {recipe.products.map((item) => (
                          <li className="list-priducts__item" key={uuidv4()}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() =>
                      navigate(`/recipe/${recipe.id}`, { replace: true })
                    }
                  >
                    Подробнее
                  </Button>
                  <Button
                    value={recipe['recipe_id']}
                    label="Favorites"
                    onClick={addOrDeleteFavoriteRecipe}
                  >❤</Button>
                </Button>
              </Card>
            </li>
          ) : (
            <></>
          )
        )}
      </ul>
    </section>
  );
}

export default LikesRecipe;
