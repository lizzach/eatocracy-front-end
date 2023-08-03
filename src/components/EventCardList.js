import React from "react";
import "../styles/EventList.css";
import { Link } from "react-router-dom";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

const EventCardList = (props) => {

    const eventList = props.eventData.map((event) => {
        return (
            <div key={event.id}>
                <Card className="mt-6 w-96">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {event.title}
                        </Typography>
                        <Typography>
                            Event Date: {event.event_date} 
                            <br></br>
                            Voting Deadline: {event.voting_deadline}
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Link to={`/events/${event.id}`}>
                            <Button>Event Details</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        )
    });
    
    return (
        <div className="event-list-container">
            {eventList}
        </div>
    )
};

export default EventCardList;