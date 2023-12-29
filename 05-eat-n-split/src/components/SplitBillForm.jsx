import { useState } from 'react';

function SplitBillForm({ selectedFriend, onHandleSplitBill }) {
  const [billValue, setBillValue] = useState('');
  const [yourExpense, setYourExpense] = useState('');
  const [whoIsPaying, setWhoIsPaying] = useState('you');

  const friendExpense = yourExpense ? billValue - yourExpense : billValue;

  function handleSubmit(e) {
    e.preventDefault();
    const closeBillCondition = Number(billValue) > 5 && yourExpense.length !== 0;

    if (closeBillCondition) {
      onHandleSplitBill(whoIsPaying === 'you' ? friendExpense : -yourExpense);

      setBillValue('');
      setYourExpense('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label htmlFor="bill-value">💰 Bill value</label>
      <input type="number" id="bill-value" name="billValue" onChange={(e) => setBillValue(Number(e.target.value))} value={billValue} />

      <label htmlFor="your-expense">🕴️ Your expense</label>
      <input type="number" id="your-expense" name="yourExpense" onChange={(e) => setYourExpense(Number(e.target.value) > billValue ? yourExpense : Number(e.target.value))} value={yourExpense} />

      <label htmlFor="friend-expense">🧑‍🤝‍🧑 {selectedFriend.name} expense</label>
      <input type="number" id="friend-expense" name="friendExpense" disabled value={Math.abs(friendExpense)} />

      <label htmlFor="paying">💵 Who is paying the bill?</label>
      <select id="whoIsPaying" name="whoIsPaying" onChange={(e) => setWhoIsPaying(e.target.value)} value={whoIsPaying}>
        <option value="you">You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>

      <button className="button">Split bill</button>
    </form>
  );
}

export default SplitBillForm;
