import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({
	open,
	handleClose,
	severity,
	msg,
}) {
	return (
		<Stack spacing={2} sx={{ width: '100%' }}>
			<Snackbar
				open={open}
				autoHideDuration={3000}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			>
				<Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
					{msg}
				</Alert>
			</Snackbar>
		</Stack>
	);
}
