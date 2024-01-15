import './Signup.css';

function Signup() {
  return (
    <div className="signup">
      <h2 className='signup__heading'>Signup</h2>
      <form className="signup__form">
        <div className="form__control">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input className="form__input" type="email" id="email" name="email" />
        </div>
        <div className="form__control">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input className="form__input" type="password" id="password" name="password" />
        </div>
        <button className='button'>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
