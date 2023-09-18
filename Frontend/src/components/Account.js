import React, { useState } from "react";
import arrow from "../assets/img/arrow-acnt.png";
import transactionsData from "../data/transaction";
import { FiEdit2 } from "react-icons/fi";

const Account = ({ info }) => {
  // États
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openTransactions, setOpenTransactions] = useState([]);
  const [editedTransactionIndex, setEditedTransactionIndex] = useState(-1); // Index de la transaction en cours d'édition
  const [newNote, setNewNote] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Nourriture"); // Catégorie par défaut
  const [transactionNotes, setTransactionNotes] = useState(
    Array(transactionsData.length).fill("")
  ); // Stockez les notes de chaque transaction
  const [isEditingNote, setIsEditingNote] = useState(false);

  // Fonction pour basculer l'état de collapse
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Fonction pour basculer l'état d'édition de la note
  const toggleNoteEdit = (index) => {
    const updatedOpenTransactions = [...openTransactions];
    updatedOpenTransactions[index] = !updatedOpenTransactions[index];
    setOpenTransactions(updatedOpenTransactions);
    setEditedTransactionIndex(index); // Mettez à jour l'index de la transaction en cours d'édition
  };

  // Fonction pour gérer le début/fin de l'édition de la note
  const handleEditNote = () => {
    setIsEditingNote(!isEditingNote);
  };

  // Fonction pour gérer le changement de la nouvelle note
  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  // Fonction pour gérer la sauvegarde de la note
  const handleSaveNote = () => {
    if (editedTransactionIndex !== -1) {
      // Vérifiez si une transaction est en cours d'édition
      // Effectuez ici la logique de sauvegarde de la note modifiée
      // Utilisez editedTransactionIndex pour savoir quelle transaction est en cours d'édition
      // En utilisant newNote et selectedCategory
      // Puis réinitialisez l'état d'édition et mettez à jour les notes de la transaction
      setIsEditingNote(false);

      const updatedTransactionNotes = [...transactionNotes];
      updatedTransactionNotes[editedTransactionIndex] = newNote;
      setTransactionNotes(updatedTransactionNotes);
    }
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
                          <h4>Type de transaction: Electronique</h4>
                          <h4>Catégorie</h4>
                          <select
                            value={selectedCategory}
                            onChange={(event) =>
                              setSelectedCategory(event.target.value)
                            }
                          >
                            <option value="Nourriture">Nourriture</option>
                            <option value="Vetement">Vêtement</option>
                            <option value="Divertissement">
                              Divertissement
                            </option>
                            <option value="Utilitaire">Utilitaire</option>
                          </select>
                          {isEditingNote && editedTransactionIndex === index ? (
                            <div className="icon">
                              <input
                                type="text"
                                value={newNote}
                                onChange={handleNoteChange}
                              />
                              <button onClick={handleSaveNote}>
                                Enregistrer
                              </button>
                            </div>
                          ) : (
                            <div className="icon">
                              <h4 id="note">
                                Note : {transactionNotes[index]}
                              </h4>
                              <FiEdit2
                                id="edit-note"
                                onClick={handleEditNote}
                              />
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
