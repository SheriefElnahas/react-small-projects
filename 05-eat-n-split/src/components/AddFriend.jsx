import { useState } from 'react';

function AddFriend({ onAddFriend }) {
  const randomNumber = Math.floor(Math.random() * 2000);

  const [formData, setFormData] = useState({ friendName: '', imageURL: `https://i.pravatar.cc/48?u=` });
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button onClick={() => setIsOpen(true)} className="button">
        Add friend
      </button>
    );
  }

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

    const newFriend = {
      id: randomNumber,
      name: formData.friendName,
      image: formData.imageURL + `${randomNumber}`,
      balance: 0,
    };

    // Prevent the user from adding a friend if he didn't provide any user name
    if (formData.friendName.length !== 0) {
      onAddFriend(newFriend);

      // Clear name input and close the form
      setFormData((prevFormData) => ({
        ...prevFormData,
        friendName: '',
      }));

      setIsOpen(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-add-friend">
        <label htmlFor="friend-name">🧑‍🤝‍🧑 Friend Name</label>
        <input type="text" id="friend-name" name="friendName" value={formData.friendName} onChange={handleChange} />

        <label htmlFor="image-url">🎴 Image URL</label>
        <input type="text" id="image-url" name="imageURL" value={formData.imageURL} onChange={handleChange} />

        <button className="button">Add</button>
      </form>
      <button onClick={() => setIsOpen(false)} className="button">
        Close
      </button>
    </>
  );
}

export default AddFriend;
