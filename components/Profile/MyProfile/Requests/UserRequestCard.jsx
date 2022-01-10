import LocationCityIcon from "@mui/icons-material/LocationCity";
import RoomIcon from "@mui/icons-material/Room";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import EventCancel from "../../../Misc/EventCancel";
import { PlaylistAdd } from "@mui/icons-material";
import Alert from "../../../Misc/Alert";

SwiperCore.use([Pagination]);

const NoEvent = () => {
  return (
    <div className="text-gray-400 tracking-wide flex flex-col items-center gap-8 text-2xl mt-5">
      <div className={`ubuntu font-light`}>No Pending Requests</div>
      <PlaylistAdd
        sx={{
          fontSize: "5rem",
        }}
      />
    </div>
  );
};

const Event = ({ eventType, event, setAlertOpen }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <div className="rounded-md border p-6 text-gray-700 event-card md:min-w-[30rem] md:max-w-[40rem] overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <div className="text-lg uppercase font-bold">
              {event.eventName == "" ? eventType : event.eventName}
            </div>
            <div className="text-md capitalize text-gray-500">{eventType}</div>
          </div>
          <div className="flex  flex-col gap-2 text-gray-600 font-medium">
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

        <div className="flex justify-between items-center pt-4 pb-2">
          <Button variant="" size="normal">
            <div className="text-sm italic lowercase text-gray-400">
              1 hr ago
            </div>
          </Button>
          <Button variant="outlined" size="normal">
            <div className="capitalize text-lg">pending</div>
          </Button>
        </div>
      </div>
      <EventCancel
        title={event.eventName}
        open={open}
        setOpen={setOpen}
        setAlertOpen={setAlertOpen}
        type={eventType}
        uid={event.uid}
      />
    </div>
  );
};

const UserRequestCard = ({ title, id, eventsData }) => {
  const [alertOpen, setAlertOpen] = useState(false);
  return (
    <div className="pb-6">
      <div
        id={id}
        className="px-4 mx-auto max-w-md md:max-w-2xl lg:max-w-full "
      >
        <h3 className="text-xl font-semibold py-6 text-gray-700 tracking-wider">
          {title}
        </h3>
        <Swiper
          className="event-swiper"
          slidesPerView={1}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            900: {
              slidesPerView: 2,
            },
            1250: {
              slidesPerView: 3,
            },
          }}
        >
          {eventsData.pending.length > 0 ? (
            eventsData.pending.map((event, index) => {
              return (
                <SwiperSlide className="h-1/2" key={index}>
                  <Event
                    eventType={event.type}
                    event={event}
                    disabled={false}
                    isRating={false}
                    setAlertOpen={setAlertOpen}
                  />
                </SwiperSlide>
              );
            })
          ) : (
            <NoEvent />
          )}
        </Swiper>
      </div>
      <Alert
        open={alertOpen}
        severity={"success"}
        setOpen={setAlertOpen}
        msg={"Event Cancelled Successfully"}
      />
    </div>
  );
};

export default UserRequestCard;
