import { useState } from 'react';
import AddFriend from './components/AddFriend';
import FriendList from './components/FriendList';
import SplitBillForm from './components/SplitBillForm';

import { initialFriends } from './data';

function App() {
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(newFriendData) {
    setFriendsList((prevFriendList) => [...prevFriendList, newFriendData]);
  }

  function handleSelectFriend(friend) {
    setSelectedFriend((selectedFriend) => (selectedFriend && selectedFriend.id === friend.id ? null : friend));
  }

  function HandleSplitBill(billValue) {
    setFriendsList((friends) => {
      return friends.map((friend) => {
        if (friend.id === selectedFriend.id) {
          return { ...friend, balance: friend.balance + billValue };
        } else {
          return friend;
        }
      });
    });

    setSelectedFriend(null);
  }

  return (
    <main className="app">
      <section className="sidebar">
        <FriendList friendsList={friendsList} onSelectFriend={handleSelectFriend} selectedFriend={selectedFriend} />
        <AddFriend onAddFriend={handleAddFriend} />
      </section>
      <section>{selectedFriend && <SplitBillForm selectedFriend={selectedFriend} onHandleSplitBill={HandleSplitBill} />}</section>
    </main>
  );
}

export default App;
