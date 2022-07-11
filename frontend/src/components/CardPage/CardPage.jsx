import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function CardPage() {
  const {id} = useParams();
  console.log(id);
  useEffect(() => {
    const getData = async () => {
      const responce = await fetch(`/recipe/${id}`, {
        method: 'GET'
      })
      const resDB = await responce.json()
      console.log(resDB);
    }
    getData();
  }, [])
  return (
    <section className='CardPage-section'>
      <div className="container">
        <h2>{id}</h2>
        <ul>

        </ul>
      </div>
    </section>
  )
}

export default CardPage;
