import { Button, Fab } from '@mui/material';
import ArrowRight from '@mui/icons-material/ArrowRightRounded';
import ArrowLeft from '@mui/icons-material/ArrowLeftRounded';

import DotsMobileStepper from './Dot';

const FormFooter = ({ nextPosition, prevPosition, position }) => {
	return (
		<>
			<div className="fixed bottom-0 h-20 md:w-3/5 w-full form-footer border border-blue-300 z-40"></div>
			<div
				className={`${
					position === 2 || position === 3 ? 'block' : 'hidden'
				} fixed bottom-24 z-40`}
			>
				<Fab variant="extended" color="primary">
					<div className="capitalize">Skip this section</div>
				</Fab>
			</div>
			<div className="fixed bottom-0 h-20 md:w-3/5 w-full flex justify-between px-10 gap-4 items-center border-gray-800 z-50">
				<Button
					onClick={prevPosition}
					variant="contained"
					disabled={position === 0}
					size="large"
					startIcon={<ArrowLeft />}
				>
					<span className="capitalize text-[12px] sm:text-base">Previous</span>
				</Button>
				<DotsMobileStepper activeStep={position} />
				<Button
					onClick={nextPosition}
					variant="contained"
					disabled={position === 3}
					size="large"
					endIcon={<ArrowRight />}
				>
					<span className="capitalize text-[12px] sm:text-base">Next</span>
				</Button>
			</div>
		</>
	);
};

export default FormFooter;
