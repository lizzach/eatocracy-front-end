import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./EventCard.css";


import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
   
const EventCard = (props) => {

  const [selectedEvent, setSelectedEvent] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${props.baseUrl}/events/${props.eventID}`)
      .then((res) => setSelectedEvent(res.data[0]))
      .catch((err) => console.log(err));
  }, [props.eventID, props.kBaseUrl]);
    
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
            {selectedEvent.title}
          </Typography>
          <Typography variant="h8" color="blue" className="mb-4">
            Created by {selectedEvent.creator}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            {selectedEvent.description}
          </Typography>
          <br></br>
        </CardBody>
      </Card>
    );
  }
  

export default EventCard;