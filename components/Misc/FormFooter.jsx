import { Button, Fab } from '@mui/material';
import DotsMobileStepper from './Dot';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const FormFooter = ({ nextPosition, prevPosition, position }) => {
	return (
		<>
			<div className="fixed bottom-0 h-16 w-full bg-gray-100 border border-blue-300 z-40"></div>
			<div className="fixed bottom-0 h-16 w-full flex justify-center px-10 gap-10 items-center border-gray-800 z-40">
				<Button
					onClick={prevPosition}
					variant="contained"
					disabled={position === 0}
					size="medium"
				>
					<KeyboardArrowLeft />
				</Button>
				<Button
					onClick={nextPosition}
					variant="contained"
					disabled={position === 3}
					size="medium"
				>
					<KeyboardArrowRight />
				</Button>
			</div>
		</>
	);
};

export default FormFooter;
