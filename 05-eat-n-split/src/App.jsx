import AddFriend from './components/AddFriend';
import FriendList from './components/FriendList';

function App() {
  return (
    <main className="app">
      <section className="sidebar">
        <FriendList />
        <AddFriend />
      </section>
    </main>
  );
}

export default App;
