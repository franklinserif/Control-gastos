import PropTypes from 'prop-types';

const Expense = ({ expense }) => {
  const { categories, name, amount } = expense;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{categories}</p>
          <p className="nombre-gasto">{name}</p>
        </div>
      </div>
    </div>
  );
};

Expense.propTypes = {
  expense: PropTypes.object,
};

export default Expense;
