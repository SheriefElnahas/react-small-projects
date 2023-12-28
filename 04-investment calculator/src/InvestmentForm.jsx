function InvestmentForm() {
  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input type="number" id="initial-investment" name="initial-investment" />
        </p>

        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input type="number" id="annual-investment" name="annual-investment" />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input type="number" id="expected-return" name="expected-return" />
        </p>

        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" name="duration" />
        </p>
      </div>
    </form>
  );
}

export default InvestmentForm;
