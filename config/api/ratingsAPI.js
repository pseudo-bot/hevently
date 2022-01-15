import { auth } from "../firebase/firebase";

export const updateUserRatings = async (uid, venueId, type, ratings) => {
  try {
    const eventRatings = await fetch(
      `/api/user/${auth.currentUser.uid}/ratings`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid, venueId, type, ratings }),
      }
    );
    const res = await eventRatings.json();
    return res.ok;
  } catch (err) {
    alert(err);
    return false;
  }
};