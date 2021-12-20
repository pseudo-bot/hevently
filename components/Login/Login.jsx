import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Divider } from '@mui/material';
import googleAuth from '../../lib/firebase/googleAuth';
import Alert from '../Misc/Alert';

export default function Modal({ showLogin, setShowLogin }) {
	const [passVis, setPassVis] = useState(false);
	const [visIcon, setVisIcon] = useState(true);
	const handleVisibilty = () => {
		setPassVis((prev) => !prev);
		setVisIcon((prev) => !prev);
	};
	const [open, setOpen] = useState(false);
	const [openSuccess, setOpenSuccess] = useState(false);

	return (
		<>
			<div className="w-screen fixed z-50">
				<Alert
					open={open}
					severity={'error'}
					setOpen={setOpen}
					msg={'Error logging in, please try again'}
				/>
			</div>
			<div className="w-screen fixed z-50">
				<Alert
					open={openSuccess}
					severity={'success'}
					setOpen={setOpenSuccess}
					msg={'Logged in successfully'}
				/>
			</div>
			<div
				className={` ${
					showLogin ? ' opacity-100 ' : ' pointer-events-none'
				} justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-500 px-4 opacity-0`}
			>
				<div className="relative o myw-aut-6 mx-auto max-w-3x bg-bgray-50 bg-gra rounded-2xl">
					<div className="border-0 rounded-2xl shadow-md relative flex flex-col w-full bg-white outline-none focus:outline-none">
						<div className="flex items-center justify-between pt-3 pb-3 rounded-t ">
							<h3 className=" capitalize font-semibold text-lg text-gray-900 tracking-wide z-10 mx-auto">
								Login
							</h3>
							<button
								className="text-gray-900 absolute right-6"
								onClick={() => setShowLogin(false)}
							>
								<CloseIcon fontSize="medium" className="text-gray-700" />
							</button>
						</div>
						<hr className="border-t" />
						<div className="flex flex-col px-8 py-4 space-y-6">
							<div>
								<div className="relative mb-2">
									<label
										for="email"
										className="leading-7 text-sm font-semibold text-gray-600"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="w-full bg-gray-50 rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8"
									/>
								</div>
								<div className="relative mb-4">
									<label
										for="password"
										className="leading-7 text-sm font-semibold text-gray-600"
									>
										Password
									</label>
									<div className="flex justify-between items-center w-full rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
										<input
											type={passVis ? 'text' : 'password'}
											id="password"
											name="password"
											className=" outline-none border-none bg-bgray-50 "
										/>
										<a
											onClick={handleVisibilty}
											className=" hover:cursor-pointer "
										>
											{' '}
											{visIcon ? (
												<VisibilityIcon className=" text-gray-600 " />
											) : (
												<VisibilityOffIcon className=" text-gray-600 " />
											)}
										</a>
									</div>
								</div>
								<button className="w-full text-gray-50 bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-800 rounded text-md mt-2">
									Log in
								</button>
							</div>
							<Divider>
								<span className="font-semibold text-gray-600">OR</span>
							</Divider>
							<button
								className="bg-gray-50 active:bg-gray-100 text-gray-700 px-8 py-2 rounded outline-none focus:outline-none capitalize  shadow hover:shadow-md inline-flex items-center font-medium text-md transition-all duration-500 "
								type="button"
								onClick={async () => {
									try {
										await googleAuth();
										setShowLogin(false);
										setOpenSuccess(true);
									} catch (err) {
										setOpen(true);
									}
								}}
							>
								<div className="flex justify-center w-full gap-4 items-center">
									<div>
										{' '}
										<FcGoogle className=" text-2xl" />
									</div>
									<div>
										<p>Sign in with Google</p>
									</div>
								</div>
							</button>
							<button
								className="bg-blue-600 active:bg-gray-100 text-gray-50 px-8 py-2 rounded outline-none focus:outline-none capitalize shadow hover:shadow-md inline-flex items-center text-md transition-all duration-500  "
								type="button"
								onClick={() => setShowLogin(false)}
							>
								<div className="flex justify-center w-full gap-4 items-center">
									<div>
										{' '}
										<AiFillFacebook className=" text-2xl text-gray-50" />
									</div>
									<div>
										<p>Sign in with Facebook</p>
									</div>
								</div>
							</button>
						</div>
						<p className="text-center text-gray-600 text-xs my-4">
							By siging in you agree to our{' '}
							<a href="" className="text-blue-600 underline">
								terms and conditions
							</a>
						</p>
					</div>
				</div>
			</div>
			{showLogin && (
				<div className="opacity-40 fixed inset-0 z-40 bg-gray-800"></div>
			)}
		</>
	);
}
