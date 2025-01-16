import React, { useState } from "react";
import TransactionList from "./TransactionList";
import TransactionForm from "./TransactionForm";
import "./App.css"; // Untuk menambahkan CSS kustom

function App() {
  const [transactions, setTransactions] = useState([]);
  const [transactionToEdit, setTransactionToEdit] = useState(null);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const startEditingTransaction = (transaction) => {
    setTransactionToEdit(transaction);
  };

  const editTransaction = (updatedTransaction) => {
    setTransactions(
      transactions.map((t) =>
        t.id === updatedTransaction.id ? updatedTransaction : t
      )
    );
    setTransactionToEdit(null);
  };

  return (
    <div className="app-container bg-cover bg-center text-white p-5">
      <div className="container mx-auto max-w-4xl bg-white p-6 rounded-xl shadow-xl text-gray-800 backdrop-blur-md bg-opacity-80">
        <h1 className="text-5xl font-extrabold mb-5 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-pulse">
        Catatan Keuangan
        </h1>

        <TransactionForm
          addTransaction={addTransaction}
          editTransaction={editTransaction}
          transactionToEdit={transactionToEdit}
        />
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
          startEditingTransaction={startEditingTransaction}
        />
      </div>
    </div>
  );
}

export default App;
