import AddFriend from './components/AddFriend';
import FriendList from './components/FriendList';
import SplitBillForm from './components/SplitBillForm';

function App() {
  return (
    <main className="app">
      <section className="sidebar">
        <FriendList />
        <AddFriend />
      </section>
      <section>
        <SplitBillForm />
      </section>
    </main>
  );
}

export default App;
