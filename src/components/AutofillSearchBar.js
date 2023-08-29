import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}

const API_KEY = process.env.REACT_APP_API_KEY;

const AutofillSearchBar = ({ selectedEvent, restaurantID, setRestaurantID, event_id, city, handleRestaurantSubmit }) => {

  const [values, setValues] = useState([]);
  const debounceOnChange = useCallback(debounce(onChange, 500), [city]);


  function onChange(value) {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${city}&term=${value}`,
      headers: { 
        'Authorization': `Bearer ${API_KEY}`
      }
    };
    
    axios.request(config)
    .then((response) => {
      setValues(response.data.businesses);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    // This effect will be triggered whenever 'values' changes
    console.log(values); // Log the updated values whenever 'values' changes
  }, [values]);

  const handleSelect = (event) => {
    const selectedOption = event.target.value;
    const chosenRestaurant = selectedOption.split(" -- ")[2];
    console.log(chosenRestaurant);
    setRestaurantID(chosenRestaurant);
  }

  const todaysDate = new Date()
  const eventDate = new Date(selectedEvent.event_date);
  const isPastDate = todaysDate > eventDate;

  return (
    <div className="search-bar-container">
      <label>
      <Input
        list="restaurants-dropdown"
        label="Search Restaurant"
        className="filter-input"
        onChange={e => debounceOnChange(e.target.value)}
        onSelect={handleSelect}
        disabled={isPastDate}
      />
      </label>
      <datalist id="restaurants-dropdown">
        {values.map((value) => {
          return (
            <option 
              value={`${value.name} -- ${value.location.address1} -- ${value.id}`}
              label={value.name}
              id={value.id}
            ></option>
          )
        })}
      </datalist>
    </div>
  );
}

export default AutofillSearchBar;