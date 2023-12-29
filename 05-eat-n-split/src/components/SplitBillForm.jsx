import { useState } from 'react';

function SplitBillForm({ selectedFriend, onHandleSplitBill }) {
  const [formData, setFormData] = useState({ billValue: '', yourExpense: '', whoIsPaying: 'You' });

  const whoIsPaying = formData.yourExpense ? formData.billValue - formData.yourExpense : formData.billValue;

  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const closeBillCondition = Number(formData.billValue) > 5 && Number(formData.yourExpense) > 5;

    if (closeBillCondition) {
      onHandleSplitBill(whoIsPaying);
      setFormData({ billValue: '', yourExpense: '', whoIsPaying: 'You' });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label htmlFor="bill-value">💰 Bill value</label>
      <input type="number" id="bill-value" name="billValue" onChange={handleChange} value={formData.billValue} />

      <label htmlFor="your-expense">🕴️ Your expense</label>
      <input type="number" id="your-expense" name="yourExpense" onChange={handleChange} value={formData.yourExpense} />

      <label htmlFor="friend-expense">🧑‍🤝‍🧑 {selectedFriend.name} expense</label>
      <input type="number" id="friend-expense" name="whoIsPaying" disabled value={whoIsPaying} />

      <label htmlFor="paying">💵 Who is paying the bill?</label>
      <select id="whoIsPaying" name="whoIsPaying" onChange={handleChange} value={formData.whoIsPaying}>
        <option value="you">You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>

      <button className="button">Split bill</button>
    </form>
  );
}

export default SplitBillForm;
