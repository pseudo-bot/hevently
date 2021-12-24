import { Button, Fab, Pagination } from '@mui/material';
import ArrowRight from '@mui/icons-material/ArrowRightRounded';
import ArrowLeft from '@mui/icons-material/ArrowLeftRounded';

import DotsMobileStepper from './Dot';

const FormFooter = ({ nextPosition, prevPosition, position }) => {
	return (
		<>
			<div className="fixed bottom-0 h-20 w-full bg-gray-100 border border-blue-300 z-40"></div>
			<div className="fixed bottom-0 h-20 w-full flex justify-center px-10 gap-10 items-center border-gray-800 z-50">
				<Button
					onClick={prevPosition}
					variant="contained"
					disabled={position === 0}
					size="large"
					startIcon={<ArrowLeft />}
				>
					<span className="capitalize text-[12px] sm:text-base">Previous</span>
				</Button>
				<Pagination count={4} page={position + 1} hideNextButton hidePrevButton color='primary' size='small'/>
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
