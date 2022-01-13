import { useState } from 'react';
import MyProfile from './MyProfile/MyProfile';
import MyEvents from './MyEvents/MyEvents';
import MyRegistration from './MyRegistration/MyRegistration';
import MyDrawer from './MyDrawer';
import Navbar from './NavBar/NavBar';
import useUser from '../../hooks/useUser';
import Register from './MyRegistration/Register';
import UserRequests from './MyProfile/Requests/UserRequests';
import HostRequests from './MyRegistration/Requests/HostRequests';

// function ResponsiveDrawer(props) {
//   const displayName = props.userData ? props.userData.displayName : "";
//   const photoURL = props.userData ? props.userData.photoURL : "";
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [register, setRegister] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <>
//       <div className="h-screen w-screen fixed profile-bg z-0 opacity-50"></div>
//       <Box sx={{ display: "flex" }}>
//         <CssBaseline />
//         <NavBar
//           mobileOpen={mobileOpen}
//           setMobileOpen={setMobileOpen}
//           displayName={displayName}
//         />
//         <Box
//           component="nav"
//           sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//           aria-label="mailbox folders"
//         >
//           <Drawer
//             container={container}
//             variant="temporary"
//             open={mobileOpen}
//             onClose={handleDrawerToggle}
//             ModalProps={{
//               keepMounted: true,
//             }}
//             sx={{
//               display: { xs: "block", sm: "none" },
//               "& .MuiDrawer-paper": {
//                 boxSizing: "border-box",
//                 width: drawerWidth,
//               },
//             }}
//           >
//             <MyDrawer
//               photoURL={photoURL}
//               displayName={displayName}
//               register={register}
//               setRegister={setRegister}
//             />
//           </Drawer>
//           <Drawer
//             variant="permanent"
//             sx={{
//               display: { xs: "none", sm: "block" },
//               "& .MuiDrawer-paper": {
//                 boxSizing: "border-box",
//                 width: drawerWidth,
//               },
//             }}
//             open
//           >
//             <MyDrawer
//               photoURL={photoURL}
//               displayName={displayName}
//               register={register}
//               setRegister={setRegister}
//             />
//           </Drawer>
//         </Box>
//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             width: { sm: `calc(100% - ${drawerWidth}px)` },
//           }}
//         >
//           <Toolbar />
//           {!register ? (
//             <>
//               <MyProfile />
//               <MyEvents />
//               <UserRequests />
//             </>
//           ) : (
//             <>
//               <Register />
//               <MyRegistration />
//               <HostRequests />
//             </>
//           )}
//         </Box>
//       </Box>
//     </>
//   );
// }

const Drawer = (props) => {
	const displayName = props.userData ? props.userData.displayName : '';
	const photoURL = props.userData ? props.userData.photoURL : '';
	const [register, setRegister] = useState(false);

	return (
		<div className="flex w-screen">
			{/* <div className="h-screen w-screen fixed profile-bg z-0 opacity-50"></div> */}
			<MyDrawer
				photoURL={photoURL}
				displayName={displayName}
				register={register}
				setRegister={setRegister}
			/>
			<div className="w-full h-full flex flex-col gap-4 ml-[16rem]">
				<Navbar 
        displayName={displayName}
        />

        {!register ? (
          <div>
            <MyProfile />
            <MyEvents />
            <UserRequests />
          </div>
        ) : (
          <div>
            <Register />
            <MyRegistration />
            <HostRequests />
          </div>
        )}
			</div>
		</div>
	);
};

const Profile = () => {
	const { user } = useUser();

	return (
		<>
			<Drawer userData={user} />
		</>
	);
};

export default Profile;
