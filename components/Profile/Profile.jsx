import { useContext, useState } from "react";
import { UserContext } from "../../context/Users";
import Confirmation from "../Confirmation/Confirmation";

const Profile = () => {
  const user = useContext(UserContext);
  const { email, uid, displayName } = user;
  const [showConfirm, setShowConfirm] = useState(false);
  const handleConfirmation = () => {
    setShowConfirm((prev) => !prev);
  };
  return (
    <>
      <div className="mt-20 ml-20">
        <button
          onClick={handleConfirmation}
          type="button"
          className="border bg-gray-100 text-2xl px-2 py-2"
        >
          hello
        </button>
      </div>
      <Confirmation showConfirm={showConfirm} setShowConfirm={setShowConfirm} />
    </>
  );
};

export default Profile;
