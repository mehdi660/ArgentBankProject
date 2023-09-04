import { useState } from "react";
import React from "react";
import arrow from "../assets/img/arrow-acnt.png";

const Account = ({ state }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <section className="account">
      <div className="account-ctnr">
        <h3 className="account-title">{state.account}</h3>
        <p className="account-balance">{state.balance}</p>
        <p className="account-available">{state.available}</p>
        {/* Ajoutez un gestionnaire d'événements onClick pour basculer la visibilité */}
        <img
          className={`arrow-right ${isCollapsed ? "arrow-down" : ""}`}
          src={arrow}
          alt="voir transaction"
          onClick={toggleCollapse}
        />
      </div>
      {isCollapsed && (
        <div className="collapsible-section">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Prix</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>26/09/2021</td>
                <td>Gallerie Lafayette</td>
                <td>18€</td>
                <td>350€</td>
              </tr>
              <tr>
                <td>26/09/2021</td>
                <td>Gallerie Lafayette</td>
                <td>18€</td>
                <td>350€</td>
              </tr>
              <tr>
                <td>26/09/2021</td>
                <td>Gallerie Lafayette</td>
                <td>18€</td>
                <td>350€</td>
              </tr>
              <tr>
                <td>26/09/2021</td>
                <td>Gallerie Lafayette</td>
                <td>18€</td>
                <td>350€</td>
              </tr>
              <tr>
                <td>26/09/2021</td>
                <td>Gallerie Lafayette</td>
                <td>18€</td>
                <td>350€</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default Account;
