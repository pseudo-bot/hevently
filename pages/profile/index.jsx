import Profile from "../../components/Profile/Profile";
import { CircularProgress } from "@mui/material";
import { useUser } from "../../lib/useUser";
import Head from "next/head";

const Loading = () => {
  return (
    <div className="flex h-screen w-screen fixed justify-center items-center text-xl text-center">
      <CircularProgress />
    </div>
  );
};

const ProfilePage = () => {
  const { user, ok, error, events, eventError, eventOk } = useUser();

  if (user && !error && ok && events && !eventError && eventOk) {
    return (
      <>
        <Head>
          <title>hevently | Profile</title>
          <meta
            name="description"
            content="profile page of hevently where you can browse your profile and upcoming events you have booked"
          />
        </Head>
        <Profile user={user} events={events} />
      </>
    );
  } else {
    return (
      <>
        <Loading />;
      </>
    );
  }
};

export default ProfilePage;
