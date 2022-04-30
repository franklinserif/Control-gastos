import { useContext, useState, useEffect } from 'react';
import { BudgetContext } from '../context/BudgetProvider';
import { ExpensesContext } from '../context/ExpensesProvider';

/**
 * BudgetControl components for render controls
 * for control the Budget
 * @returns {JSX.Element} <BudgetControl/>
 */
const BudgetControl = () => {
  const { budget } = useContext(BudgetContext);
  const { expenses } = useContext(ExpensesContext);
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => Number(expense.amount) + total,
      0
    );
    setSpent(totalSpent);

    setAvailable(budget - totalSpent);
  }, [expenses]);

  const formatBudget = (budget) => {
    return budget.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> {formatBudget(budget)}
        </p>
        <p>
          <span>Disponible: </span> {formatBudget(available)}
        </p>
        <p>
          <span>Gastado: </span> {formatBudget(spent)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
