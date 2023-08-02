import React from "react";
import defaultImg from './krabby-patty.jpg'
// import "./EventCard.css";


import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
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
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
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
            <Button variant="text" className="flex items-center gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
    );
  }
  

export default EventCard;