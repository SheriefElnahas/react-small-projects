// import { initialFriends } from '../data';
import Friend from './Friend';

function FriendList({ friendsList }) {
  return (
    <section className="sidebar">
      <ul>
        {friendsList.map((friend) => (
          <Friend key={friend.id} {...friend} />
        ))}
      </ul>
    </section>
  );
}

export default FriendList;
