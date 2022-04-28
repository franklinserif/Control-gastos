import { useContext } from 'react';
import { BudgetContext } from '../context/BudgetProvider';

/**
 * BudgetControl components for render controls
 * for control the Budget
 * @returns {JSX.Element} <BudgetControl/>
 */
const BudgetControl = () => {
  const { budget } = useContext(BudgetContext);

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
      </div>
    </div>
  );
};

export default BudgetControl;
