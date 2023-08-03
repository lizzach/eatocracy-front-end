import { Route, Routes } from "react-router-dom";
import React from "react";
import Dashboard from "./pages/Dashboard";
import VotingPage from "./pages/VotingPage";
import CreateEventPage from "./pages/CreateEventPage";
import PageNotFound from "./pages/PageNotFound";


function App() {
  return (
    <>
      <Routes>
        <Route index element={<VotingPage />} />
        <Route element={<CreateEventPage />} path="newevent"/>
        <Route element={<Dashboard />} path="dashboard"/>
        <Route element={<PageNotFound />} path="*"/>
      </Routes>
    </>
  )
}

export default App;
