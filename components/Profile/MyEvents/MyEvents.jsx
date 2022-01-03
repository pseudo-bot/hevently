import React from 'react'
import EventCard from './EventCard'
const MyEvents = ({eventsData}) => {
    return (
        <div>
            <h3 className="text-3xl text-center font-semibold tracking-wider text-gray-600 py-6">
                My Events
              </h3>
              <EventCard
                title="Upcoming Events"
                id="upcoming"
                eventsData={eventsData}
              />
              <EventCard
                title="Completed Events"
                id="completed"
                eventsData={eventsData}
              />
        </div>
    )
}

export default MyEvents
