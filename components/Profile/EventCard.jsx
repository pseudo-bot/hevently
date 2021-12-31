import React from "react";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import RoomIcon from "@mui/icons-material/Room";
import Ratings from "./Ratings";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from "@mui/material/Divider";

const Event=({eventType,key,event})=>{   
    return(
      <div key={key} className="bg-gray-50 rounded-md border p-6 text-gray-700">
      <div className="flex justify-center gap-8 items-center">
        <div className="flex flex-col gap-1">
          <div className="text-lg uppercase font-bold">Sarang Gupta</div>
          <div className="text-md capitalize text-gray-500">{eventType}</div>
        </div>
        <div className="flex flex-col gap-2 text-gray-600 font-medium">
          <div>From : { event.startDate}</div>
          <div>To : {event.endDate}</div>
        </div>
      </div>
      <div className="py-2 text-gray-600 font-medium capitalize">
        Guests : {event.guestList.length}
      </div>
      <Divider variant="middle" />
      <div className="flex flex-col gap-1 py-2">
        <div className="uppercase font-semibold text-md ">
         {event.venue.value}
        </div>
        <div className="flex items-center">
          {" "}
          <LocationCityIcon
            sx={{
              fontSize: 20,
              marginRight: "6px",
            }}
          />
          {event.venue.address}
        </div>
        <div>
          {" "}
          <RoomIcon
            sx={{
              fontSize: 20,
              marginRight: "6px",
              color: "blue",
            }}
          />
       {event.venue.city}
        </div>
      </div>
        <Divider variant="middle" />
      <div className="flex justify-between items-center pt-4">
        <div><Ratings/></div>
        <div><Button variant="contained" color="error" startIcon={<DeleteIcon />}>Cancel</Button></div>
      </div>
    </div>
    );
}



const EventCard = ({eventsData}) => {
  const list=[]
  for( const events in eventsData) { 
    const eventarr=eventsData[events];
    if(Array.isArray(eventarr)){
     eventarr.map((event,index)=>{
        list.push( <Event eventType={events} key={index} event={event}/>)
     })
    }
  }
    return (
        <div className="flex flex-wrap justify-center gap-8 py-10">
          {list}
        </div>
      );
};

export default EventCard;
