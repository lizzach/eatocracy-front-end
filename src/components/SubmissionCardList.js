import React from "react";
import { DialogDefault } from "./Dialog";
import '../styles/SubmissionCard.css';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
   
const SubmissionCardList = ({ isVoteCast, handleVote, restaurantData, isOpen, setOpen, selectedEvent, rankedRestaurants }) => {

  const todaysDate = new Date()
  const eventDate = new Date(selectedEvent.event_date);
  const isPastDate = todaysDate > eventDate;

  const restaurants = isPastDate ? rankedRestaurants : restaurantData

  const ranking = (index) => {
    if (index + 1 === 1) {
      return "WINNER"
    } else if (index + 1 === 2) {
      return "Runner-Up"
    } else if (index + 1 === 3) {
      return "3rd Place"
    } else {
      return `${index + 1}th Place`
    }
  }

  const submissionCards = restaurants.map((restaurant, index) => {
    return (
      <div key={index} className="submission-card">
        <Card className="w-full max-w-[25rem] shadow-lg">
        { isPastDate && <Typography variant="h3" color="pink" className="font-medium results" textGradient>
          <b>{ranking(index)}</b>
        </Typography>}
        <CardHeader floated={false} color="blue-gray" className="max-h-[25rem]">
          <img
            src={restaurant.photo}
            alt="aesthetic food shot"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h12" color="blue-gray" className="font-medium">
              {restaurant.submission_name}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-3 w-3s text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              {restaurant.rating}
            </Typography>
          </div>
          <Typography color="gray">
            <p><b>Genre:</b> {restaurant.genre}</p>
            <p><b>City:</b> {restaurant.city}</p>
            <p><b>Address:</b> {restaurant.location}</p>
            <p><b>Price:</b> {restaurant.price}</p>
            <a href={restaurant.yelp_url}><b>Visit Yelp Page →</b></a>
          </Typography>
        </CardBody>
        <CardFooter className="pt-3">
          {/* <Button disabled={isVoteCast} className="bg-blue-900" size="lg" fullWidth={true} onClick={() => handleVote(restaurant.id)}>
            Vote
          </Button> */}
          <DialogDefault 
            isOpen={isOpen} 
            restaurantID={restaurant.id} 
            setOpen={setOpen} 
            handleVote={handleVote} 
            isVoteCast={isVoteCast}
            isPastDate={isPastDate}>
              Vote
          </DialogDefault>
        </CardFooter>
      </Card>
    </div>
    )
  })

  return (
    <div>
      {submissionCards}
    </div>
    );
  }
  

export default SubmissionCardList;
  