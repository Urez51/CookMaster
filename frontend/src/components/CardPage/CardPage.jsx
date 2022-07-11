import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CardPage.css";
import { v4 as uuidv4 } from "uuid";

function CardPage() {
  const {id} = useParams();
  const [recipe, setRecipe] = useState();
  const [steps, setSteps] = useState();
  const [recipeProduct, setRecipeProduct] = useState();
  useEffect(() => {
    const getData = async () => {
      const responce = await fetch(`/recipe/${id}`, {
        method: 'GET'
      })
      const {recipe, steps, recipeProduct} = await responce.json()
      setRecipe(...recipe);
      setSteps(steps);
      setRecipeProduct(recipeProduct);
    }
    getData();
  }, [])
  return (
    
    <section className='CardPage-section'>
      
      <div className="container">
        <div className="CardPage">
          {recipe === undefined? <h2>...loading</h2> :
            <>
            <h2 className="CardPage__title">{recipe.title}</h2>
            <div className="CardPage__img" style={{background: `center/cover url(${recipe.img}) no-repeat`}}/>
            <p className="CardPage__descr">{recipe.body}</p>
            <ul className="CardPage__list-products products-list">
              {recipeProduct.map(item => (
                <li className="products-list__item"><span>{item["Product.name"]}</span> - {item.product_value} {item["Product.measure"]}</li>
              ))}
            </ul>
            <h3 className="CardPage__recipe-title">Рецепт {recipe.title}:</h3>
            <ul className="CardPage__list-steps steps-list">
              {steps.map(item => (
                <li className="steps-list__item">
                  <div className="wrap-img">
                  <div className="steps-list__item-img" style={{background: `center/cover url(${item.img}) no-repeat`}}/>
                  </div>
                  <p className="steps-list__item-descr">{item.body}</p>
                </li>
              ))}
            </ul>
            </>
          }
        </div>
      </div>

    </section>

  )
}

export default CardPage;
