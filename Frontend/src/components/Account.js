import React, { useState } from "react";
import arrow from "../assets/img/arrow-acnt.png";
import transactionsData from "../data/transaction"; // Importez les données
import { FiEdit2 } from "react-icons/fi";

const Account = ({ info }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openTransactions, setOpenTransactions] = useState([]);
  const [isEditingCategory, setIsEditingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleCategoryEdit = (index) => {
    const updatedOpenTransactions = [...openTransactions];
    updatedOpenTransactions[index] = !updatedOpenTransactions[index];
    setOpenTransactions(updatedOpenTransactions);
  };

  const handleEditCategory = () => {
    setIsEditingCategory(!isEditingCategory);
  };

  const handleCategoryChange = (event) => {
    setNewCategory(event.target.value);
  };

  const handleSaveCategory = () => {
    // Effectuez ici la logique de sauvegarde de la catégorie modifiée
    // En utilisant newCategory
    // Puis réinitialisez l'état d'édition
    setIsEditingCategory(false);
    setNewCategory();

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
              {transactionsData.map((transaction, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.price}</td>
                    <td>{transaction.balance}</td>
                    <td className="details-td">
                      <img
                        className="details"
                        src={arrow}
                        alt="Voir les détails"
                        onClick={() => toggleCategoryEdit(index)}
                      />
                    </td>
                  </tr>
                  {openTransactions[index] && (
                    <tr>
                      <td colSpan="4">
                        <div className="edit-transaction">
                          <h4>Type de transaction</h4>
                          <h4>Catégorie</h4>
                          {isEditingCategory ? (
                            <div className="icon">
                              <input
                                type="text"
                                value={newCategory}
                                onChange={handleCategoryChange}
                              />
                              <button onClick={handleSaveCategory}>Enregistrer</button>
                            </div>
                          ) : (
                            <div className="icon">
                              <h4 id="note">Note</h4>
                              <FiEdit2 onClick={handleEditCategory} />
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default Account;
