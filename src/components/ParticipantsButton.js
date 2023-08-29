import React from "react";
import '../styles/ParticipantsButton.css';
import { Button } from "@material-tailwind/react";
 
const ParticipantsButton = () => {
  return (
    <div className="flex w-max gap-4 p-button">
      <Button variant="text">See participants</Button>
    </div>
  );
}

export default ParticipantsButton;