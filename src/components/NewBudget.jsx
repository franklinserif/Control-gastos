import { useContext, useState } from 'react';
import { BudgetContext } from '../context/BudgetProvider';
import Message from './Message';

/**
 * New Buget component
 * @returns {JSX.Element} <NewBudget/>
 */
const NewBudget = () => {
  /**
   * Get the budget state value and set Function
   * to handle the global budget and the setIsValidBudget
   * to change between components BudgetContext provide
   * by BudgetProvider component
   */
  const { budget, setBudget, setIsValidBudget } = useContext(BudgetContext);

  // Message State, to show to the user
  const [message, setMessage] = useState('');

  /**
   * It will handle the submit event for NewBudget form
   * and validate if the number is right
   * @param {event} event
   */
  const handleBudget = (event) => {
    // It prevent default behavior
    event.preventDefault();

    //validate if then number isn't positive
    if (budget || budget < 0) {
      setMessage('No es un presupuesto valido');
      return null;
    }

    setIsValidBudget(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label htmlFor="presupuesto">Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade tu presupuesto"
            /**
             * Set input value with the budget state value
             */
            value={budget}
            /**
             * Set the Budget value with the input value
             * everytime the user type something
             */
            onChange={(event) => setBudget(Number(event.target.value))}
          />
        </div>

        <input type="submit" value="Añadir" onClick={handleBudget} />

        {/** It will render only if message state is not null or undefined */}
        {message && <Message type="error">{message}</Message>}
      </form>
    </div>
  );
};

export default NewBudget;
