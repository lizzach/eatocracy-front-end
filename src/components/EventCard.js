import React from "react";
// import "./EventCard.css";


import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
   
const EventCard = (props) => {

    const testEventData =
        {
        id: 1,
        event_name: "Girl's Night (and Cameron)",
        creator: "nicola",
        event_date: "November 10, 2023",
        voting_deadline: "November 3, 2023"
        }
    
      return (
      <Card className="w-full max-w-[48rem] flex-row event-card-container">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="../images/stock-photo-1.jpg"
            alt="food on a table"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="blue" className="mb-4 uppercase">
            EVENT
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {testEventData.event_name}
          </Typography>
          <Typography variant="h8" color="blue" className="mb-4">
            Created by {testEventData.creator}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Comments from the event creator will go here
          </Typography>
          <a href="#" className="inline-block">
          </a>
        </CardBody>
      </Card>
    );
  }
  

export default EventCard;