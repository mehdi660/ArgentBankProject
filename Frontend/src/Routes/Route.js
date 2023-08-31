import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Error from "../pages/Error";
import SignUp from "../pages/SignUp";

const route = () => {
  const token = localStorage.getItem("token");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {token ? (
            <>
              <Route path="/profile" element={<Profile />} />
            </>
          ) : (
            <Route path="/profile" element={<Navigate to="/error" />} />
          )}
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default route;
