import { createContext, useState } from 'react';

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
  const [budget, setBudget] = useState(0);
  return (
    <BudgetContext.Provider value={{ budget, setBudget }}>
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetProvider;
