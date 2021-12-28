import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import { Button } from '@mui/material';
import Link from 'next/link';

const Confirmation = ({ showConfirm, setShowConfirm }) => {
	const { width, height } = useWindowSize();
	return (
		<>
			{showConfirm && (
				<div className="opacity-40 fixed inset-0 z-50 bg-gray-600">
					<Confetti numberOfPieces={100} width={width} height={height} />
				</div>
			)}
			<div
				className={` ${
					showConfirm ? ' flex ' : 'hidden'
				} justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-5 `}
			>
				<div className="relative mx-auto max-w-3xl bg-bgray-50 rounded-lg">
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						<div className="flex flex-col tick">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 130.2 130.2"
								className="pt-6 pb-4"
							>
								<circle
									className="path circle"
									fill="none"
									stroke="#73AF55"
									strokeWidth="6"
									strokeMiterlimit="10"
									cx="65.1"
									cy="65.1"
									r="62.1"
								/>
								<polyline
									className="path check"
									fill="none"
									stroke="#73AF55"
									strokeWidth="6"
									strokeLinecap="round"
									strokeMiterlimit="10"
									points="100.2,40.2 51.5,88.8 29.8,67.5 "
								/>
							</svg>
							<div className="flex items-center justify-between  rounded-t text-center">
								<h3 className="dancing text-4xl font-bold tracking-wide z-10 mx-auto">
									Congratulations
								</h3>
							</div>
							<div className="text-center capitalize text-sm text-gray-700 px-6 py-4">
								<p>your Booking has been confirmed</p>
								<p>check your email for details</p>
							</div>
							<div className="text-center pt-4 pb-6">
								<Link href="/" passHref>
									<Button
										variant="contained"
										className="poppins capitalize tracking-wider"
									>
										Home
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Confirmation;
