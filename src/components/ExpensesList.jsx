import PropTypes from 'prop-types';

const ExpensesList = ({ expenses }) => {
  return (
    <div className="listado-gastos contenedor">
      {expenses.length ? 'Gastos' : 'No hay gastos aun'}
    </div>
  );
};

ExpensesList.propTypes = {
  expenses: PropTypes.array,
};

export default ExpensesList;
