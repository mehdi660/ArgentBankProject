import React, { useState } from "react";
import arrow from "../assets/img/arrow-acnt.png";
import transactionsData from "../data/transaction";
import { FiEdit2 } from "react-icons/fi";

const Account = ({ info }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openTransactions, setOpenTransactions] = useState([]);

  // Fonction pour basculer l'état de collapse
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Fonction pour basculer l'état d'édition de la note
  const toggleNoteEdit = (index) => {
    const updatedOpenTransactions = [...openTransactions];
    updatedOpenTransactions[index] = !updatedOpenTransactions[index];
    setOpenTransactions(updatedOpenTransactions);
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
                        onClick={() => toggleNoteEdit(index)}
                      />
                    </td>
                  </tr>
                  {openTransactions[index] && (
                    <tr>
                      <td colSpan="4">
                        <div className="edit-transaction">
                          <h4>Type de transaction: {transaction.type}</h4>
                          <div className="edit-category">
                            <h4>Catégorie : {transaction.category}</h4>
                            <FiEdit2 className="edit-btn" />
                          </div>
                          <div className="edit-note">
                            <h4 id="note">Note : {transaction.note}</h4>
                            <FiEdit2 className="edit-btn" />
                          </div>
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
