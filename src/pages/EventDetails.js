import React, { useState, useEffect } from "react";
import "../styles/EventDetails.css";
import axios from 'axios';
import EventCard from "../components/EventCard";
import ParticipantsButton from "../components/ParticipantsButton";
import CityInputBox from "../components/CityInputBox";
import { useParams } from "react-router-dom";
import SubmissionCardList from "../components/SubmissionCardList";
import AutofillSearchBar from "../components/AutofillSearchBar";
import { Button } from "@material-tailwind/react";

const kBaseUrl = 'http://127.0.0.1:5000'
const API_KEY = process.env.REACT_APP_API_KEY;

const EventDetails = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [rankedRestaurants, setRankedRestaurants] = useState([]);
  const [city, setCity] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [restaurantID, setRestaurantID] = useState('');
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [isVoteCast, setIsVoteCast] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const { id } = useParams();

  
  // load existing submissions into restaurantData
  useEffect(() => {
    axios
      .get(`${kBaseUrl}/events/${id}/submissions`)
      .then((res) => setRestaurantData(res.data))
      .catch((err) => console.log(err));
}, [id]);

  // load events data into selectedEvent
  useEffect(() => {
    axios
      .get(`${kBaseUrl}/events/${id}`)
      .then((res) => setSelectedEvent(res.data[0]))
      .catch((err) => console.log(err));
  }, [id]);

  // load ranked submissions for voting results
  useEffect(() => {
    axios
      .get(`${kBaseUrl}/events/${id}/ranked-submissions`)
      .then((res) => setRankedRestaurants(res.data))
      .catch((err) => console.log(err));
}, [id]);


  const handleRestaurantSubmit = (yelpData) => {
    // assign a restaurant to a specific event with event id
    return axios
      .post(
        `${kBaseUrl}/events/${id}/submissions`,
        yelpData
      )
      .then((res) => {
        console.log(`Assigned yelp data to event ${id}. Response: ${res}`);
        // UI change
        setRestaurantData((prev) => [...prev, yelpData]);
      })
      .catch((error) => {
        console.error(`Failed to upload yelp data: ${error}`);
      });
  };

  const handleOpen = () => setOpen(!isOpen);

  const handleVote = (submissionID) => {
    handleOpen();
    setIsVoteCast(true);
    return axios
    .patch(`${kBaseUrl}/events/submissions/${submissionID}`)
    .then((res) => {
      setRestaurantData((prev) => {
        return (
          prev.map((restaurant) => {
            if (submissionID === restaurant.id) {
              console.log("votes_count updated");
              return {...restaurant, votes_count: res.data.votes_count};
            } else {
              return restaurant
            }
          })
        )
      })
    })
  };

  const handleSubmit = (restaurantID) => {
    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${restaurantID}`,
    headers: { 
      'Authorization': `Bearer ${API_KEY}`
    }
  };

  
  axios.request(config)
  .then((response) => {
    console.log(response);
    const yelpData = {
      submission_name: response.data.name,
      votes_count: 0,
      event_id: id,
      rating: response.data.rating,
      location: response.data.location.address1,
      yelp_url: response.data.url,
      genre: response.data.categories[0].title,
      photo: response.data.photos[0],
      city: response.data.location.city,
      price: response.data.price
    }
    handleRestaurantSubmit(yelpData)
  })
  .catch((error) => {
    console.log(error);
  });
};

const todaysDate = new Date()
const eventDate = new Date(selectedEvent.event_date);
const isPastDate = todaysDate > eventDate;

  return (
    <div className="App">
      <main className="main-event-container">
        <div className="event-card">
          <EventCard selectedEvent={selectedEvent} baseUrl={kBaseUrl}/>
        </div>
        <div className="button-container">
          <div className="search-box">
            <div className="search-box-input">
              {isSubmitted && <AutofillSearchBar selectedEvent={selectedEvent} restaurantID={restaurantID} setRestaurantID={setRestaurantID} event_id={id} city={city} handleRestaurantSubmit={handleRestaurantSubmit}/>}
            </div>
            {isSubmitted && <Button onClick={() => handleSubmit(restaurantID)}>SUBMIT</Button>}
          </div>
          <div className="city-input-box">
            <CityInputBox 
              setCity={setCity}
              city={city}
              setIsSubmitted={setIsSubmitted}
              isPastDate={isPastDate}
              />
          </div>
          <div className="participants-button">
            <ParticipantsButton />
          </div>
        </div>
      </main>
      <section className="submission-list">
        <div className="submission-cards">
          <SubmissionCardList 
            isVoteCast={isVoteCast} 
            handleVote={handleVote} 
            restaurantData={restaurantData}
            setOpen={setOpen}
            isOpen={isOpen}
            selectedEvent={selectedEvent}
            rankedRestaurants={rankedRestaurants}
            />
        </div>
      </section>
    </div>
  );
}

export default EventDetails;