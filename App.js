import './App.css';
import BalanceExpense from './components/BalanceExpense';
import NewTransaction from './components/NewTransaction';
import TransactionHistory from './components/TransactionHistory';
import MyContext from './context/MyContext';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
    <MyContext>
      <div className='left'>
        <BalanceExpense/>
      <NewTransaction/>

      </div>
      <div className='Right'>
      <TransactionHistory/>
      </div>
      
      
    </MyContext>

    </div>
  );
}

export default App;
