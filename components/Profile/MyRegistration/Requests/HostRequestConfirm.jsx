import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext, useState } from "react";
import { useSWRConfig } from "swr";
import { LoadingButton } from "@mui/lab";
import {
  rejectHostEvent,
  approveHostEvent,
} from "../../../../config/api/hostAPI";
import {
  rejectUserEvent,
  approveUserEvent,
} from "../../../../config/api/eventAPI";
import { UserContext } from "../../../../context/Users";
import refetchData from "../../../../utils/refetchData";
import sendMail from "../../../../config/api/sendMail";
import sendConfirmation from "../../../../config/api/sendConfirmation";

export default function HostRequestConfirm({
  title,
  open,
  setOpen,
  uid,
  msg,
  accept,
  client,
  guestList,
  clientEmail
}) {
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const { mutate } = useSWRConfig();
  const handleClose = () => {
    setOpen(false);
  };
  const handleAccept = async () => {
    setLoading(true);
    const acceptHost = await approveHostEvent(user.uid, uid);
    const acceptUser = await approveUserEvent(uid, client);
    refetchData(user.uid);

    if (acceptHost && acceptUser) {
      setOpen(false);
      if (guestList.length > 0) {
        try {
          const res = await sendMail(guestList);
        } catch (error) {
          alert("Error sending mail");
        }
      }
      try {
        const res2 = await sendConfirmation(clientEmail);
      } catch (error) {
        alert("Error sending mail");
      }
    } else {
      alert("Something went wrong");
    }
    setLoading(false);
  };

  const handleDecline = async () => {
    setLoading(true);
    const rejectHost = await rejectHostEvent(user.uid, uid);
    const rejectUser = await rejectUserEvent(uid, client);
    refetchData(user.uid);
    setLoading(false);

    if (rejectHost && rejectUser) {
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
        <DialogTitle id="alert-dialog-title">
          <span>Cancel Event</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="poppins" id="alert-dialog-description">
            <span>{msg}</span> <b className="capitalize">{title}?</b>
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
