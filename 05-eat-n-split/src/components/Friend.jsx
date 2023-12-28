function Friend({ name, image, balance }) {
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

  return (
    <li>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p className={className}>{balanceDetails}</p>
      <button className="button">Select</button>
    </li>
  );
}

export default Friend;
