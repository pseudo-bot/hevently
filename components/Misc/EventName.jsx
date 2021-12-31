import { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { EventContext } from '../../context/EventContext';
import 'animate.css';

const EventName = ({ showModal, setShowModal, title }) => {
	const [value, setValue] = useState('');
  const { setEventName } = useContext(EventContext);
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleClick = () => {
		setEventName(value);
		setShowModal(false);
	};

	return (
		<>
			<div
				className={` ${
					showModal ? ' flex ' : 'hidden'
				} justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  px-5 animate__animated animate__fadeInDown top-16  `}
			>
				<div className="relative o myw-aut-6 mx-auto max-w-3xl bg-bgray-50 rounded-lg -top-16">
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						<div className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t text-center">
							<h3 className="uppercase font-semibold text-[18px] tracking-wide z-10 mx-auto">
								{title}
							</h3>
						</div>
						{/*footer*/}
						<div className="flex flex-col p-12 space-y-6">
							<TextField
								required
								id="outlined-required"
								value={value}
								onChange={handleChange}
								size="small"
							/>
							<Button onClick={handleClick} variant="contained">
								Submit
							</Button>
						</div>
					</div>
				</div>
			</div>
			{showModal && (
				<div className="opacity-40 fixed inset-0 z-40 bg-gray-800"></div>
			)}
		</>
	);
};

export default EventName;
