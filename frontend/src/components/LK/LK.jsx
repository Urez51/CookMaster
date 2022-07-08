import React, { useState } from "react";
import MyRecipe from './Forms/MyRecipe'
import NewRecipe from './Forms/NewRecipe'
import LikesRecipe from './Forms/LikesRecipe'
import EditProfile from './Forms/EditProfile'
import { useSelector } from "react-redux";
import './LK.css'

const userData = {img: '', name: 'pavel', surname: 'malyshev', email: 'gomer_74@mail.ru'}

function LK() {
  const user = useSelector((state) => state.auth.user)
  console.log(user)

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
                {userData.img}
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="name-input" className="form-label">
                {userData.name}
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                {userData.surname}
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                {userData.email}
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
        <form className="forms-vision">
          {myRecipeFormVision && <MyRecipe />}
          {newRecipeFormVision && <NewRecipe />}
          {likesRecipeFormVision && <LikesRecipe />}
          {editProfileFormVision && <EditProfile />}
        </form>
      </div>
      
    </div>
  );
}

export default LK;
