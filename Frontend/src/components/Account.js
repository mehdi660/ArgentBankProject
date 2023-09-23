import React, { useState } from "react";
import arrow from "../assets/img/arrow-acnt.png";
import transactionsData from "../data/transaction";
import { FiEdit2 } from "react-icons/fi";

const Account = ({ info }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openTransactions, setOpenTransactions] = useState([]);

  // fonction pour basculer letat de collapse
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Fonction pour basculer letat dedition de la note
  const toggleCollapsTransaction = (index) => {
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
        <div
          className={`collapsible-content ${
            isCollapsed ? "collapsible-content-open" : ""
          }`}
        >
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
                        className={`details ${
                          openTransactions[index] ? "details-down" : ""
                        }`}
                        src={arrow}
                        alt="Voir les détails"
                        onClick={() => toggleCollapsTransaction(index)}
                      />
                    </td>
                  </tr>
                  {openTransactions[index] && (
                    <tr>
                      <td colSpan="4">
                        <div className="edit-transaction">
                          <div className="transac-container transac">
                            <h4>Type de transaction: </h4>
                            <span className="transac-info">
                              {transaction.type}
                            </span>
                          </div>
                          <div className="transac-container category">
                            <h4>Catégorie: </h4>
                            <span className="transac-info">
                              {transaction.category}
                            </span>
                            <FiEdit2 className="edit-btn" />
                          </div>
                          <div className="transac-container note">
                            <h4 id="note">Note: </h4>
                            <span className="transac-info">
                              {transaction.note}
                            </span>
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
