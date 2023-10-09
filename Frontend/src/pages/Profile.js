import React from "react";
import UserName from "../components/UserName";
import { setProfileData } from "../feature/Profile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { makeApiRequest } from "../service/callApi";
import Account from "../components/Account";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
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
        navigate("error");
      }
    };
    fetchUserData();
  }, [dispatch, navigate, token]);

  return (
    <>
      <Header />
      <main id="main-profile">
        <h2 id="greeting">Bonjour, {userData.firstName} 👋</h2>
        <UserName />

        <Account
          info={{
            account: "Compte argent bank (x5685)",
            balance: "12,052.20€",
            available: "Argent disponible",
          }}
        />
        <Account
          info={{
            account: "Compte argent bank (x6879)",
            balance: "65,125.36€",
            available: "Argent disponible",
          }}
        />
        <Account
          info={{
            account: "Compte argent bank (x7862)",
            balance: "47,698.94€",
            available: "Argent disponible",
          }}
        />
      </main>
      <Footer />
    </>
  );
};

export default Profile;
