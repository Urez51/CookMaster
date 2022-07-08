import React from "react";
import {TextField, Button, CardActionArea, CardActions} from '@mui/material';
import './MyRecipe.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const recept = { rec: ['яичница', 'сырники', 'макароны с сосикой', 'кутчунез под луком', 'Санин бутер', 'чипсы с сыром']}
console.log(recept)
function MyRecipe() {

  return (
    <>
    <form className='MyRecipe-form'>
    <h2>MyRecipe</h2>
    <TextField
            type="text"
            label="Поиск рецептов"
            name="searchRecipe"
            variant="outlined"
            className='searchRecipe-input'
    />
    <Button variant="contained" color="primary" type="submit" className='searchRecipe-btn'>
            Найти
    </Button>

      <div className="recipe-card-list">

    {recept.rec.map((recipe, i) => (
      <div className="recipe-card">
       <Card sx={{ maxWidth: 250 }}>
       <CardActionArea>
         <CardMedia
           component="img"
           height="140"
           image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADYCAMAAAC+/t3fAAAAG1BMVEX////p6enu7+77+/v09PTr6+vx8fH4+Pj19fVCfWJIAAACHElEQVR4nO3a246DIBSF4Qps9P2feLQWRUU0nWR0Of+XXlkvWNnISV8vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABqiq4hXt+570ZoK001WzdUnu7p93wr1XE0Trm7hlw4KJluyw4KpluywYKIlO1EwnZLl81ZfsKNRsf9pzGvxTJH23TeZ+10wd3X7d+XBTgwd69s0gj22Ys8KdrL/ldmNg51+tAqxbl2x/Xa70PpeG2r3XN3+XctGz8Vb7ryyXdqyvkLB7N3yzcT7nshtszQRCWafn7XbG1ub/tYLlvL50p2+NMhoBLNarjmZ5sqj3A9HY28UrNiosmDfbgWEgmU7ZB+cmQtZz9w8ZkLB5g1ySM9Udkk32DxyuELzNyOjULD0x6I4U81Eg9kcwVuWwaY6Bs0Jum9zGuu7ZWW6z+VWM1jPl6+nAF6zK/bVSMFWD1N69LzmIjir2G4wzYo9uCumwWM1FafBshXtijavFBcBptktigZ76gQ9qC+p1ncLBZt3LYVF8GbfIhQsf7HXDduWLrugvG2pHe5uj41lgg2nULWjgfXZgEyw96HH/mGObsXGbE87fhu74nDeWzowHc+IhbviwRG3bLCxaI3FrD/6aE2hXGLBpnwudq33bRfd/is0wWDnEOzPEYxgN/HYYGF3JD/DbvyNX/Vz9CP3/fgNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+O9+AC4xDz003GcNAAAAAElFTkSuQmCC"
         />
         <CardContent>
           <Typography gutterBottom variant="h6" component="div">
             {recipe}
           </Typography>
           <Typography variant="body3" color="text.secondary">
             Lizards are a widespread group of squamate reptiles, with over 6,000
             species, ranging across all continents except Antarctica
           </Typography>
         </CardContent>
       </CardActionArea>
       <CardActions>
         <Button size="small" color="primary">
           Share
         </Button>
         <Button size="small" color="primary">
           Hide
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
