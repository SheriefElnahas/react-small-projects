function SplitBillForm({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label htmlFor="bill-value">💰 Bill value</label>
      <input type="text" id="bill-value" name="billValue" />

      <label htmlFor="your-expense">🕴️ Your expense</label>
      <input type="text" id="your-expense" name="yourExpense" />

      <label htmlFor="friend-expense">🧑‍🤝‍🧑 {selectedFriend.name} expense</label>
      <input type="text" id="friend-expense" name="friendExpense" />

      <label htmlFor="paying">💵 Who is paying the bill?</label>
      <select id="paying" name="paying">
        <option value="you">You</option>
        <option value="(name)">{selectedFriend.name}</option>
      </select>

      <button className="button">Split bill</button>
    </form>
  );
}

export default SplitBillForm;
