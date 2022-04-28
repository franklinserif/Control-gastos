import { useContext } from 'react';
import { BudgetContext } from '../context/BudgetProvider';

/**
 * BudgetControl components for render controls
 * for control the Budget
 * @returns {JSX.Element} <BudgetControl/>
 */
const BudgetControl = () => {
  const { budget } = useContext(BudgetContext);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> ${budget}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
