function InvestmentForm({ formData, setFormData }) {
  function handleChange(e) {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: Number(e.target.value) };
    });
  }

  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input type="number" id="initial-investment" name="initialInvestment" onChange={handleChange} value={formData.initialInvestment} min={100} />
        </p>

        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input type="number" id="annual-investment" name="annualInvestment" onChange={handleChange} value={formData.annualInvestment} min={100} />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input type="number" id="expected-return" name="expectedReturn" onChange={handleChange} value={formData.expectedReturn} min={0.1} />
        </p>

        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" name="duration" onChange={handleChange} value={formData.duration} min={1} />
        </p>
      </div>
    </form>
  );
}

export default InvestmentForm;
