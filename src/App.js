import { Route, Routes } from "react-router-dom";
import React from "react";
import Dashboard from "./pages/Dashboard";
import EventDetails from "./pages/EventDetails";
import CreateEventPage from "./pages/CreateEventPage";
import PastEvents from "./pages/PastEvents";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImgUpload from "./components/ImgUpload";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Dashboard />} path="/dashboard"/>
        <Route element={<CreateEventPage />} path="/newevent"/>
        <Route element={<EventDetails />} path="/events/:id"/>
        <Route element={<PastEvents />} path="/pastevents"/>
        <Route element={<ImgUpload />} path="/test"/>
        <Route element={<PageNotFound />} path="*"/>
      </Routes>
      <Footer />
    </>
  )
}

export default App;
