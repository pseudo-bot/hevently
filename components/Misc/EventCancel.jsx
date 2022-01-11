import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteEvent } from "../../config/api/eventAPI";
import { useContext, useState } from "react";
import { UserContext } from "../../context/Users";
import { LoadingButton } from "@mui/lab";
import refetchData from "../../utils/refetchData";

export default function AlertDialog({
  title,
  open,
  setOpen,
  type,
  uid,
  setAlertOpen,
}) {
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    
    setLoading(true);
    const res = await deleteEvent(uid, type);
    refetchData(user.uid);
    setLoading(false);

    if (res) {
      setOpen(false);
      setAlertOpen(true);
    } else {
      alert("Event not deleted");
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
          <div>{"Cancel Event"}</div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div>
              Are you sure you want to cancel{" "}
              <b className="capitalize">{title}?</b>
            </div>
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
          <LoadingButton
            variant="contained"
            onClick={handleDelete}
            loading={loading}
            sx={{
              backgroundColor: "rgb(239, 68, 68)",
              ":hover": {
                backgroundColor: "rgb(220, 38, 38)",
              },
            }}
          >
            <div className="capitalize">Confirm</div>
          </LoadingButton>
        </div>
      </Dialog>
    </div>
  );
}
