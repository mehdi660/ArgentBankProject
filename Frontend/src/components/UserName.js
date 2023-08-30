import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditUserName } from "../feature/Profile";
import { setProfileData } from "../feature/Profile";
import { makeApiRequest } from "../service/callApi";

const UserName = ({ onSubmit }) => {
  const userData = useSelector((state) => state.profile);
  const token = localStorage.token;
  const dispatch = useDispatch();

  const [editUserName, setEdittUserName] = useState(userData.userName);

  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Fonction pour gérer la durée d'affichage du message de confirmation
  const displayConfirmationMessage = (message, isError) => {
    setConfirmationMessage(message);
    setIsError(isError);
    // Effacer le message apres 5 seconde
    setTimeout(() => {
      setConfirmationMessage("");
      setIsError(false);
    }, 5000);
  };

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

  const changeUserName = async (e) => {
    e.preventDefault();

    if (/^[a-zA-Z]{5,}$/.test(editUserName)) {
      try {
        await makeApiRequest("modifyUserName", token, {
          userName: editUserName,
        });
        dispatch(setEditUserName({ editUserName }));

        // Utilisez la fonction pour afficher le message de confirmation
        displayConfirmationMessage("Username modifié avec succès !", false);
      } catch (error) {
        // Utilisez la fonction pour afficher le message d'erreur
        displayConfirmationMessage(
          "Une erreur s'est produite lors de la modification de l'username.",
          true
        );
        console.log(error);
      }
    } else {
      // Utilisez la fonction pour afficher le message d'erreur
      displayConfirmationMessage(
        "L'username doit comporter au moins 5 lettres et ne doit pas contenir de caractères spéciaux!",
        true
      );
    }
  };

  return (
    <>
      <h2 id="user-info">Informations utilisateur : </h2>
      <form onSubmit={changeUserName} className="edit-form">
        <div className="edit-formt-ctnr">
          <label htmlFor="userName">Username :</label>
          <input
            type="text"
            id="userName"
            defaultValue={userData.userName}
            onChange={(e) => setEdittUserName(e.target.value)}
            style={{ border: isError ? "1px solid red" : "1px solid #29b99a" }}
          />
        </div>
        <div className="edit-formt-ctnr">
          <label htmlFor="firstName">Prénom :</label>
          <input
            type="text"
            id="firstName"
            defaultValue={userData.firstName}
            readOnly
          />
        </div>
        <div className="edit-formt-ctnr">
          <label htmlFor="lastName">Nom de famille :</label>
          <input
            type="text"
            id="lastName"
            defaultValue={userData.lastName}
            readOnly
          />
        </div>
        <button id="submit-btn" type="submit">
          Modifier l'username
        </button>
        <p style={{ color: isError ? "red" : "green" }}>
          {confirmationMessage}
        </p>
      </form>
    </>
  );
};

export default UserName;
