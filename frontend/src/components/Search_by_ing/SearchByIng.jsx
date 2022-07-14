import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Checkbox, Chip, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { getAllRecipe } from "../../store/search_by_ing/actionCreaters";
import { v4 as uuidv4 } from 'uuid';
import './SearchByIng.css';
import { GET_SEARCH_BY_ING_RECIPES } from "../../store/search_by_ing/actionsTypes";
import { useNavigate } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 18;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function SearchByIng() {
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();

  const [productName, setProductName] = useState([]);
  const [names, setNames] = useState([]);
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch('/search_ing')
      .then((data) => data.json())
      .then((data) => {
        if (data.length) {
          setNames(data.map((item) => item.name));
          return;
        }

        setNames([]);
      });
  }, []);

  console.log('names', names);

  // console.log('result', result);

  const toProductHandleChange = (e) => {
    console.log('chip.value', e.target.chip.value);
  }


  const toProductHandleSubmit = () => {
    fetch('/search_ing', {
      method: "POST",
      body: JSON.stringify({
        productName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.id) {
          dispatch({ type: GET_SEARCH_BY_ING_RECIPES, payload: data });
          // navigate('/search');
        } else {
          setRecipe(data);
        }
        console.log('data', data);
      })
  }


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log('e.', event.target.value);
    setProductName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <>
    <form onSubmit={toProductHandleSubmit} action="/search_ing" method="POST">
      <Accordion style={{ "maxWidth": '960px', "minWidth": '960px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Поиск по ингредиентам</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
              <InputLabel id="demo-multiple-chip-label" className="ing">Выберите ингредиенты</InputLabel>
            <FormControl sx={{ m: 1 }} style={{ 'minWidth': '900px' }} onChange={toProductHandleChange} >
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={productName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={productName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button size="small" color="primary" type="submit" style={{ "marginLeft": "3%" }}>
              Искать
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </form>
     <ul className="home__list-cards cards-list">
     {recipe.map((el) => (
       <li className="cards-list__item" id={el.id} key={uuidv4()}>
         <Card style={{ "minWidth": '330px', "maxWidth": '330px', }} className="card">
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
   </>
  );
}

export default SearchByIng;
