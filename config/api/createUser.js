import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const createUser = async (accountType) => {
  const contentType = "application/json";

   onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const res = await fetch(`/api/createuser`, {
          method: "POST",
          headers: {
            Accept: contentType,
            "Content-Type": contentType,
          },
          body: JSON.stringify({ user: { ...user, accountType } }),
        });
        const data = await res.json();
      } catch (error) {
        alert(error);
        alert("Authentication failed. Cannot add user to database");
      }
    }
  });
};

export default createUser;
