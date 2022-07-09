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
    
    <div className="cont">

      <div className="body-lk">
          <form className="profile-user-data">
            <div className="mb-3">
              <label htmlFor="name-input" className="form-label">
                <img src={user.img} alt="" />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="name-input" className="form-label">
                Имя:{' '}{user.name}
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
              Фамилия:{' '}{user.surmane}
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
              Почта:{' '}{user.email}
              </label>
            </div>
          </form>

          <form className="profile-left-navigate">
            <ul>
              <li><a className="my-recipe" href="/" onClick={RecipeVision}>My recipe</a></li>
              <li><a className="new-recipe" href="/" onClick={NewRecipeVision}>New recipe</a></li>
              <li><a className="likes-recipe" href="/" onClick={LikesRecipeVision}>Likes recipe</a></li>
              <li><a className="edit-profile" href="/" onClick={EditProfileVision}>Edit profile</a></li>
            </ul>
          </form>
      </div>

      <div className="body-form">
        <div className="forms-vision">
          {myRecipeFormVision && <MyRecipe />}
          {newRecipeFormVision && <NewRecipe />}
          {likesRecipeFormVision && <LikesRecipe />}
          {editProfileFormVision && <EditProfile  />}
        </div>
      </div>
      
    </div>
  );
}

export default LK;
