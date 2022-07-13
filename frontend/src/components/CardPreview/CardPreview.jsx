import * as React from 'react';
import './CardPreview.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CardPreview(card) {
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
         {card.body}
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
