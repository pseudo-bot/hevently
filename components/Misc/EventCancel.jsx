import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function AlertDialog({title,open,setOpen}) {
   
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className='poppins' id="alert-dialog-title">
          {"Cancel Event"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText className='poppins' id="alert-dialog-description">
           Are you sure  to cancel <b className='capitalize'>{title}?</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions className='flex justify-between p-4'>
          <Button className=' capitalize bg-gray-200 hover:bg-gray-100 text-gray-500 poppins' onClick={handleClose}>Back</Button>
          <Button className='bg-red-500 hover:bg-red-600 poppins capitalize' variant='contained' onClick={handleClose} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
