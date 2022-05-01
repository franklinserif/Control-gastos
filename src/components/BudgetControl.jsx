import { useContext, useState, useEffect } from 'react';
import { BudgetContext } from '../context/BudgetProvider';
import { ExpensesContext } from '../context/ExpensesProvider';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => Number(expense.amount) + total,
      0
    );
    setSpent(totalSpent);

    setAvailable(budget - totalSpent);

    const totalAvailable = budget - totalSpent;

    const newPercentage = ((budget - totalAvailable) / budget) * 100;

    setPercentage(newPercentage);
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
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: '#3b82f6',
            textColor: '#3b82f6',
            trailColor: '#F5F5F5',
          })}
          text={`${percentage.toFixed(2)}%`}
        />
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
