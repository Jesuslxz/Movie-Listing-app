import React from "react";



function ReviewList(props){
    if( props.reviews !== ''){
        return (
        <div>
            {props.reviews.map((review, index) => (
                <p key = {index} >-{review}</p>
            ))}
        </div>
     );
    }
}
 export default ReviewList;