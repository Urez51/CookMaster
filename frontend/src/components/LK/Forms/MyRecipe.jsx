import React, { useEffect } from "react";
import { TextField, Button, CardActionArea, CardActions } from "@mui/material";
import "./MyRecipe.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe, deleteRecipe } from "../../../store/recipe/actionsCreators";
import { useNavigate } from "react-router-dom";

function MyRecipe() {
  const recipes = useSelector((state) => state.recipes.recipes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRecipe());
  }, [dispatch]);

  const handleDelete = (event) => {
    event.preventDefault()
    const id = event.target.value
    dispatch(deleteRecipe(id))
  }

  return (
    <>
      <form className="MyRecipe-form">
        <h2>Мои рецепты</h2>

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

        <div className="recipe-card-list">
          {recipes.map((recipe) => (
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
                  <Button size="small" color="primary" onClick={() => navigate(`/recipe/${recipe.id}`, { replace: true })}>
                    Подробнее
                  </Button>
                  <Button size="small" color="primary" value={recipe.id} onClick={handleDelete}>
                    Удалить
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </form>
    </>
  );
}

export default MyRecipe;
