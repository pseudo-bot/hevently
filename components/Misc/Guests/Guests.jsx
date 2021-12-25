import { TextField, Divider, Button } from '@mui/material';
import { useState, useContext } from 'react';
import { WeddingContext } from '../../../context/Wedding';
import { SentimentDissatisfied as Sad } from '@mui/icons-material';
import GuestTable from './GuestTable';

const Input = ({ label, helper, handleChange, error, value }) => {
	return (
		<TextField
			value={value}
			error={error}
			helperText={error ? helper : null}
			label={label}
			size="normal"
			sx={{
				maxWidth: '30rem',
				width: '100%',
			}}
			onChange={(e) => handleChange(e.target.value)}
		/>
	);
};

const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

const Guests = () => {
	const {
		eventData: { guestList },
		setGuestList,
	} = useContext(WeddingContext);

	const [email, setEmail] = useState('');
	const [guest, setGuest] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [nameError, setNameError] = useState(false);

	const addGuest = () => {
		if (email && guest) {
			if (validateEmail(email)) {
				let list = [...guestList];
				list.push({ email, guest });
				setGuestList(list);
				setEmail('');
				setGuest('');
			} else {
				setEmailError(true);
			}
		} else {
			if (!email) {
				setEmailError(true);
			}
			if (!guest) {
				setNameError(true);
			}
		}
	};

	return (
		<div className="flex flex-col gap-10 w-full px-10 items-center">
			<div className="text-3xl relative montserrat font-semibold text-center text-gradient capitalize md:text-4xl">
				Guest List
			</div>
			<Divider
				sx={{
					width: '100%',
				}}
			/>
			<div className="flex flex-col gap-6 w-full items-center">
				<Input
					label={'Name'}
					helper={'Enter valid name'}
					handleChange={(val) => {
						setGuest(val);
						setNameError(false);
					}}
					value={guest}
					error={nameError}
				/>
				<Input
					label={'Email'}
					helper={'Enter a valid email address'}
					handleChange={(val) => {
						setEmail(val);
						setEmailError(false);
					}}
					value={email}
					error={emailError}
				/>
				<Button variant="contained" onClick={addGuest}>
					<span className="poppins capitalize">Add guest</span>
				</Button>
			</div>

			<Divider
				sx={{
					width: '100%',
				}}
			/>

			<div className="w-full max-w-[700px]">
				{guestList.length ? (
					<GuestTable guestList={guestList} setGuestList={setGuestList} />
				) : (
					<NoGuests />
				)}
			</div>
		</div>
	);
};

export default Guests;

const NoGuests = () => {
	return (
		<div className="text-gray-400 tracking-wide flex flex-col items-center gap-8 text-2xl mt-10">
			<div className={`montserrat`}>No guests invited</div>
			<Sad
				sx={{
					fontSize: '5rem',
				}}
			/>
		</div>
	);
};
