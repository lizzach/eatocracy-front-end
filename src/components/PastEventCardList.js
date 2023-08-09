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
import { format } from "date-fns";

const PastEventCardList = ({ eventData }) => {

    const formatDate = (eventDate) => {
      const utcDate = new Date(eventDate);
      const formattedDate = format(utcDate, 'EEEE, MMMM d, yyyy');
  
      return formattedDate;
    }
  
    const todaysDate = new Date();

    const pastEventList = eventData.map((event) => {
      const eventDate = new Date(event.event_date);
  
      if (todaysDate > eventDate) {
        return (
          <div key={event.id} className="card-div">
            <Card className="bg-gray-100 mt-6 w-96">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {event.title}
                </Typography>
                <Typography>
                  Event Date: {formatDate(event.event_date)} 
                  <br></br>
                  Voting Deadline: {formatDate(event.voting_deadline)}
                </Typography>
                  {event.description && <Typography variant="h7">
                  {event.description}
                </Typography>}
                </CardBody>
                <CardFooter className="pt-0">
                <Link to={`/events/${event.id}`}>
                  <Button className="bg-blue-900">Event Details</Button>
                </Link>
                </CardFooter>
              </Card>
          </div>
        )}
      });
    
    return (
      <div className="event-list-container">
        <div className="event-list">
          {pastEventList}
        </div>
      </div>
    )
  };
  
  export default PastEventCardList;