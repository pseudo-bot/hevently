import Image from 'next/image';
import { useEffect } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Card = ({ name }) => {
	return (
		<div className="">
			<div className="max-w-sm rounded overflow-hidden shadow-lg pb-10">
				<div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-24"></div>
				<div className="flex justify-center w-20 h-20 overflow-hidden relative rounded-full mx-auto z-10 -mt-12">
					<Image
						className="w-full"
						src="/about/user.jpg"
						alt="Sunset in the mountains"
						width="100"
						height="150"
					/>
				</div>
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2 text-center">{name}</div>
					<p className="text-gray-700 text-base">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Voluptatibus quia, nulla! Maiores et perferendis eaque,
						exercitationem praesentium nihil.
					</p>
				</div>
				<div className="px-6 pt-4 pb-2 flex justify-center">
					<a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-800 mr-4">
						<FacebookIcon />
					</a>
					<a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-800 mr-4">
						<InstagramIcon />
					</a>
					<a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-800 mr-4">
						<LinkedInIcon />
					</a>
				</div>
			</div>
		</div>
	);
};

function About() {
	return (
		<>
			<div className="relative h-screen flex items-center justify-center ">
				<div className="cover aboutbg h-full w-full absolute"></div>
				<div className="sm:w-3/4 lg:w-5/12 mx-auto px-2 py-20 mt-20 z-20">
					<h1 className="text-5xl md:text-7xl text-center text-bookmark-blue capitalize font-extrabold dancing text-gray-50">
						About Hevently
					</h1>
					<p className="md:text-[20px] text-center text-bookmark-grey mt-4 py-10 text-gray-50">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
						laudantium. Cumque laudantium vel pariatur corrupti, animi debitis
						obcaecati perspiciatis non hic porro corporis natus deserunt
						voluptates magnam vero provident, exercitationem excepturi cum quos
						nostrum rerum? Laudantium, dolores consectetur suscipit iste porro
						maxime id fugit recusandae! Suscipit repellat libero cumque debitis,
						sunt, saepe perspiciatis vitae rerum odit voluptates sint possimus
						laboriosam quam, veritatis consequatur? Molestias dolorem omnis at.
						Totam ab nihil quisquam aspernatur iusto, laboriosam vitae! Earum,
						hic? Obcaecati perferendis provident voluptate in placeat ducimus
						blanditiis eum? Libero ad nulla in tempora sequi error doloribus.
						Laboriosam placeat in porro temporibus quas.
					</p>
				</div>
			</div>

			<div className="relative px-4 py-10 pb-10 border top-0">
				<div className="dancing text-5xl capitalize md:text-7xl text-gray-700 font-bold text-center mt-8 mb-20">
					Our Team
				</div>
				<div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-20 items-center">
					<Card name="Shivam Kumar" />
					<Card name="Ravish Raj Tiwary" />
					<Card name="Sarang Gupta" />
				</div>
			</div>
		</>
	);
}

export default About;
