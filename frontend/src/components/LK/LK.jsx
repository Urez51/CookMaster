import React, { useState } from "react";
import MyRecipe from './Forms/MyRecipe'
import NewRecipe from './Forms/NewRecipe'
import LikesRecipe from './Forms/LikesRecipe'
import EditProfile from './Forms/EditProfile'
import { useSelector } from "react-redux";
import './LK.css'

function LK() {
  const user = useSelector((state) => state.auth.User)

  const [myRecipeFormVision, setmyRecipeFormVision] = useState(true) // базовое отображение по переходу на /profile
  const [newRecipeFormVision, setNewRecipeFormVision] = useState(false)
  const [likesRecipeFormVision, setLikesRecipeFormVision] = useState(false)
  const [editProfileFormVision, setEditProfileFormVision] = useState(false)

  const RecipeVision = (event) => {
    event.preventDefault()
    setmyRecipeFormVision(true)
      setNewRecipeFormVision(false)
      setLikesRecipeFormVision(false)
      setEditProfileFormVision(false)
  }

  const NewRecipeVision = (event) => {
    event.preventDefault()
    setNewRecipeFormVision(true)
      setmyRecipeFormVision(false)
      setLikesRecipeFormVision(false)
      setEditProfileFormVision(false)
  }

  const LikesRecipeVision = (event) => {
    event.preventDefault()
    setLikesRecipeFormVision(true)
      setNewRecipeFormVision(false)
      setmyRecipeFormVision(false)
      setEditProfileFormVision(false)
  }

  const EditProfileVision = (event) => {
    event.preventDefault()
    setEditProfileFormVision(true)
      setLikesRecipeFormVision(false)
      setNewRecipeFormVision(false)
      setmyRecipeFormVision(false)
  }

  return (
    <section className="LK-section">
      <div className="container">
        <div className="LK">
          <div className="LK-info">
              <ul className="LK__list-data">
                <li className="LK__list-data-item">
                  <div className="LK__list-data-img" style={{background:  `center/cover url(${user.img}) no-repeat`}}/>
                </li>
                <li className="LK__list-data-item data-li">
                    <div className="data-li__name">Имя:</div><div className="data-li__res">{user.name}</div>
                </li>
                <li className="LK__list-data-item">
                <div className="data-li__name">Фамилия:</div><div className="data-li__res">{user.surname}</div>
                </li>
                <li className="LK__list-data-item">
                  <div className="data-li__name">Почта:</div><div className="data-li__res">{user.email}</div>
                </li>
              </ul>
              <ul className="profile-left-navigate-ul">
                <li className="profile-left-navigate-li" onClick={RecipeVision}>Мои рецепты</li>
                <li className="profile-left-navigate-li" onClick={NewRecipeVision}>Добавить новый рецепт</li>
                <li className="profile-left-navigate-li" onClick={LikesRecipeVision}>Избранные рецепты</li>
                <li className="profile-left-navigate-li" onClick={EditProfileVision}>Настройки профиля</li>
              </ul>
          </div>
          <div className="LK-body">
              {myRecipeFormVision && <MyRecipe />}
              {newRecipeFormVision && <NewRecipe />}
              {likesRecipeFormVision && <LikesRecipe />}
              {editProfileFormVision && <EditProfile  />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LK;
