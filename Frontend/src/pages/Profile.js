import React from "react";
import Header from "../components/Header";

const Profile = () => {
  const currentHour = new Date().getHours();

  let greeting;
  if (currentHour >= 5 && currentHour < 18) {
    greeting = "Bonjour";
  } else {
    greeting = "Bonsoir";
  }

  return (
    <>
      <Header />
      <main>
        <h1>{greeting}, bienvenue</h1>
      </main>
    </>
  );
};

export default Profile;
