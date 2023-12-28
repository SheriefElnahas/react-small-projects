import { useState } from 'react';
import AddFriend from './components/AddFriend';
import FriendList from './components/FriendList';
import SplitBillForm from './components/SplitBillForm';

import { initialFriends } from './data';

function App() {
  const [friendsList, setFriendsList] = useState(initialFriends);

  function handleAddFriend(newFriendData) {
    setFriendsList((prevFriendList) => [...prevFriendList, newFriendData]);
  }

  return (
    <main className="app">
      <section className="sidebar">
        <FriendList friendsList={friendsList} />
        <AddFriend onAddFriend={handleAddFriend} />
      </section>
      <section>
        <SplitBillForm />
      </section>
    </main>
  );
}

export default App;
