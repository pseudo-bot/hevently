import { Button, Fab } from '@mui/material';
import {
	KeyboardArrowLeft,
	KeyboardArrowRight,
	Done,
} from '@mui/icons-material';

const FormFooter = ({
	nextPosition,
	prevPosition,
	position,
	handleSubmit,
}) => {
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
				{position === 2 ? (
					<Button
						onClick={handleSubmit}
						variant="contained"
						size="medium"
						color="success"
					>
						<Done />
					</Button>
				) : (
					<Button onClick={nextPosition} variant="contained" size="medium">
						<KeyboardArrowRight />
					</Button>
				)}
			</div>
		</>
	);
};

export default FormFooter;
