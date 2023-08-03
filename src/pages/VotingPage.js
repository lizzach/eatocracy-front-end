import React, { useState, useEffect } from "react";
import '../styles/VotingPage.css';
import axios from 'axios';
import Navbar from "../components/Navbar/Navbar";
import EventCard from "../components/Card/EventCard";
import SubmissionCard from "../components/SubmissionCard/SubmissionCard";
import ParticipantsButton from "../components/ParticipantsButton";
import SearchBox from "../components/SearchBar";
import CityInputBox from "../components/CityInputBox";

const kBaseUrl = 'http://127.0.0.1:5000'

const VotingPage = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(undefined);
  const [selectedRestaurant, setSelectedRestaurant] = useState([]);
  const [city, setCity] = useState('');
  const [autofillData, setAutofillData] = useState([]);
  const yelpLimit = 50;
  
  // load existing submissions
  useEffect(() => {
    axios
      .get(`${kBaseUrl}/events/10/submissions`)
      .then((res) => setRestaurantData(res.data))
      .catch((err) => console.log(err));
}, []);

  const handleCitySubmit = (city) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${city}&limit=${yelpLimit}`,
      headers: { 
        'Authorization': `Bearer ${API_KEY}`
      }
    };
    axios
      .request(config)
      .then((res) => setAutofillData(res.data.businesses))
      .then(() => console.log(autofillData))
      .catch((err) => console.log(err))
  };

  // submissions from the SearchBar post to the database
  // const handleRestaurantSubmit = (restaurant) => {
  //   axios
  //     .post(`${kBaseUrl}/events/10/submissions`)
  //     .then()
  //     .catch()
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>eatocracy</h1>
      </header>
      <div>
        <Navbar />
      </div>
      <main className="main-event-container">
        <div className="event-card">
          <EventCard />
        </div>
        <div className="button-container">
          <div className="participants-button">
            <ParticipantsButton />
          </div>
          <div className="search-box">
            {autofillData.length > 0 && 
            <SearchBox 
              autofillData={autofillData}
              setAutofillData={setAutofillData}
              setSelectedRestaurant={setSelectedRestaurant}
            />}
          </div>
          <div className="city-input-box">
            <CityInputBox 
              setCity={setCity}
              city={city}
              handleCitySubmit={handleCitySubmit}
              />
          </div>
        </div>
      </main>
      <section className="submission-list">
        <SubmissionCard restaurantData={restaurantData}/>
      </section>
    </div>
  );
}

export default VotingPage;
