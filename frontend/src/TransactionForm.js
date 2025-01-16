import React, { useState, useEffect } from "react";

function TransactionForm({ addTransaction, editTransaction, transactionToEdit }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (transactionToEdit) {
      setDescription(transactionToEdit.description);
      setAmount(transactionToEdit.amount);
    }
  }, [transactionToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (transactionToEdit) {
      editTransaction({
        ...transactionToEdit,
        description,
        amount: parseFloat(amount),
      });
    } else {
      addTransaction({
        id: Date.now(),
        description,
        amount: parseFloat(amount),
      });
    }
    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <div className="mb-4">
        <label className="block mb-1 font-bold text-lg text-blue-500">Deskripsi</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Contoh: Gaji, Belanja"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-bold text-lg text-blue-500">Jumlah (Rp)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Contoh: 50000"
          required
        />
      </div>
      <button
        type="submit"
        className={`w-full py-3 rounded-lg text-white text-lg font-bold transition-transform transform hover:scale-105 ${
          transactionToEdit ? "bg-yellow-500" : "bg-green-500"
        }`}
      >
        {transactionToEdit ? "Update Transaksi" : "Tambah Transaksi"}
      </button>
    </form>
  );
}

export default TransactionForm;
