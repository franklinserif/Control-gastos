import { createContext, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import expensesReducer, { TYPE } from './expensesReducer';

export const ExpensesContext = createContext();

/**
 * it will provide a global state for expenses
 * CRUD operation
 * @returns {JSX.Element}
 */
const ExpensesProvider = ({ children }) => {
  const [expenses, dispatch] = useReducer(expensesReducer, []);
  const [editExpense, setEditExpense] = useState({});

  return (
    <ExpensesContext.Provider
      value={{ expenses, dispatch, TYPE, editExpense, setEditExpense }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

ExpensesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ExpensesProvider;
