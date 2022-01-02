import { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { EventContext } from '../../context/EventContext';
import 'animate.css';
import Alert from '../Misc/Alert';

const EventName = ({ showModal, setShowModal, title }) => {
	const [value, setValue] = useState('');
	const [open, setOpen] = useState(false);
	const { setEventName } = useContext(EventContext);
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleClick = () => {
		if (value.length <= 2) {
			setOpen(true);
		} else {
			setEventName(value);
			setShowModal(false);
		}
	};

	return (
		<>
			{showModal && (
				<div className="opacity-40 fixed inset-0 z-40 bg-gray-800"></div>
			)}
			<div
				className={` ${
					showModal ? ' flex ' : 'hidden'
				} justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none  px-5 animate__animated animate__fadeIn top-16 `}
			>
				<div className="relative o myw-aut-6 mx-auto max-w-3xl bg-bgray-50 rounded-lg -top-16">
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						<div className="flex items-center justify-between p-3 border-b border-solid border-blueGray-200 rounded-t text-center">
							<h3 className="capitalize dancing font-semibold text-3xl tracking-wide z-10 mx-auto">
								{title}
							</h3>
						</div>
						{/*footer*/}
						<div className="flex flex-col px-10 py-8 space-y-6">
							<TextField
								required
								id="outlined-required"
								value={value}
								onChange={handleChange}
								size="small"
								autoComplete="no"
							/>
							<Button
								onClick={handleClick}
								variant="contained"
							>
								<div className="poppins capitalize">Confirm Event Name</div>
							</Button>
						</div>
					</div>
				</div>
			</div>

			<Alert
				open={open}
				severity={'warning'}
				setOpen={setOpen}
				msg={'Please enter atleast 3 characters'}
			/>
		</>
	);
};

export default EventName;
