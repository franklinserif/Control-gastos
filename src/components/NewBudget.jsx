import { useContext } from 'react';
import { BudgetContext } from '../context/BudgetProvider';

/**
 * New Buget component
 * @returns {JSX.Element} <NewBudget/>
 */
const NewBudget = () => {
  /**
   * Get the budget state value and set Function
   * to handle the global budget state from
   * BudgetContext provide by BudgetProvider component
   */
  const { budget, setBudget } = useContext(BudgetContext);

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label htmlFor="presupuesto">Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Añade tu presupuesto"
          />
        </div>

        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
};

export default NewBudget;
