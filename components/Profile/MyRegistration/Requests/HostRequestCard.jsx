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
import {
  PlaylistAdd,
  PlaylistAddCheck,
  Check,
  Close,
} from "@mui/icons-material";
import Alert from "../../../Misc/Alert";
import HostRequestConfirm from "./HostRequestConfirm";
import { CircularProgress } from "@mui/material";
import { format } from "timeago.js";

SwiperCore.use([Pagination]);

const NoEvent = ({ type }) => {
  return (
    <div className="text-gray-400 tracking-wide flex flex-col items-center gap-8 text-2xl mt-5">
      <div className={`ubuntu font-light`}>No {type} Requests</div>
      {type === "Pending" ? (
        <PlaylistAdd
          sx={{
            fontSize: "5rem",
          }}
        />
      ) : (
        <PlaylistAddCheck
          sx={{
            fontSize: "5rem",
          }}
        />
      )}
    </div>
  );
};

const Event = ({ eventType, event, setAlertOpen, isApproved }) => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [accept, setAccept] = useState(false);
  const handleDecline = () => {
    setMsg("Are you sure you want to decline");
    setAccept(false);
    setOpen(true);
  };
  const handleAccept = () => {
    setMsg("Are you sure you want to accept");
    setAccept(true);
    setOpen(true);
  };
  return (
    <div>
      <div className="rounded-md border p-6 text-gray-700 event-card md:min-w-[24rem] md:max-w-[32rem] overflow-hidden">
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
        <div className="flex justify-between py-4 text-gray-500 italic ">
          <Button variant="" size="normal">
            <div className="text-sm lowercase text-gray-400">
              {format(event.created)}
            </div>
          </Button>
          <Button variant="" size="normal">
            <div className="text-sm italic lowercase text-gray-400">
              {event.clientEmail}
            </div>
          </Button>
        </div>
        <div className="">
          {isApproved ? (
            <div className="flex justify-end items-center py-2">
              <Button startIcon={<Check />} variant="outlined" size="normal">
                <div className="capitalize text-lg">Approved</div>
              </Button>
            </div>
          ) : (
            <div className="flex justify-end gap-4 items-center py-4">
              <Button
                variant="contained"
                color="error"
                startIcon={<Close />}
                onClick={handleDecline}
              >
                <div>Decline</div>
              </Button>
              <Button
                variant="contained"
                color="success"
                startIcon={<Check />}
                onClick={handleAccept}
              >
                <div>Accept</div>
              </Button>
            </div>
          )}
        </div>
      </div>
      <HostRequestConfirm
        title={event.eventName}
        msg={msg}
        accept={accept}
        open={open}
        setOpen={setOpen}
        setAlertOpen={setAlertOpen}
        type={eventType}
        uid={event.uid}
        client={event.client}
        guestList={event.guestList}
        clientEmail={event.clientEmail}
      />
    </div>
  );
};

const HostRequestCard = ({ title, id, eventsData }) => {
  const [alertOpen, setAlertOpen] = useState(false);
  if (!eventsData) {
    return (
      <div className="flex h-[40vh] w-full relative justify-center items-center ">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="pb-6">
      <div
        id={id}
        className="px-4 mx-auto max-w-md md:max-w-2xl lg:max-w-full "
      >
        <h3 className="text-xl  font-semibold py-6 text-gray-700 tracking-wider">
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
          {title === "Pending Request" ? (
            eventsData.pending && (eventsData.pending.length > 0) ? (
              eventsData.pending.map((event, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Event
                      eventType={event.type}
                      event={event}
                      setAlertOpen={setAlertOpen}
                      isApproved={false}
                    />
                  </SwiperSlide>
                );
              })
            ) : (
              <NoEvent type="Pending" />
            )
          ) : eventsData.pending && (eventsData.approved.length) > 0 ? (
            eventsData.approved.sort((a, b) => b.created - a.created).map((event, index) => {
              return (
                <SwiperSlide key={index}>
                  <Event
                    eventType={event.type}
                    event={event}
                    setAlertOpen={setAlertOpen}
                    isApproved={true}
                  />
                </SwiperSlide>
              );
            })
          ) : (
            <NoEvent type="Approved" />
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

export default HostRequestCard;
