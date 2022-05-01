import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/** It will contain and provide the Budget context
 * for all the components that need it
 */
export const BudgetContext = createContext();

/**
 * It will provide access to the BudgetContext,
 * budget state value and setBudget Function
 * @returns {JSX.Element} <BudgetProvider></BudgetProvider>
 */
const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState(
    JSON.parse(localStorage.getItem('budget')) || 0
  );
  const [isBudgetValid, setIsBudgetValid] = useState(false);

  useEffect(() => {
    const budgetLS = JSON.parse(localStorage.getItem('budget'));

    if (budgetLS > 0) {
      setIsBudgetValid(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(budget));
  }, [budget]);

  return (
    <BudgetContext.Provider
      value={{
        budget,
        setBudget,
        isBudgetValid,
        setIsBudgetValid,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

BudgetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BudgetProvider;
