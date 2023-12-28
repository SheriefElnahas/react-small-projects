import { calculateInvestmentResults, formatter } from './util/investment';

function Output({ formData }) {
  const annualData = calculateInvestmentResults(formData);
  const firstYearInvest = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment;

  console.log(annualData);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invetement Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((yearRow) => {
          const totalInterest = yearRow.valueEndOfYear - yearRow.annualInvestment * yearRow.year - firstYearInvest;
          const investedCapital = yearRow.valueEndOfYear - totalInterest;

          return (
            <tr key={yearRow.year}>
              <td>{yearRow.year}</td>
              <td>{formatter.format(yearRow.valueEndOfYear)}</td>
              <td>{formatter.format(yearRow.interest)}</td>

              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
        {/* <tr>
          <td>0</td>
          <td>$1000</td>
          <td>$1000</td>
          <td>$1000</td>
          <td>$1000</td>
        </tr> */}
      </tbody>
    </table>
  );
}

export default Output;
