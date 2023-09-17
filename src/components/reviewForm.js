import React, { useState } from "react";
import ReviewList from "./reviewList";


function ReviewForm() {
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState([]);// array state value similar to this.state Review
  
    // Handle input change
    const handleInputChange = (e) => {
      setReview(e.target.value); // sets the state value of Review to whatever the current input change value is 
    };
  
    // Handle button click
    const handleButtonClick = () => {
      if (review) { // Ensure review is not empty
        setReviews([...reviews, review]); //sets the Reviews state array values to the current value of Review on the button click
        setReview(''); 
      }
    };
  
    return (
      <div>
        <ReviewList reviews = {reviews}/>

        <input 
          id="userReview" 
          type="text" 
          className="form-control" 
          placeholder="Leave a review"
          value={review}
          onChange={handleInputChange} 
        />
        <button className="btn btn-success" onClick={handleButtonClick}>Submit</button>        
      </div>
    );
  }

export default ReviewForm;
