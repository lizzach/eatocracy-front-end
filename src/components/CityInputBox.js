import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import "../styles/CityInputBox.css"
 
const CityInputBox = (props) => {

  const handleChange = (event) => {
    const newCity = event.target.value;
    props.setCity(newCity);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.city) {
      props.setIsSubmitted(true);
    }
    // props.handleCitySubmit(props.city);
    console.log(props.city)
  };

  return (
    <form className="city-input-container">
      <div className="flex w-72 flex-col gap-6 min-w-[350px] city-input-box">
        <Input 
          variant="outlined" 
          label="Input City, State"
          value={props.city} 
          onChange={handleChange}
          disabled={props.isPastDate}/>
      </div>
      <div className="city-submit-btn">
        <Button disabled={props.isPastDate} onClick={handleSubmit}>SUBMIT</Button>
      </div>
    </form>
  );
}

export default CityInputBox;