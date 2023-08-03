import React, { useState, useEffect } from "react";
import EventCardList from "../components/EventCardList";
import "../styles/Dashboard.css";
import axios from "axios";

const kBaseUrl = 'http://127.0.0.1:5000'

const Dashboard = () => {

  // const [selectedEvent, setSelectedEvent] = useState(undefined);
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
      axios
        .get(`${kBaseUrl}/events/`)
        .then((res) => setEventData(res.data))
        .catch((err) => console.log(err));
  }, []);

  return (
      <div className="dashboard-container">
          <EventCardList eventData={eventData} />
      </div>
  )
};

export default Dashboard;