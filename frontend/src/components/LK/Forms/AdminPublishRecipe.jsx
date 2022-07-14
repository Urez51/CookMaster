import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { TextField, Button, CardActionArea, CardActions } from "@mui/material";
import { useEffect, useCallback } from "react";
import { getPublishRecipe, adminPublishRecipe, adminRejectRecipe } from "../../../store/recipe/actionsCreators";
import './AdminPublishRecipe.css'

function MyRecipe() {
  const recipes = useSelector((state) => state.recipes.recipes);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPublishRecipe());
  }, [dispatch])

  const handleAdminPublish = useCallback((event) => {
    event.preventDefault()
    const id = event.target.value
    dispatch(adminPublishRecipe(id))
  }, [dispatch])

  const handleAdminReject = useCallback((event) => {
    event.preventDefault()
    const id = event.target.value
    dispatch(adminRejectRecipe(id))
  }, [dispatch])

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

        <ul className="UserRecipe-card-list cards-list">
        {recipes.map((recipe) => (
            recipe.moder_visible ? (
            <li className="recipe-card" id={recipe.id}>
              <Card sx={{ maxWidth: 350 }} className="card">
                <CardActionArea>
                  <CardMedia component="img" height="140" image={recipe.img} />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" className="cards-list__item-title">
                      {recipe.title}
                    </Typography>
                    <Typography variant="body3" color="text.secondary" className="cards-list__item-body">
                      {recipe.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className="card__btn">
                <Button size="small" className="MyRecipe-btn-publish" color="primary" value={recipe.id} onClick={handleAdminPublish}>
                    Подтвердить
                  </Button>
                  <Button size="small" color="primary">
                    Подробнее
                  </Button>
                  <Button size="small" className="MyRecipe-btn-delete" color="primary" value={recipe.id} onClick={handleAdminReject} >
                    Отклонить
                  </Button>
                </CardActions>
              </Card>
            </li>) : (<></>)
          ))}
        </ul>

    </form>
  );
}

export default MyRecipe;
