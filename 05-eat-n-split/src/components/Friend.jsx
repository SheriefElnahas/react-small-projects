function Friend({ friend, onSelectFriend, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend?.id;

  const { name, image, balance } = friend;

  let balanceDetails;
  let className;

  if (balance < 0) {
    balanceDetails = `You Owe ${name} ${Math.abs(balance)}$`;
    className = 'red';
  } else if (balance > 0) {
    balanceDetails = `${name} owes you ${balance}$ `;
    className = 'green';
  } else {
    balanceDetails = `You and ${name} are even`;
  }

  function handleClick() {
    onSelectFriend(friend);
  }

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className={className}>{balanceDetails}</p>
      <button onClick={handleClick} className="button">
        {isSelected ? 'Close' : 'Select'}
      </button>
    </li>
  );
}

export default Friend;
