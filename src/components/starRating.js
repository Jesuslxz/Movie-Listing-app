import React, {useState} from "react";

function StarRating () {
    const [rating, setRating] = useState(5)

    const handleMovieRating = (rangeInput) => {
        const ratingValue = rangeInput.target.value;
        setRating(ratingValue);
    }

    return(
        <span>{rating}/5  
            <div>
                <input type="range"  min={0} max={5} step={0.5} id="ratingRange" onChange={handleMovieRating} />
                
            </div>
        </span>
    );
}
 
export default StarRating;