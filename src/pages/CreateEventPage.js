import React, { useState } from "react";
import EventDialogue from "../components/EventDialogue";
import "../styles/CreateEventPage.css";
import axios from "axios";
import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  const kBaseUrl = 'http://127.0.0.1:5000'

const CreateEventPage = () => {
  const kInitialFormData = {
    title: '',
    creator: '',
    description: '',
    event_date: '',
    voting_deadline: '',
  }

  const [formData, setFormData] = useState(kInitialFormData);
  const [newEventData, setNewEventData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    
    setFormData((prev) => ({
        ...prev, [name]: value
    }));
  };

  const handleNewEventSubmit = (newEventFormData) => {
    axios
      .post(`${kBaseUrl}/events`, newEventFormData)
      .then((res) => setNewEventData(res.data))
      .then(() => setFormData(kInitialFormData))
      .catch((err) => console.log(err));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleNewEventSubmit({ ...formData });
    setIsSubmitted(true);
  };

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
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleFormSubmit}>
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Event Name" onChange={handleChange} name="title" value={formData.title}/>
              <Input size="lg" label="Hosted By" onChange={handleChange} name="creator" value={formData.creator}/>
              <Input size="lg" label="Description" onChange={handleChange} name="description" value={formData.description}/>
              <Input type="date" size="lg" label="Date" onChange={handleChange} name="event_date" value={formData.event_date}/>
              <Input type="date" size="lg" label="Voting Deadline" onChange={handleChange} name="voting_deadline" value={formData.voting_deadline}/>
            </div>
              <Button type="submit" className="bg-blue-900 mt-6" fullWidth>
                Register
              </Button>
          </form>
          {isSubmitted && <EventDialogue isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} newEventData={newEventData}></EventDialogue>}
      </Card>
    </div>
  </div>
  );
}
  

export default CreateEventPage;