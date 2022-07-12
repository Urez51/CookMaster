import React, { useEffect, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Input } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipe } from "../../store/recipe/actionsCreators";
import { v4 as uuidv4 } from 'uuid';


function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.recipes.recipes);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = cards.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);




  useEffect(() => {
    dispatch(getAllRecipe());
  }, [dispatch]);



  return (
        <>
    <div style={{ "display": 'flex', "flexDirection": 'column', "alignItems": 'center', "marginTop": '5%' }}>
      <Accordion style={{ "maxWidth": '960px', "minWidth": '960px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Поиск по названию</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Input placeholder="Введите название блюда" value={searchTerm} onChange={handleChange} type="text" style={{ "maxWidth": '900px', "minWidth": '900px' }} />
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ "maxWidth": '960px', "minWidth": '960px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Поиск по ингредиентам</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <ul className="home__list-cards cards-list">
          {searchResults.map((el) => (
            <li className="cards-list__item" id={el.id} key={uuidv4()}>
              <Card /* sx={{ maxWidth: 350 }} */ style={{"minWidth": '330px', "maxWidth": '330px',}} className="card">
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
    </div>
    </>
  );
}

export default Search;
