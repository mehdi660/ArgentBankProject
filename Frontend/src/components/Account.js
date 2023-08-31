import React from "react";
import arrow from "../assets/img/arrow-acnt.png";

const Account = ({ state }) => {
  return (
    <section className="account">
      <div className="account-ctnr">
        <h3 className="account-title">{state.account}</h3>
        <p className="account-balance">{state.balance}</p>
        <p className="account-available">{state.available}</p>
        <img className="transaction" src={arrow} alt="voir transaction" />
      </div>
    </section>
  );
};

export default Account;
