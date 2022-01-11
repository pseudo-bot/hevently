import 'animate.css';
import Image from 'next/image'
import logo from '../../public/logo.png'

function Cover() {
	return (
		<div>
			<div className="cover h-[48rem] w-screen absolute parallax"></div>
			<div className="relative h-[48rem] flex items-center justify-center flex-col top-2">
				<div className='relative max-h-[28rem] max-w-[28rem] w-full h-full '>
					<Image src={logo} layout='fill' alt="site-logo" objectFit='cover' className='cursor-pointer transition-all duration-500 logo-img'/>
				</div>
				<TagLine>you plan | we organize</TagLine>
				<div className='relative w-full h-[7.2rem]'>
				</div>
				{/* <div className="absolute bottom-4 cursor-pointer">
					<div className="scroll"></div>
				</div> */}
			</div>
		</div>
	);
}

export default Cover;

const TagLine = ({ children }) => {
	return <div className='text-gray-50 sm:text-5xl text-4xl font-semibold capitalize animate__animated animate__fadeIn relative ubuntu tracking-wide cover-heading'>{children}</div>;
};
