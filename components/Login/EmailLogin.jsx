import { useState } from 'react';
import {
	registerUser,
	loginUser,
	signInMethods,
} from '../../config/firebase/authProvider';
import logOut from '../../config/firebase/signOut';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Alert from '../Misc/Alert';
import Tooltip from '@mui/material/Tooltip';
import { validateEmail } from '../../utils/validation';
import createUser from '../../config/api/createUser';
import { auth } from '../../config/firebase/firebase';

const Login = ({
	email,
	password,
	setEmail,
	setPassword,
	register,
	setShowLogin,
	setOpenSuccess,
	setOpenFail,
	accountType,
	setOpenWarn,
	setLoading,
}) => {
	const [confirm, setConfirm] = useState('');
	const [values, setValues] = useState({
		showPassword: false,
		showConfirm: false,
	});

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};
	const handleClickShowConfirm = () => {
		setValues({
			...values,
			showConfirm: !values.showConfirm,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const emailSignIn = async () => {
		setLoading(true);
		try {
			const methods = await signInMethods(email);
			if (methods.includes('password')) {
				await loginUser(email, password);
				const res = await fetch(`/api/user/${auth.currentUser.uid}`);
				const data = await res.json();

				if (
					data &&
					data.user &&
					data.user.accountType === 'user' &&
					accountType === 'admin'
				) {
					await logOut();
					setOpenWarn(true);
					setShowLogin(false);
					return;
				}

				setOpenSuccess(true);
				setShowLogin(false);
			} else {
				setMsg('Email not registered');
				setOpen(true);
			}
		} catch (err) {
			setOpenFail(true);
		}
		setLoading(false);
	};

	const [open, setOpen] = useState(false);
	const [msg, setMsg] = useState('');
	return (
		<div>
			<div className="w-screen fixed z-50">
				<Alert open={open} severity={'warning'} setOpen={setOpen} msg={msg} />
			</div>
			<div className="relative my-2">
				<TextField
					id="outlined-basic"
					label="Email"
					variant="outlined"
					InputProps={{
						autoComplete: 'no',
					}}
					fullWidth
					size="small"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<Tooltip title="Password must be at least 6 characters" arrow>
				<div className="relative my-4">
					<FormControl variant="outlined" fullWidth>
						<InputLabel htmlFor="outlined-adornment-password" size="small">
							Password
						</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							type={values.showPassword ? 'text' : 'password'}
							value={password}
							size="small"
							InputProps={{
								autoComplete: 'no',
							}}
							onChange={(e) => setPassword(e.target.value)}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{values.showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label="Password"
						/>
					</FormControl>
				</div>
			</Tooltip>

			{register ? (
				<Tooltip title="Password must be at least 6 characters" arrow>
					<div className="relative my-4">
						<FormControl variant="outlined" fullWidth>
							<InputLabel htmlFor="outlined-adornment-password" size="small">
								Confirm
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={values.showConfirm ? 'text' : 'password'}
								value={confirm}
								size="small"
								InputProps={{
									autoComplete: 'no',
								}}
								onChange={(e) => setConfirm(e.target.value)}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowConfirm}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{values.showConfirm ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
							/>
						</FormControl>
					</div>
				</Tooltip>
			) : null}

			<button
				className={`w-full text-gray-50 ${
					register
						? 'bg-indigo-600 hover:bg-indigo-800'
						: 'bg-orange-600 hover:bg-orange-800'
				} border-0 py-2 px-6 focus:outline-none rounded text-md mt-2`}
				onClick={async () => {
					setLoading(true);
					try {
						if (validateEmail(email)) {
							if (!register) {
								await emailSignIn();
							} else if (password === confirm) {
								const methods = await signInMethods(email);
								if (methods.length === 0) {
									await registerUser(email, password);
									setOpenSuccess(true);
									setShowLogin(false);
									createUser(accountType);
								} else {
									setMsg('Email already registered. Please login to continue');
									setOpen(true);
								}
							} else {
								setMsg('Password incorrect or does not match');
								setOpen(true);
							}
						} else {
							setMsg('Please enter a valid email');
							setOpen(true);
						}
					} catch (err) {
						setMsg(err.message);
						setOpen(true);
					}
					setLoading(false);
				}}
			>
				{register ? 'Register' : 'Login'}
			</button>
		</div>
	);
};

export default Login;
