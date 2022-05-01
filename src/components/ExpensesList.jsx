import PropTypes from 'prop-types';
import Expense from './Expense';

const ExpensesList = ({ expenses, filter, expensesFiltered }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses?.length ? 'Gastos' : 'No hay gastos aun'}</h2>
      {filter
        ? expensesFiltered.map((expense) => (
            <Expense key={expense.id} expense={expense} />
          ))
        : expenses.map((expense) => (
            <Expense key={expense.id} expense={expense} />
          ))}
      {}
    </div>
  );
};

ExpensesList.propTypes = {
  expenses: PropTypes.array,
  filter: PropTypes.string.isRequired,
  expensesFiltered: PropTypes.array,
};

export default ExpensesList;
