import { useState } from "react";
import { Divider, Rating, Button } from "@mui/material";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import RoomIcon from "@mui/icons-material/Room";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Dot from "@mui/icons-material/CenterFocusStrong";
import Rupee from "@mui/icons-material/CurrencyRupee";
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import Register from './Register'
const RegistrationCard = ({venue}) => {
  console.log(venue)
  const [open, setOpen] = useState(false);
  const handleEdit = () => {
    setOpen(true);
  }
  const handleDelete = () => {

  }
  return (
    <>
      <div className="w-full">
        <div className="bg-[#fff] rounded-md p-6 border">
          <div className="flex flex-col gap-2">
            <div className="text-xl text-gray-700 uppercase font-semibold tracking-wide">
              {venue.value}
            </div>
            <div className="text-lg text-gray-600 tracking-wide flex">
              <LocationCityIcon
                sx={{
                  fontSize: 20,
                  marginRight: "6px",
                  marginTop: "4px",
                }}
              />
             {venue.address}
            </div>
            <div className="text-md text-gray-600 tracking-wide">
              <RoomIcon
                sx={{
                  fontSize: 20,
                  marginRight: "6px",
                  color: "blue",
                }}
              />
              {venue.city}
            </div>
            <Divider variant="middle" />
            <div className="font-semibold">Wedding Type</div>

            <div className="flex gap-2 flex-col">
              <div className="text-md text-gray-600 my-2">
                <PeopleAltIcon
                  sx={{
                    fontSize: 20,
                    marginRight: "6px",
                  }}
                />
                {venue.capacity}
              </div>
              <div className="flex gap-10">
                <div className="text-md text-gray-600 my-2">
                  <Dot
                    sx={{
                      fontSize: 20,
                      marginRight: "6px",
                      color: "green",
                    }}
                  />
                  <Rupee
                    sx={{
                      fontSize: 20,
                    }}
                  />
                  {venue.veg}
                </div>
                <div className="text-md text-gray-600 my-2">
                  <Dot
                    sx={{
                      fontSize: 20,
                      marginRight: "6px",
                      color: "red",
                    }}
                  />
                  <Rupee
                    sx={{
                      fontSize: 20,
                    }}
                  />
                  {venue.nonveg}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 py-4">
            <Button onClick={handleEdit} startIcon={<EditIcon/>} variant="contained" color="primary">
              <div className="capitalize">Edit</div>
            </Button>
            <Button onClick={handleDelete} startIcon={<CloseIcon/>} variant="contained" color="error">
              <div className=" capitalize ">Delete</div>
            </Button>
          </div>
        </div>
      </div>
      <Register open={open} setOpen={setOpen}/>
    </>
  );
};

export default RegistrationCard;
