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

const AutofillSearchBar = (props) => {
  const [values, setValues] = useState([]);
  const [restaurantID, setSelectedRestaurant] = useState('');
  const debounceOnChange = useCallback(debounce(onChange, 500), [props.city]);


  function onChange(value) {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${props.city}&term=${value}`,
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
    const chosenRestaurant = selectedOption.split(" - ")[2];
    setSelectedRestaurant(chosenRestaurant);
  }


  const handleSubmit = (selectedRestaurant) => {
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
    const yelpData = {
      submission_name: response.data.name,
      votes_count: 0,
      event_id: props.event_id,
      rating: response.data.rating,
      location: response.data.location.address1,
      yelp_url: response.data.url,
      genre: response.data.categories[0].title
    }
    console.log(yelpData);
    props.handleRestaurantSubmit(yelpData)
  })
  .catch((error) => {
    console.log(error);
  });
};


  return (
    <div className="search-bar-container">
      <label>
      <Input
        list="restaurants-dropdown"
        label="Search Restaurant"
        className="filter-input"
        onChange={e => debounceOnChange(e.target.value)}
        onSelect={handleSelect}
      />
      </label>
      <datalist id="restaurants-dropdown">
        {values.map((value) => {
          return (
            <option 
              value={`${value.name} - ${value.location.address1} - ${value.id}`}
              label={value.name}
              id={value.id}
            ></option>
          )
        })}
      </datalist>
      <Button onClick={handleSubmit}>Add</Button>
    </div>
  );
}

export default AutofillSearchBar;