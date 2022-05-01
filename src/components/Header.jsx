import { useContext } from 'react';
import { BudgetContext } from '../context/BudgetProvider';
import { ExpensesContext } from '../context/ExpensesProvider';
import NewBudget from './NewBudget';
import BudgetControl from './BudgetControl';

/**
 * Components Header
 * @returns {JSX.Element} <Header/>
 */
const Header = () => {
  const { isBudgetValid } = useContext(BudgetContext);
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {/** If the the budget is correct, isValid will be true and will render <p></p>
       * it is not, will render <NewBudget component **/}
      {isBudgetValid ? <BudgetControl /> : <NewBudget />}
    </header>
  );
};

export default Header;
