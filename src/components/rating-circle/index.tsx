import './rating.css';
import React from "react";

type Props = {
  rating: number;
};

const RatingCircle = ({ rating }: Props) => {
  const style = {
    '--rating': rating,
  } as React.CSSProperties;
  return (
    <div className="rating-container">
      <div className="rating-circle" style={style}>
        <span
          className={`rating-text font-bold ${
            rating > 7 ? 'text-red-500' : 'text-amber-600'
          }`}
        >
          {rating.toFixed(1)}
        </span>
      </div>
    </div>
  );
};

export default RatingCircle;
