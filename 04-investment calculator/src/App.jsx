import { useState } from 'react';

import Header from './Header';
import InvestmentForm from './InvestmentForm';
import Output from './Output';

function App() {
  const [formData, setFormData] = useState({ initialInvestment: 15000, annualInvestment: 900, expectedReturn: 5.5, duration: 5 });

  return (
    <>
      <Header />
      <main>
        <InvestmentForm formData={formData} setFormData={setFormData} />
        <Output formData={formData} />
      </main>
    </>
  );
}

export default App;
