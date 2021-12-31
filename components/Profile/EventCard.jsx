import LocationCityIcon from "@mui/icons-material/LocationCity";
import RoomIcon from "@mui/icons-material/Room";
import Ratings from "./Ratings";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import moment from "moment";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const Event = ({ eventType, key, event }) => {
  return (
    <div key={key} className="rounded-md border p-6 text-gray-700 event-card">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <div className="text-lg uppercase font-bold">
            {event.eventName == "" ? eventType : event.eventName}
          </div>
          <div className="text-md capitalize text-gray-500">{eventType}</div>
        </div>
        <div className="flex flex-col gap-2 text-gray-600 font-medium">
          <div>From : {event.startDate}</div>
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
        <div className="flex items-center text-sm">
          {" "}
          <LocationCityIcon
            sx={{
              fontSize: 20,
              marginRight: "6px",
            }}
          />
          {event.venue.address}
        </div>
        <div className="text-sm">
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
      <div className="flex justify-between items-center py-2">
        <div>
          <Ratings />
        </div>
        <div>
          <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

const EventCard = ({title,id, eventsData }) => {
  const upcoming = [];
  const completed= [];
  for (const events in eventsData) {
    const eventarr = eventsData[events];
    if (Array.isArray(eventarr)) {
      eventarr.map((event, index) => {
        console.log(event.endDate);
        if(event.endDate>=moment(new Date()).format("YYYY-MM-DD")){
          upcoming.push(<Event eventType={events} key={index} event={event} />);
        }
        else{
          completed.push(<Event eventType={events} key={index} event={event} />);
        }
      
      });
    }
  }
  return (
    <div className="pb-6">
      <div id={id} className="px-4">
        <h3 className="text-xl font-semibold py-6 text-gray-700 tracking-wider">{title}</h3>
        <Swiper
          className="event-swiper"
          slidesPerView={1}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            720: {
              slidesPerView: 2,
            },
            980: {
              slidesPerView: 3,
            },
          }}
        >
          {title==='Upcoming Events'?upcoming.map((event, index) => {
            return (
              <SwiperSlide key={index}>
                <Event
                  eventType={event.props.eventType}
                  key={index}
                  event={event.props.event}
                />
              </SwiperSlide>
            );
          }):completed.map((event, index) => {
            return (
              <SwiperSlide key={index}>
                <Event
                  eventType={event.props.eventType}
                  key={index}
                  event={event.props.event}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default EventCard;
