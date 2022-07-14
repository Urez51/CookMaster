import React from "react";
import {TextField, Button, Input} from '@mui/material';
import { useSelector, useDispatch} from 'react-redux';
import { editAuth,upLoadPhotoUser } from '../../../store/auth/actionsCreators'
import './EditProfile.css';
function EditProfile() {
  const dispatch = useDispatch();
  const user = useSelector((data) => data.auth.User);
  const photo = useSelector((data) => data.auth.photo)
  const editDataUser = React.useCallback((event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const surname = event.target.surname.value;
    dispatch(editAuth(name, surname, photo))

  }, [photo])
  const hendlerUloadPhoto= React.useCallback((e)=>{
    try {
      const picturesData = [...e.target.files];
      const data = new FormData();
      picturesData.forEach((img) => {
        data.append("homesImg", img);
      });
      dispatch(upLoadPhotoUser(data))
    } catch (error) {}})

  return (
    <section className="EditProfile-section">
      <div className="container">
        <div className="EditProfile">
          <h2 className="EditProfile-title">Изменение данных профиля</h2>
          <form className='EditProfile-form' onSubmit={editDataUser}>
            <TextField
              type="text"
              label="name"
              name="name"
              variant="outlined"
              defaultValue={user.name}
              className='EditProfile-form__input'
            />
            <TextField
              type="text"
              label="surname"
              name="surname"
              variant="outlined"
              defaultValue={user.surname}
              className='EditProfile-form__input'
            />
            <Input
              type="file"
              label="img url"
              name="img"
              variant="outlined"
              onChange={hendlerUloadPhoto}
              className='EditProfile-form__input'
            />
            <Button variant="contained" color="primary" type="submit" className='EditProfile-form__btn'>
              Сохранить
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditProfile;
