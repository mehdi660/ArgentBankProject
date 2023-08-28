import React from "react";
import UserName from "../components/UserName";
import { setProfileData } from "../feature/Profile";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { makeApiRequest } from "../service/callApi";

const Profile = () => {
  const userData = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const token = localStorage.token;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await makeApiRequest("getProfile", token, {});
        dispatch(setProfileData({ data }));
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
      <Header />
      <main id="main-profile">
        <h2 id="greeting">Bonjour, {userData.userName} 👋</h2>
        <UserName />
        <Footer />
      </main>
    </>
  );
};

export default Profile;
