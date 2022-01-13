import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import Link from 'next/link'

const drawerWidth = 240;

const NavBar = ({ displayName, mobileOpen, setMobileOpen }) => {
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<div className="h-16 w-full bg-blue-500 z-50 px-8 flex items-center justify-between">
      <Link passHref href='/'>
			<div className="text-[2.25rem] font-bold text-gray-200 tracking-wider dancing cursor-pointer logo">
				hevently
			</div>
      </Link>
      <BreadCrumbs name={displayName} />
		</div>
	);
};

export default NavBar;
