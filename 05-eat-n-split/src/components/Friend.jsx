function Friend({ name, image, balance }) {
  let balanceDetails;

  if (balance < 0) {
    balanceDetails = `You Owe ${name} ${Math.abs(balance)}$`;
  } else if (balance > 0) {
    balanceDetails = `${name} owes you ${balance}$ `;
  } else {
    balanceDetails = `You and ${name} are event`;
  }

  return (
    <li>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>{balanceDetails}</p>
      <button className="button">Select</button>
    </li>
  );
}

export default Friend;
