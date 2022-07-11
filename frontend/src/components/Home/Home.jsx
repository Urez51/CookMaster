import React, { useEffect } from "react";
import './Home.css';
import CardPreview from "../CardPreview/CardPreview";

function Home() {

  useEffect(() => {
    fetch('http://localhost:4000/api/cards')
    .then((response) => response.json)
    .then((data) => console.log('kartochki', data))
  }, [])
  
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
  },
  {
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
    <>
    <div className="home_page">
      <div id="cardsDiv">
        {card.map((el) => <CardPreview card={el}  />)}
      </div>
    </div>
    </>
  );
}

export default Home;
