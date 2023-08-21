import React from "react";
import Header from "../components/Header";
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

  // const getProfile = async () => {
  //   try {
  //     await makeApiRequest("getProfile", token, {});
  //     // dispatch(setProfileData({ data }));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await makeApiRequest("getProfile", token, {});

        dispatch(setProfileData({ data }));
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchData();
  }, []);

  const changeUserName = async (e) => {
    e.preventDefault();

    try {
      await makeApiRequest("modifyUserName", token, { userName: editUserName });
      dispatch(setEditUserName({ editUserName }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <form onSubmit={changeUserName}>
        <div className="form-edit">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            defaultValue={editUserName}
            onChange={(e) => setEdittUserName(e.target.value)}
          />
        </div>
        <div className="form-edit">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            defaultValue={userData.firstName}
            readOnly
          />
        </div>
        <div className="form-edit">
          <label htmlFor="lastName">Nom de famille</label>
          <input
            type="text"
            id="lastName"
            defaultValue={userData.lastName}
            readOnly
          />
        </div>
        <button type="submit">Modifier</button>
      </form>
    </>
  );
};

export default UserName;
