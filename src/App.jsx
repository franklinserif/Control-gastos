import { useContext, useState } from 'react';
import { BudgetContext } from './context/BudgetProvider';
import { ExpensesContext } from './context/ExpensesProvider';
import getRandomId from './Helpers/getRandomId';
import IconNewExpense from './assets/img/nuevo-gasto.svg';
import Header from './components/Header';
import ExpensesList from './components/ExpensesList';
import Modal from './components/Modal';

/**
 * Componente App, here will
 * be all the app structure
 * @returns {JSX.Element} <App/>
 */
function App() {
  const { isBudgetValid } = useContext(BudgetContext);
  const { expenses, dispatch, TYPE } = useContext(ExpensesContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);

  /**
   * it will handle the modal window
   */
  const handleNewExpense = () => {
    setIsModalOpen(true);

    setTimeout(() => {
      setModalAnimation(true);
    }, 500);
  };

  const saveExpenses = (newExpenses) => {
    dispatch({
      type: TYPE.ADD,
      payload: { id: getRandomId(), ...newExpenses },
    });

    setIsModalOpen(false);

    setTimeout(() => {
      setModalAnimation(false);
    }, 500);
  };

  return (
    <div className={isModalOpen ? 'fijar' : ''}>
      <Header />

      {/** If the budget had a correct value, isBudget will be true
       * and React will render div.nuevo-gastos element
       */}
      {isBudgetValid && (
        <>
          <main>
            <ExpensesList expenses={expenses} />
          </main>
          <button className="nuevo-gasto" onClick={handleNewExpense}>
            <img src={IconNewExpense} alt="Icono nuevo gasto" />
          </button>
        </>
      )}

      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          setModalAnimation={setModalAnimation}
          modalAnimation={modalAnimation}
          saveExpenses={saveExpenses}
        />
      )}
    </div>
  );
}

export default App;
