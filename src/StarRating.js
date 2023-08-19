import { FaStar } from "react-icons/fa";
import { useState } from "react";

export const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(false);
  const [input, setInput] = useState(null);
  const handleClick =(e) =>{
    console.log(setInput);
  }

  function getData(val){
    setInput(val.target.value)
    console.log(val.target.value)
  }
  
 
  
  
  return (
    <>
      <div>
        <h1 className="mt-5 mb-4" onClick={handleClick}> StarRating in React</h1>
        <h1>Please Enter the rating you want to give : <input type="text" onInput={getData} id="number"/></h1>
        {[...Array(setInput)].map(( star, index) => {
          const currentRating = index + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                size={50}
                className="star"
                color={
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <textarea
        rows="5"
        type="text"
        placeholder="Leave a message"
        className="box mt-4 mb-3"
      />
      <div>
        <button type="button" className="btn btn-warning mb-5">
          Submit
        </button>
      </div>
    </>
  );
};
export default StarRating;
