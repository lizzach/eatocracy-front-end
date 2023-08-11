import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export function DialogDefault({isOpen, setOpen, handleVote, isVoteCast, restaurantID }) {
  console.log(isVoteCast);
  console.log(isOpen);
 
  return (
    <>
      <Button disabled={isVoteCast} onClick={() => handleVote(restaurantID)} variant="gradient" className="bg-blue-900" size="lg" fullWidth={true}>
        VOTE
      </Button>
      <Dialog open={isOpen} handler={setOpen}>
        <DialogBody divider>
          Thanks for voting!
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={() => setOpen}>
            <span>You're Welcome</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}