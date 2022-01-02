import * as React from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating({ rating,setRating }) {
  
  return (
    <>
     {rating ?
        <div>
          <Typography component="legend">Your Rating</Typography>
          <Rating name="read-only" value={rating} readOnly />
        </div>:
        <div>
        <Typography component="legend">Rate your experience</Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </div>

      }
    </>
  );
}
