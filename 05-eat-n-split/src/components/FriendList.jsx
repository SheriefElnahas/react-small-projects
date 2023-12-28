import { initialFriends } from '../data';
import Friend from './Friend';

console.log(initialFriends);

function FriendList() {
  return (
    <section className="sidebar">
      <ul>
        {initialFriends.map((friend) => (
          <Friend key={friend.id} {...friend} />
        ))}
      </ul>
    </section>
  );
}

export default FriendList;
