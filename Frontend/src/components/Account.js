import React, { useState } from "react";
import arrow from "../assets/img/arrow-acnt.png";

const Account = ({ info }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCategoryEditVisible, setCategoryEditVisible] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleCategoryEdit = () => {
    setCategoryEditVisible(!isCategoryEditVisible);
  };

  return (
    <section className="account">
      <div className="account-ctnr">
        <h3 className="account-title">{info.account}</h3>
        <p className="account-balance">{info.balance}</p>
        <p className="account-available">{info.available}</p>
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
                <td className="details-td">
                  <img
                    className="details"
                    src={arrow}
                    alt="Voir les détails"
                    onClick={toggleCategoryEdit}
                  />
                </td>
              </tr>
              {isCategoryEditVisible && (
                <div className="edit-transaction">
                  <h4>Type de transaction</h4>
                  <h4>Catégorie</h4>
                  <h4>Note</h4>
                </div>
              )}
              <tr>
                <td>26/09/2021</td>
                <td>Gallerie Lafayette</td>
                <td>18€</td>
                <td>350€</td>
                <td className="details-td"></td>
              </tr>
              {isCategoryEditVisible && (
                <tr>
                  <td colSpan="4">
                    {/* Formulaire de modification de la catégorie */}
                    <input type="text" placeholder="Nouvelle catégorie" />
                    <button>Enregistrer</button>
                  </td>
                </tr>
              )}
              <tr>
                <td>26/09/2021</td>
                <td>Gallerie Lafayette</td>
                <td>18€</td>
                <td>350€</td>
                <td className="details-td"></td>
              </tr>
              {isCategoryEditVisible && (
                <tr>
                  <td colSpan="4">Type de transaction</td>
                </tr>
              )}
              <tr>
                <td>26/09/2021</td>
                <td>Gallerie Lafayette</td>
                <td>18€</td>
                <td>350€</td>
                <td className="details-td"></td>
              </tr>
              {isCategoryEditVisible && (
                <tr>
                  <td colSpan="4">
                    {/* Formulaire de modification de la catégorie */}
                    <input type="text" placeholder="Nouvelle catégorie" />
                    <button>Enregistrer</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default Account;
