import dbConnect from "../../db/utils/dbConnect.js";
import { SocialVenue } from "../../db/model/Venue";
import { EventProvider } from "../../context/EventContext";
import { UserContext } from "../../context/Users";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";
import Event from "../../components/Events/Event";
import EventName from "../../components/Misc/EventName";
import { useState } from "react";
import Head from "next/head";

const SocialPage = ({ venues }) => {
  const user = useContext(UserContext);
  const [showModal, setShowModal] = useState(true);
  return (
    <>
    <Head>
        <title>hevently | Social Gathering</title>
        <meta
          name="description"
          content="Through hevently book your venue for social gathering events like Bar Crawl, Masquerade Party, Dance, Ceremonies, Galas etc."
        />
      </Head>

      {user ? (
        <EventProvider>
          <div>
            <Event venues={venues} type={"social"} />
          </div>
        </EventProvider>
      ) : (
        <div className="flex h-screen w-screen fixed justify-center items-center text-xl text-center">
          <CircularProgress />
        </div>
      )}
      <EventName
        showModal={showModal}
        setShowModal={setShowModal}
        title="Enter Event Name"
      />
    </>
  );
};

export default SocialPage;

export async function getStaticProps() {
  dbConnect();

  let data = await SocialVenue.find({});
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
