import React from "react";
import { Input } from "@material-tailwind/react";
 
const CityInputBox = (props) => {

  const handleChange = (event) => {
    const newCity = event.target.value;
    props.setCity(newCity);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCitySubmit(props.city);
    console.log(props.city)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-72 flex-col gap-6">
        <Input 
          variant="outlined" 
          label="Input City"
          value={props.city} 
          onChange={handleChange}/>
      </div> 
    </form>
  );
}

export default CityInputBox;