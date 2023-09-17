import React from "react";
import ReviewForm from "./reviewForm";
import StarRating from "./starRating";
function RenderMovies(props) {

return(
  <div>
    {props.movies.map((movie,index)=> (
    
        <div className="card" key={index} id={index}>
            <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Movie Rating  <StarRating /> </h6>
                    
                    <p className="card-text"><strong>Reviews:</strong> <br /> -{movie.Review} {movie.reviews}</p>
                    {/* <ReviewList />  renders all reviews pushed from review form */}
                    <ReviewForm />

                </div>
            </div>

    ))}
  </div>  
    
  )
}


export default RenderMovies;