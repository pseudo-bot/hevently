import React from "react";
import RegistrationCard from "./RegistrationCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { PlaylistAdd} from "@mui/icons-material";


SwiperCore.use([Pagination]);

const NoRegistration=()=>{
  return(
    <div className="text-gray-400 tracking-wide flex flex-col items-center gap-8 text-2xl mt-5">
    <div className={`ubuntu font-light`}>No Registrations</div>
      <PlaylistAdd
        sx={{
          fontSize: "5rem",
        }}
      />
  </div>
  );
}

const MyRegistration = () => {
  return (
    <>
      <div className="p-8">
        <h3 className="text-3xl text-center font-semibold tracking-wider text-gray-600 py-6 pb-12">
          My Registrations
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
          <SwiperSlide>
            <RegistrationCard />
          </SwiperSlide>
          <SwiperSlide>
            <RegistrationCard />
          </SwiperSlide>
          <SwiperSlide>
            <RegistrationCard />
          </SwiperSlide>
          <SwiperSlide>
            <RegistrationCard />
          </SwiperSlide>
        </Swiper>
      </div>
     
    </>
  );
};

export default MyRegistration;