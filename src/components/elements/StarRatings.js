import { primary_color } from "@/utils/Colors";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";

function StarRating({newRating}) {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const ratingPercentage = (rating / 5) * 100;

  return (
    <div className="flex flex-row items-center">
      <StarRatings
        rating={rating}
        starRatedColor={primary_color}
        changeRating={handleRatingChange}
        numberOfStars={5}
        starDimension={"20px"}
        starSpacing={"2px"}
        name="rating"
      />
      <p className="text-sm font-semibold pt-2 pl-2">{ratingPercentage.toFixed(0)}%</p>
    </div>
  );
}

export default StarRating;
