import React from 'react'
import { Divider, Rating, Button } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import RoomIcon from '@mui/icons-material/Room';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Dot from '@mui/icons-material/CenterFocusStrong';
import Rupee from '@mui/icons-material/CurrencyRupee';
const RegistrationCard = () => {
    return (
        <>
            <div className="w-full">
			<div className="flex rounded-md border bg-gray-50 cursor-pointer transition-all duration-200 lg:items-center lg:flex-row relative h-full p-4 flex-col gap-10 lg:gap-0">
				<div className="flex flex-col lg:w-[70%] w-full gap-2 px-2 order-3 lg:order-1">
					<div className="text-xl text-gray-800 uppercase font-semibold tracking-wide">
						Celebration hall
					</div>
					<div className="text-lg text-gray-600 tracking-wide flex">
						<LocationCityIcon
							sx={{
								fontSize: 20,
								marginRight: '6px',
								marginTop: '4px',
							}}
						/>
						address
					</div>
					<div className="text-md text-gray-600 tracking-wide">
						<RoomIcon
							sx={{
								fontSize: 20,
								marginRight: '6px',
								color: 'blue',
							}}
						/>
						Ranchi
					</div>
					<Divider variant="middle" />
					<div>
						Wedding Type
					</div>

					<div className="flex gap-2 flex-col">
						<div className="text-md text-gray-600 my-2">
							<PeopleAltIcon
								sx={{
									fontSize: 20,
									marginRight: '6px',
								}}
							/>
							50-100
						</div>
						<div className="flex gap-10">
							<div className="text-md text-gray-600 my-2">
								<Dot
									sx={{
										fontSize: 20,
										marginRight: '6px',
										color: 'green',
									}}
								/>
								<Rupee
									sx={{
										fontSize: 20,
									}}
								/>
								1000
							</div>
							<div className="text-md text-gray-600 my-2">
								<Dot
									sx={{
										fontSize: 20,
										marginRight: '6px',
										color: 'red',
									}}
								/>
								<Rupee
									sx={{
										fontSize: 20,
									}}
								/>
								10000
							</div>
						</div>
					</div>
				</div>

				<div className="w-full lg:w-[40%] overflow-hidden flex items-center justify-center order-2">
					<div className="overflow-hidden h-[200px]">
						<img src="/events/bday.jpg" alt="hello" className="object-cover" /> 
					</div>
				</div>
			</div>
		</div>
        </>
    )
}

export default RegistrationCard
