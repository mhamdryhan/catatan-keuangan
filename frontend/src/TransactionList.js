import React from "react";

function TransactionList({ transactions, deleteTransaction, startEditingTransaction }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">📜 Daftar Transaksi</h2>
      {transactions.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada transaksi.</p>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex justify-between items-center bg-gradient-to-r from-blue-100 to-green-100 p-3 mb-2 rounded-lg shadow hover:scale-105 transform transition"
            >
              <div>
                <p className="font-semibold text-blue-700">{transaction.description}</p>
                <p className="text-gray-600">Rp {transaction.amount.toLocaleString()}</p>
              </div>
              <div className="flex gap-3">
                <button
                  className="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500"
                  onClick={() => startEditingTransaction(transaction)}
                >
                  ✏️ Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  🗑️ Hapus
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
