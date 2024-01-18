import { useState } from 'react';

import './Signup.css';
import Button from '../../UI/Button';
import Input from '../../UI/Input';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    setEmail('');
    setPassword('');
  }

  return (
    <div className="form__container">
      <h2 className="form__heading">Signup</h2>
      <form onSubmit={handleSubmit} className="form">
        <Input type="text" name="username" value={username} setValue={setUsername} />
        <Input type="email" name="email" value={email} setValue={setEmail} />
        <Input type="password" name="password" value={password} setValue={setPassword} />
        <Button>Signup</Button>
      </form>
    </div>
  );
}

export default Signup;
