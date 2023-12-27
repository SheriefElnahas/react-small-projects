import { useState } from 'react';

import data from './data';
import Person from './Person';

function App() {
  const [people, setPeople] = useState(data);

  function handleClick() {
    setPeople([]);
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today </h3>
        {people.map((person) => (
          <Person {...person} key={person.id} />
        ))}
        <button onClick={handleClick} className="btn btn-block">
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
