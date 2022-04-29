import PropTypes from 'prop-types';
import dateFormated from '../Helpers/dateFormat';

const Expense = ({ expense }) => {
  const { categories, name, amount, date } = expense;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{categories}</p>
          <p className="nombre-gasto">{name}</p>
          <div className="fecha-gasto">
            Agregado el:
            <span> {dateFormated(date)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Expense.propTypes = {
  expense: PropTypes.object,
};

export default Expense;
