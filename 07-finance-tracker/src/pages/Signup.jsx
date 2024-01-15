import { useState } from 'react';

import './Signup.css';
import Button from '../UI/Button';
import Input from '../UI/Input';

function Signup() {
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(input);
  }

  return (
    <div className="signup">
      <h2 className="signup__heading">Signup</h2>
      <form onSubmit={handleSubmit} className="signup__form">
        <Input type="email" name="email" />
        {/* <div className="form__control">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input value={input} onChange={(e) => setInput(e.target.value)} className="form__input" type="test" id="email" name="email" />
        </div> */}
        <div className="form__control">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input className="form__input" type="password" id="password" name="password" />
        </div>

        <Button>Signup</Button>
      </form>
    </div>
  );
}

export default Signup;
