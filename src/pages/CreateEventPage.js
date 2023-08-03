import React from "react";
import "../styles/CreateEventPage.css"
import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
const CreateEventPage = () => {
    return (
        <div className="new-event-container">
          <div className="new-event-form">
            <Card color="transparent" shadow={false}>
              <Typography variant="h4" color="blue-gray">
                Event Information
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Register a new event.
              </Typography>
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                  <Input size="lg" label="Event Name" />
                  <Input size="lg" label="Description" />
                  <Input type="date" size="lg" label="Date"/>
                  <Input type="date" size="lg" label="Voting Deadline"/>
                </div>
                  <Button className="bg-blue-900 mt-6" fullWidth>
                    Register
                  </Button>
              </form>
          </Card>
        </div>
      </div>
    );
  }
  

export default CreateEventPage;