import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { TextField, Button, CardActionArea, CardActions } from "@mui/material";
import { useEffect } from "react";

function MyRecipe() {
  const recipes = useSelector((state) => state.recipes.recipes);
  const dispatch = useDispatch();
  console.log(recipes)

  return (
    <form className="UserRecipe-form">
    <h2>Заявки на добавление рецептов</h2>
      <div id="input-bar">
          <TextField
            type="text"
            label="Поиск рецептов"
            name="searchRecipe"
            variant="outlined"
            className="searchRecipe-input"
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="searchRecipe-btn"
          >
            Поиск
          </Button>
        </div>

        <div className="UserRecipe-card-list">
        {recipes.map((recipe) => (
            recipe.moder_visible ? (
            <div className="recipe-card" id={recipe.id}>
              <Card sx={{ maxWidth: 250 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image={recipe.img} />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {recipe.title}
                    </Typography>
                    <Typography variant="body3" color="text.secondary">
                      {recipe.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" className="MyRecipe-btn-publish" color="primary" value={recipe.id}>
                    Подтверить
                  </Button>
                  <Button size="small" color="primary">
                    Подробнее
                  </Button>
                  <Button size="small" className="MyRecipe-btn-delete" color="primary" value={recipe.id}>
                    Отклонить
                  </Button>
                </CardActions>
              </Card>
            </div>) : (<></>)
          ))}
        </div>

    </form>
  );
}

export default MyRecipe;
