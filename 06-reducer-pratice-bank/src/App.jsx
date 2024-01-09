import { useReducer } from 'react';
import { produce } from 'immer';

const OPEN_ACCOUNT = 'open_account';
const DEPOSIT = 'deposit';
const WITHDRAW = 'withdraw';
const REQUEST_LOAN = 'request_loan';
const PAY_LOAN = 'pay_loan';
const CLOSE_ACCOUNT = 'close_account';

const initialState = {
  balance: 0,
  loan: 0,

  // Open - deposit - withdraw - requestLoan - payLoan - closeAccount - closed
  status: 'closed',
};

function reducer(state, action) {
  switch (action.type) {
    case OPEN_ACCOUNT:
      state.status = 'open';
      state.balance = 500;
      break;
    case DEPOSIT:
      state.status = 'deposit';
      state.balance = state.balance + 150;
      break;
    case WITHDRAW:
      state.status = 'withdraw';
      state.balance = state.balance > 150 ? state.balance - 150 : 0;
      break;
    case REQUEST_LOAN:
      state.loan = 5000;
      state.balance = state.loan === 0 ? state.balance + 5000 : state.balance;
      break;
    case PAY_LOAN:
      state.balance = state.loan !== 0 ? state.balance - 5000 : state.balance;
      state.loan = 0;
      break;
    case CLOSE_ACCOUNT:
      state.status = 'closed';
      break;
    default:
      throw new Error('action type was not expected');
  }
}

function App() {
  const [state, dispatch] = produce(useReducer(reducer, initialState));

  const { balance, loan, status } = state;

  return (
    <main>
      <h1>useReducer Bank Account</h1>
      <div className="info">
        <p>
          Balance : {balance} {balance > 0 ? '$' : ''}{' '}
        </p>
        <p>
          Loan : {loan} {loan === 0 ? '' : '$'}
        </p>
      </div>

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
        <button onClick={() => dispatch({ type: CLOSE_ACCOUNT })} disabled={status === 'closed' || balance !== 0 || loan !== 0}>
          Close Account
        </button>
      </div>
    </main>
  );
}

export default App;
