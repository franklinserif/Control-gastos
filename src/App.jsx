import { useContext } from 'react';
import { BudgetContext } from './context/BudgetProvider';
import IconNewExpense from './assets/img/nuevo-gasto.svg';
import Header from './components/Header';

/**
 * Componente App, here will
 * be all the app structure
 * @returns {JSX.Element} <App/>
 */
function App() {
  const { isBudgetValid } = useContext(BudgetContext);

  return (
    <div>
      <Header />

      {/** If the budget had a correct value, isBudget will be true
       * and React will render div.nuevo-gastos element
       */}
      {isBudgetValid && (
        <div className="nuevo-gasto">
          <img src={IconNewExpense} alt="Icono nuevo gasto" />
        </div>
      )}
    </div>
  );
}

export default App;
