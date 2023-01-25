import React, { Component, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Dashboard from "../src/components/Dashboard/Dashboard";
import NewProperty from "../src/components/addNewproperty/addNewproperty";
import ProtectedRoute from "./utils/protectedRoute";

const App = () => {
  return (
    <div id="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addproperty"
            element={
              <ProtectedRoute>
                <NewProperty />
              </ProtectedRoute>
            }
          />

          {/* <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addproperty" element={<NewProperty />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
