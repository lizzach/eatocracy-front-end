import { useState } from "react";
import React from "react";
import axios from "axios";
import "../styles/CreateEventPage.css";
import "../styles/Home.css";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
const kBaseUrl = 'http://127.0.0.1:5000'

const SimpleRegistrationForm = () => {

  const kInitialFormData = {
    username: '',
    email: '',
    password: '',
  }

  const [formData, setFormData] = useState(kInitialFormData);
  const [newUserData, setNewUserData] = useState([]);


  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    
    setFormData((prev) => ({
        ...prev, [name]: value
    }));
  };

  const handleNewUserSubmit = (newUserFormData) => {
    axios
      .post(`${kBaseUrl}/register`, newUserFormData)
      .then((res) => setNewUserData(res.data))
      .then(() => setFormData(kInitialFormData))
      .catch((err) => console.log(err));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleNewUserSubmit({ ...formData });
  };


  return (
  <div className="new-event-container">
    <div className="new-event-form">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleFormSubmit}>
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Username" name="username" id="username" onChange={handleChange} value={formData.username}/>
            <Input size="lg" label="Email" name="email" id="email" onChange={handleChange} value={formData.email}/>
            <Input type="password" size="lg" label="Password" name="password" id="password" onChange={handleChange} value={formData.password}/>
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="bg-blue-900 mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  </div>
  );
}

export default SimpleRegistrationForm;