import PropTypes from 'prop-types';
import Expense from './Expense';

const ExpensesList = ({ expenses }) => {
  return (
    <div className="listado-gastos contenedor">
      {expenses.length ? 'Gastos' : 'No hay gastos aun'}

      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

ExpensesList.propTypes = {
  expenses: PropTypes.array,
};

export default ExpensesList;
