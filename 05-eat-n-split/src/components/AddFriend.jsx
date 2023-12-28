import { useState } from 'react';

function AddFriend() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button onClick={() => setIsOpen(true)} className="button">
        Add friend
      </button>
    );
  }

  return (
    <>
      <form className="form-add-friend">
        <label htmlFor="name">🧑‍🤝‍🧑 Friend Name</label>
        <input type="text" />

        <label htmlFor="image">🎴 Image URL</label>
        <input type="text" />

        <button className="button">Add</button>
      </form>
      <button onClick={() => setIsOpen(false)} className="button">
        Close
      </button>
    </>
  );
}

export default AddFriend;
