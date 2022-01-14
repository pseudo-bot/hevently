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
import {
  PlaylistAdd,
  PeopleAlt,
} from "@mui/icons-material";
import Alert from "../../../Misc/Alert";
import GuestDialog from "../../../Misc/GuestDialog";
import { format } from "timeago.js";
import Loader from "../../../Misc/Loader";
import { CSSTransition } from "react-transition-group";

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

const Event = ({ eventType, event, setAlertOpen, setOpenGuest, setGuests }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div>
        <div className="rounded-md border p-6 text-gray-700 event-card md:min-w-[24rem] md:max-w-[32rem] overflow-hidden">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <div className="text-lg uppercase font-bold">
                {event.eventName == "" ? eventType : event.eventName}
              </div>
              <div className="text-md capitalize text-gray-500">
                {eventType}
              </div>
            </div>
            <div className="flex  flex-col gap-2 text-gray-600 font-medium">
              <div>From : {event.startDate}</div>
              <div>To : {event.endDate}</div>
            </div>
          </div>
          <div className="py-2 text-gray-600 font-medium capitalize">
            <PeopleAlt />{" "}
            <span
              onClick={() => {
                if (event.guestList.length > 0) {
                  setGuests(event.guestList);
                  setOpenGuest(true);
                } else {
                  return;
                }
              }}
              className="hover:underline cursor-pointer"
            >
              Guests : {event.guestList.length}
            </span>
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
              <div className="text-sm lowercase text-gray-400">
                {format(event.created)}
              </div>
            </Button>
            {event.status === "pending" ? (
              <Button variant="outlined" size="normal">
                <div className="capitalize text-lg">Pending</div>
              </Button>
            ) : (
              <Button variant="outlined" size="normal" color="error">
                <div className="capitalize text-lg">Rejected</div>
              </Button>
            )}
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
    </>
  );
};

const UserRequestCard = ({ title, id, eventsData }) => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [openGuest, setOpenGuest] = useState(false);
  const [guests, setGuests] = useState([]);

  if (!eventsData) {
    return (
      <div className="flex h-[40vh] w-full relative justify-center items-center ">
        <Loader />
      </div>
    );
  }
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
            1200: {
              slidesPerView: 2,
            },
            1450: {
              slidesPerView: 3,
            },
          }}
        >
          {eventsData.pending && eventsData.pending.length > 0 ? (
            eventsData.pending
              .sort((a, b) => b.created - a.created)
              .map((event, index) => {
                return (
                  <SwiperSlide className="h-1/2" key={index}>
                    <Event
                      eventType={event.type}
                      event={event}
                      disabled={false}
                      isRating={false}
                      setAlertOpen={setAlertOpen}
                      setOpenGuest={setOpenGuest}
                      setGuests={setGuests}
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
      <CSSTransition
        unmountOnExit
        in={openGuest}
        timeout={300}
        classNames="modal"
      >
        <GuestDialog guests={guests} setShowModal={setOpenGuest} title={"Guests"} />
      </CSSTransition>
    </div>
  );
};

export default UserRequestCard;
