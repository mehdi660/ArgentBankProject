import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import arrow from "../assets/img/arrow-acntw.webp";
import transactionsData from "../data/transaction";

const Account = ({ info }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openTransactions, setOpenTransactions] = useState([]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

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
                          <TransactionDetail
                            title="Type de transaction"
                            content={transaction.type}
                          />
                          <TransactionDetail
                            title="Catégorie"
                            content={transaction.category}
                          />
                          <TransactionDetail
                            title="Note"
                            content={transaction.note}
                          />
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

const TransactionDetail = ({ title, content }) => (
  <div className="transac-container">
    <h4>{title}: </h4>
    <span className="transac-info">{content}</span>
    <FiEdit2 className="edit-btn" />
  </div>
);

export default Account;
