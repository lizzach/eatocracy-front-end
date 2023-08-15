import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
 
export function DialogDefault({isOpen, setOpen, handleVote, isVoteCast, restaurantID, isPastDate }) {
 
  return (
    <>
      <Button disabled={isVoteCast || isPastDate} onClick={() => handleVote(restaurantID)} variant="gradient" className="bg-blue-900" size="lg" fullWidth={true}>
        VOTE
      </Button>
      <Dialog open={isOpen} handler={setOpen}>
      <DialogHeader>
          Thanks for voting!
      </DialogHeader>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={() => setOpen}>
            <span>You're Welcome</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}