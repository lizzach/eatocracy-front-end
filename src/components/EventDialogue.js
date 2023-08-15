import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import "../styles/EventDialogue.css"
 
const EventDialogue = ({ isSubmitted, setIsSubmitted, newEventData}) => {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      {/* <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button> */}
      <Dialog open={isSubmitted} handler={handleOpen}>
        <DialogHeader>Event Submitted</DialogHeader>
        <DialogBody divider>
          See your event <Link to={`/events/${newEventData.id}`} className="event-link">here</Link>
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={() => setIsSubmitted(false)}>
            <span>Got it</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default EventDialogue;