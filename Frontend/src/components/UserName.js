import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditUserName } from "../feature/Profile";
import { makeApiRequest } from "../service/callApi";

const UserName = ({ onSubmit }) => {
  const userData = useSelector((state) => state.profile);
  const token = useSelector((state) => state.signIn.token);
  const dispatch = useDispatch();
  console.log(token);

  const [editUserName, setEditUserName] = useState(userData.userName);

  const currentHour = new Date().getHours();

  let greeting;
  if (currentHour >= 5 && currentHour < 18) {
    greeting = "Bonjour";
  } else {
    greeting = "Bonsoir";
  }

  const changeUserName = async (e) => {
    e.preventDefault();

    try {
      await makeApiRequest("editUserName", token, { userName: editUserName });
      dispatch(setEditUserName({ userName: editUserName }));
    } catch (error) {}
  };

  return (
    <>
      <Header />
      <main>
        <h1>
          {greeting}, {editUserName}
        </h1>
      </main>
    </>
  );
};

export default UserName;
