import { useContext, useState } from "react";
import Confirmation from "../components/Confirmation/Confirmation";

const Test = () => {
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

export default Test;
