import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext, useState } from "react";
import { mutate } from "swr";
import { LoadingButton } from "@mui/lab";
import {
  rejectHostEvent,
  approveHostEvent,
} from "../../../../config/api/hostAPI";
import { rejectUserEvent, approveUserEvent } from "../../../../config/api/eventAPI";
import { UserContext } from "../../../../context/Users";

export default function AlertDialog({
  title,
  open,
  setOpen,
  uid,
  msg,
  accept,
  client,
}) {
    const user = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleAccept = async () => {
    setLoading(true);
    const acceptHost = await approveHostEvent(user.uid, uid);
    const acceptUser = await approveUserEvent(uid, client);
    setLoading(false);

    if (acceptHost && acceptUser) {
      mutate(`api/host/${uid}`);
      mutate(`api/user/${uid}/event`);
      setOpen(false);
    } else {
      alert("Something went wrong");
    }
  };
  const handleDecline = async () => {
    setLoading(true);
    const rejectHost = await rejectHostEvent(user.uid, uid);
    const rejectUser = await rejectUserEvent(uid, client);
    setLoading(false);

    if (rejectHost && rejectUser) {
      mutate(`api/host/${uid}`);
      mutate(`api/user/${uid}/event`);
      setOpen(false);
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="poppins" id="alert-dialog-title">
          {"Cancel Event"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="poppins" id="alert-dialog-description">
            {msg} <b className="capitalize">{title}?</b>
          </DialogContentText>
        </DialogContent>
        <div className="flex justify-end gap-3 p-4">
          <Button
            sx={{
              ":hover": {
                backgroundColor: "rgb(244, 244, 245)",
              },
            }}
            onClick={handleClose}
          >
            <div className=" capitalize text-gray-500">Cancel</div>
          </Button>
          {accept ? (
            <LoadingButton
              variant="contained"
              onClick={handleAccept}
              loading={loading}
              color="success"
            >
              <div className="capitalize">Confirm</div>
            </LoadingButton>
          ) : (
            <LoadingButton
              variant="contained"
              onClick={handleDecline}
              loading={loading}
              color="error"
            >
              <div className="capitalize">Confirm</div>
            </LoadingButton>
          )}
        </div>
      </Dialog>
    </div>
  );
}
