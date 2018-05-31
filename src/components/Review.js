import React from 'react'
import { Link } from 'react-router-dom'
import { request } from '../helpers'

const Review = ({ review, deleteReview }) => {
  const { id, users_id, title, snack_id, rating, text } = review;

  return (
    <div className="review">
      <div>
        <h1
          style={{display:'inline'}}
          className="review-title">
          {title}
        </h1>
        {
          <span className="float-right" >
            <span
              className="btn btn-md btn-secondary"
              style={{marginRight:'5px'}}>
              Edit
            </span>
            <span
              onClick={() => deleteReview(id)}
              className="btn btn-md btn-danger"
              >
              Delete
            </span>
          </span>
        }
      </div>
    </div>
  )
}


export default Review
