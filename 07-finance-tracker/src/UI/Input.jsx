import { useState } from 'react';
import './Input.css';

function Input({ type, name }) {
  const [input, setInput] = useState('');

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="form__control">
      <label className="form__label" htmlFor={name}>
        {name[0].toUpperCase() + name.slice(1)}
      </label>
      <input className="form__input" type={type} name={name} id={name} value={input} onChange={handleChange} />
    </div>
  );
}

export default Input;
