import { useContext, useState } from 'react';
import { BudgetContext } from './context/BudgetProvider';
import IconNewExpense from './assets/img/nuevo-gasto.svg';
import Header from './components/Header';
import Modal from './components/Modal';

/**
 * Componente App, here will
 * be all the app structure
 * @returns {JSX.Element} <App/>
 */
function App() {
  const { isBudgetValid } = useContext(BudgetContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * it will handle the modal window
   */
  const handleNewExpense = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Header />

      {/** If the budget had a correct value, isBudget will be true
       * and React will render div.nuevo-gastos element
       */}
      {isBudgetValid && (
        <button className="nuevo-gasto" onClick={handleNewExpense}>
          <img src={IconNewExpense} alt="Icono nuevo gasto" />
        </button>
      )}

      {isModalOpen && <Modal />}
    </div>
  );
}

export default App;
