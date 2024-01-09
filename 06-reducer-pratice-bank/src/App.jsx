import { useReducer } from 'react';

const OPEN_ACCOUNT = 'open_account';
const DEPOSIT = 'deposit';
const WITHDRAW = 'withdraw';
const REQUEST_LOAN = 'request_loan';
const PAY_LOAN = 'pay_loan';

const initialState = {
  balance: 0,
  loan: 0,

  // Open - deposit - withdraw - requestLoan - payLoan - closeAccount - closed
  status: 'closed',
};

function reducer(state, action) {
  switch (action.type) {
    case OPEN_ACCOUNT:
      return {
        ...state,
        status: 'open',
        balance: 500,
      };
    case DEPOSIT:
      return {
        ...state,
        status: 'deposit',
        balance: state.balance + 150,
      };
    case WITHDRAW:
      return {
        ...state,
        status: 'withdraw',
        balance: state.balance > 150 ? state.balance - 150 : 0,
      };
    case REQUEST_LOAN:
      return {
        ...state,
        loan: 5000,
        balance: state.loan === 0 ? state.balance + 5000 : state.balance,
      };
    case PAY_LOAN:
      return {
        ...state,
        balance: state.loan !== 0 ? state.balance - 5000 : state.balance,
        loan: 0,
      };
    default:
      throw new Error('action type was not expected');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { balance, loan, status } = state;

  return (
    <main>
      <h1>useReducer Bank Account</h1>
      <p>Balance : {balance}</p>
      <p>Loan : {loan}</p>

      <div className="buttons">
        <button onClick={() => dispatch({ type: OPEN_ACCOUNT })} disabled={status !== 'closed'}>
          Open Account
        </button>
        <button onClick={() => dispatch({ type: DEPOSIT })} disabled={status === 'closed'}>
          Deposit 150
        </button>
        <button onClick={() => dispatch({ type: WITHDRAW })} disabled={status === 'closed'}>
          Withdraw 150
        </button>
        <button onClick={() => dispatch({ type: REQUEST_LOAN })} disabled={status === 'closed' || loan > 0}>
          Request a loan of 5000
        </button>
        <button onClick={() => dispatch({ type: PAY_LOAN })} disabled={status === 'closed' || balance < 5000}>
          Pay Loan
        </button>
        <button disabled={status === 'closed'}>Close Account</button>
      </div>
    </main>
  );
}

export default App;
