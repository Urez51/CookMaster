import React, { useEffect, useState } from "react";
import { TextField, Button, CardActionArea, CardActions } from "@mui/material";
import "./MyRecipe.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecipe,
  deleteRecipe,
  publishRecipe,
  addToFavoriteRecipe,
} from "../../../store/recipe/actionsCreators";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function MyRecipe() {
  const recipes = useSelector((state) => state.recipes.recipes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRecipe());
  }, [dispatch]);

  const handleDelete = (event) => {
    event.preventDefault();
    const id = event.target.value;
    dispatch(deleteRecipe(id));
  };

  const handlePublish = (event) => {
    event.preventDefault();
    const id = event.target.value;
    dispatch(publishRecipe(id));
  };


  // добавление/удаление в избранное
  const addOrDeleteFavoriteRecipe = (event) => {
    event.preventDefault();
    const id = event.target.value;
    console.log("🚀 ~ file: MyRecipe.jsx ~ line 44 ~ addOrDeleteFavoriteRecipe ~ id", id)
    dispatch(addToFavoriteRecipe(id))
  }

  // search input
  const [value, setValue] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(value.toLowerCase());
  });

  // search click
  const [isOpen, setIsOpen] = useState(true);

  const itemClickHandler = (event) => {
    setValue(event.target.textContent);
    setIsOpen(!isOpen);
  };

  const inputClickHandler = () => {
    setIsOpen(true);
  };

  return (
    <section className="MyRecipe">
      <h2>Мои рецепты</h2>

      <div id="input-bar">
        <TextField
          type="text"
          label="Поиск рецептов"
          name="searchRecipe"
          variant="outlined"
          className="searchRecipe-input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onClick={inputClickHandler}
        />
      </div>

      <ul className="autocomlete">
        {value && isOpen
          ? filteredRecipes.map((recipe) => (
              <li className="autocomplete__item" onClick={itemClickHandler}>
                {recipe.title}
              </li>
            ))
          : null}
      </ul>

      <ul className="recipe-card-list">
        {filteredRecipes.map((recipe) =>
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
                      {recipe.title}
                    </Typography>
                    <Typography
                      variant="body3"
                      color="text.secondary"
                      className="c"
                    >
                      {recipe.body}
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
                <CardActions>
                  {recipe.private ? (
                    <Button
                      size="small"
                      disabled={recipe.moder_visible ? true : false}
                      className={
                        recipe.moder_visible
                          ? "MyRecipe-btn-publish-naproverke"
                          : "MyRecipe-btn-publish-nenaproverke"
                      }
                      color="primary"
                      value={recipe.id}
                      onClick={handlePublish}
                    >
                      {recipe.moder_visible ? "На проверке" : "Опубликовать"}
                    </Button>
                  ) : (
                    <Button
                      size="small"
                      disabled
                      className="MyRecipe-btn-opublikovano"
                      color="primary"
                      value={recipe.id}
                      onClick={handlePublish}
                    >
                      Опубликовано
                    </Button>
                  )}
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
                    size="small"
                    className="MyRecipe-btn-delete"
                    color="primary"
                    value={recipe.id}
                    onClick={handleDelete}
                  >
                    Удалить
                  </Button>

                  <Button
                    className=""
                    value={recipe.id}
                    label="Favorites"
                    onClick={addOrDeleteFavoriteRecipe}
                  >❤</Button>
                </CardActions>
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

export default MyRecipe;
