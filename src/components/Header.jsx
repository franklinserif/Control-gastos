import { useContext } from 'react';
import { BudgetContext } from '../context/BudgetProvider';
import NewBudget from './NewBudget';

/**
 * Components Header
 * @returns {JSX.Element} <Header/>
 */
const Header = () => {
  const { isValidBudget } = useContext(BudgetContext);

  return (
    <header>
      <h1>Planificador de gastos</h1>

      {/** If the the budget is correct, isValid will be true and will render <p></p>
       * it is not, will render <NewBudget component **/}
      {isValidBudget ? <p>Control de presupuesto</p> : <NewBudget />}
    </header>
  );
};

export default Header;
