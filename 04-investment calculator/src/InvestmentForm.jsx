function InvestmentForm({ formData, setFormData }) {
  function handleChange(e) {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value };
    });
  }

  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input type="number" id="initial-investment" name="initialInvestment" onChange={handleChange} value={formData.initialInvestment} />
        </p>

        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input type="number" id="annual-investment" name="annualInvestment" onChange={handleChange} value={formData.annualInvestment} />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input type="number" id="expected-return" name="expectedReturn" onChange={handleChange} value={formData.expectedReturn} />
        </p>

        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" name="duration" onChange={handleChange} value={formData.duration} />
        </p>
      </div>
    </form>
  );
}

export default InvestmentForm;
