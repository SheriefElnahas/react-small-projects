// import { initialFriends } from '../data';
import Friend from './Friend';

function FriendList({ friendsList, onSelectFriend, selectedFriend }) {
  return (
    <section className="sidebar">
      <ul>
        {friendsList.map((friend) => {
          return <Friend onSelectFriend={onSelectFriend} key={friend.id} friend={friend} selectedFriend={selectedFriend} />;
        })}
      </ul>
    </section>
  );
}

export default FriendList;
