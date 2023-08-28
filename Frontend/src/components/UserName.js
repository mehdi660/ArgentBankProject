import React from "react";
import { useState, useEffect } from "react";
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

  //  ? Fonction getprofile pour récuperer les infos de l'utisateur

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

  //  ? Fonction pour edit l'username

  const changeUserName = async (e) => {
    e.preventDefault();

    // Vérifiez si l'username a au moins 5 lettres et ne contient aucun caractère spécial
    if (/^[a-zA-Z]{5,}$/.test(editUserName)) {
      try {
        await makeApiRequest("modifyUserName", token, {
          userName: editUserName,
        });
        dispatch(setEditUserName({ editUserName }));

        // Mettre à jour le message de confirmation en vert
        setConfirmationMessage("Username modifié avec succès !");
        setIsError(false); // Aucune erreur
      } catch (error) {
        console.log(error);
      }
    } else {
      // Mettre à jour le message d'erreur en rouge
      setConfirmationMessage(
        "L'username doit comporter au moins 5 lettres et ne doit pas contenir de caractères spéciaux!"
      );
      setIsError(true); // Il y a une erreur
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
