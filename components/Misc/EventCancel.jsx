import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteEvent } from '../../config/api/eventAPI';
import { useContext } from 'react';
import { UserContext } from '../../context/Users';
import { useSWRConfig } from 'swr';

export default function AlertDialog({ title, open, setOpen, type, uid }) {
	const user = useContext(UserContext);
	const { mutate } = useSWRConfig();

	const handleClose = () => {
		setOpen(false);
	};

	const handleDelete = async () => {
		const res = await deleteEvent(uid, type);
		mutate(
			`/api/${process.env.NEXT_PUBLIC_CREATE_USER_KEY}/user/${user.uid}/event`
		);
		if (res) {
			setOpen(false);
		} else {
			console.log('Event not deleted');
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
					{'Cancel Event'}
				</DialogTitle>
				<DialogContent>
					<DialogContentText className="poppins" id="alert-dialog-description">
						Are you sure you want to cancel{' '}
						<b className="capitalize">{title}?</b>
					</DialogContentText>
				</DialogContent>
				<DialogActions className="flex justify-between p-4">
					<Button
						className=" capitalize bg-gray-200 hover:bg-gray-100 text-gray-500 poppins"
						onClick={handleClose}
					>
						Cancel
					</Button>
					<Button
						className="bg-red-500 hover:bg-red-600 poppins capitalize"
						variant="contained"
						onClick={handleDelete}
						autoFocus
					>
						Confirm
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
