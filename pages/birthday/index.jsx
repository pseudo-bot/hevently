import dbConnect from "../../db/utils/dbConnect.js";
import { BirthdayVenue } from "../../db/model/Venue";
import { EventProvider } from "../../context/EventContext";
import { UserContext } from "../../context/Users";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";
import Event from "../../components/Events/Event";
import EventName from "../../components/Misc/EventName";
import { useState } from "react";
import Head from "next/head";

const BirthdayPage = ({ venues }) => {
  const user = useContext(UserContext);
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <Head>
        <title>hevently | Birthday</title>
        <meta
          name="description"
          content="Through hevently book your venue and celebrate your birthday"
        />
      </Head>
      {user ? (
        <EventProvider>
          <div>
            <Event type="birthday" venues={venues} />
          </div>
          <EventName
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </EventProvider>
      ) : (
        <div className="flex h-screen w-screen fixed justify-center items-center text-xl text-center">
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default BirthdayPage;

export async function getStaticProps() {
  dbConnect();

  let data = await BirthdayVenue.find({});
  let venues = JSON.parse(JSON.stringify(data));

  if (!venues) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      venues,
    },
  };
}
