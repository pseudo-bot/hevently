import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/Users';
import { LoadingButton } from '@mui/lab';
import { deleteVenue } from '../../config/api/venueAPI';
import { deleteUserVenue } from '../../config/api/userVenueAPI';
import refetchData from '../../utils/refetchData';

export default function AlertDialog({
	title,
	open,
	setOpen,
	venue,
	type,
	uid,
	setAlertOpen,
}) {
	const [loading, setLoading] = useState(false);
	const user = useContext(UserContext);

	const handleClose = () => {
		setOpen(false);
	};

	const handleDelete = async () => {
		try {
			setLoading(true);
			await deleteUserVenue(venue.id);
			await deleteVenue(venue.type, venue.id);
			refetchData(user.uid);
			setLoading(false);
		} catch (err) {
			alert('Cannot delete venue');
		}
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
				<DialogTitle id="alert-dialog-title">
					<div>{'Cancel Event'}</div>
				</DialogTitle>
				<DialogContent>
					<DialogContentText className="poppins" id="alert-dialog-description">
						<div>
							Are you sure you want to Delete{' '}
							<b className="capitalize">{title}?</b>
						</div>
					</DialogContentText>
				</DialogContent>
				<div className="flex justify-end gap-3 p-4">
					<Button
						sx={{
							':hover': {
								backgroundColor: 'rgb(244, 244, 245)',
							},
						}}
						onClick={handleClose}
					>
						<div className="capitalize text-gray-500">Cancel</div>
					</Button>
					<LoadingButton
						variant="contained"
						onClick={handleDelete}
						loading={loading}
						sx={{
							backgroundColor: 'rgb(239, 68, 68)',
							':hover': {
								backgroundColor: 'rgb(220, 38, 38)',
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
