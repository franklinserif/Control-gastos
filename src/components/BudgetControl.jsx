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
  const { budget, setBudget, setIsBudgetValid } = useContext(BudgetContext);
  const { expenses, dispatch } = useContext(ExpensesContext);
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

  const handleResetApp = () => {
    const result = confirm('Deseas reiniciar el presupuesto y gastos?');

    if (!result) return null;

    setBudget(0);
    dispatch({ type: 'GET', payload: [] });
    setAvailable(0);
    setPercentage(0);
    setIsBudgetValid(false);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage > 100 ? '#D62626' : '#3b82f6',
            textColor: percentage > 100 ? '#D62626' : '#3b82f6',
            trailColor: '#F5F5F5',
          })}
          text={`${percentage.toFixed(2)}%`}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear app
        </button>
        <p>
          <span>Presupuesto: </span> {formatBudget(budget)}
        </p>
        <p className={`${available < 0 ? 'negativo' : ''}`}>
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
