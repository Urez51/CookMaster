import React from "react";
import { useParams } from "react-router-dom";
import {TextField, Button} from '@mui/material';
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addComments, deleteComments } from '../../store/comment/actionsCreators';
import "./Comments.css";



function Comments({recipe, user, comments}) {
  const dispatch = useDispatch();
  const {id} = useParams();

  const addComment = (e) => {
    e.preventDefault();
    dispatch(addComments(id, e.target.comment.value))
    e.target.reset()
  }

  const deleteComment = (e) => {
    e.preventDefault();
    dispatch(deleteComments(e.target.id))
  }

  return (
    <div className='Comments'>
      {user.id &&
        <form className="Comments__form" onSubmit={addComment} key={uuidv4()}>
            <TextField
              type="text"
              label="Комментарий"
              name="comment"
              variant="outlined"
              className='Comments__form-input'
            />
            <Button variant="contained" color="primary" type="submit" className='Comments__form-btn'>
              Оставить комментарий
            </Button>
        </form>
      }
      
        {recipe === undefined ? <h2>...loading</h2> :
          <ul className="Comments__list" key={uuidv4()}>
            {comments.map(comment => (
              <li className="Comments__list-item list-item-comments" key={uuidv4()}>
                <div className="list-item-comments__name">{comment["User.name"]} {comment["User.surname"]}</div>
                <div className="list-item-comments__body">{comment.body}</div>
                <div className="list-item-comments__data">{comment["createdAt"].slice(0,10)} {comment["createdAt"].slice(11,19)}</div>
                {(user.name === comment["User.name"] || user.role === true) && <Button className="list-item-comments__del-btn" id={comment.id} onClick={deleteComment}>X</Button>}
              </li>
            ))} 
          </ul>
        }

    </div>

  )
}

export default Comments;
