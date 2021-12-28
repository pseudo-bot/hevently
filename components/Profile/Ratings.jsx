import * as React from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating() {
  const [value, setValue] = React.useState(0);
  const already = true;

  return (
    <>
      
      {already ?
        <div>
          <Typography component="legend">Read only</Typography>
          <Rating name="read-only" value={value} readOnly />
        </div>:
        <div>
        <Typography component="legend">Rate your experience</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>

      }
    </>
  );
}
