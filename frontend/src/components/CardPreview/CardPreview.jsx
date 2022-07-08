import * as React from 'react';
import './CardPreview.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CardPreview() {
  const card = [{
    img: 'https://24health.by/wp-content/uploads/2022/04/Klassicheskii-borsch-s-govyadinoi.jpeg',
    title: 'Borsch',
    description: 'Rasskazhu 55 zdes resept'
  },
  {
    img: 'https://kartinkin.net/uploads/posts/2021-07/1625689897_25-kartinkin-com-p-makaroni-s-sosiskami-na-skovorode-yeda-kra-32.jpg',
    title: 'Borsch',
    description: 'Rasskazhu zdes 66 resept'
  },
  {
    img: 'https://kartinkin.net/uploads/posts/2021-03/1617177974_21-p-makaroni-s-sirom-i-sosiskami-krasivo-22.jpg',
    title: 'Borsch',
    description: 'Rasskazhu 77 zdes resept'
  },];
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        component="img"
        height="240"
        image={card.img}
        alt="recept"
        name="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" name="title">
          {card.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" name="description">
         {card.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CardPreview;
