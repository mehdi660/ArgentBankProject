import React from "react";
import UserName from "../components/UserName";
import { setProfileData } from "../feature/Profile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { makeApiRequest } from "../service/callApi";
import Account from "../components/Account";

const Profile = () => {
  const userData = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const token = localStorage.token;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        localStorage.setItem("username", JSON.stringify(userData.firstName)); // Stockez les données de l'utilisateur
        const data = await makeApiRequest("getProfile", token, {});
        dispatch(setProfileData({ data }));
      } catch (error) {
        console.log(error, "error");
        // Rediriger l'utilisateur vers la page de connexion en cas d'erreur
        window.location.href = "/login";
      }
    };
    if (token) {
      fetchUserData();
    } else {
      // Rediriger l'utilisateur vers la page de connexion s'il n'est pas connecté
      window.location.href = "/login";
    }
  }, [dispatch, token, userData.firstName]);

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
