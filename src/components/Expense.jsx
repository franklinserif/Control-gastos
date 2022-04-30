import PropTypes from 'prop-types';
import dateFormated from '../Helpers/dateFormat';

import IconSaving from '../assets/img/icono_ahorro.svg';
import IconHouse from '../assets/img/icono_casa.svg';
import IconFood from '../assets/img/icono_comida.svg';
import IconExpenses from '../assets/img/icono_gastos.svg';
import IconHobby from '../assets/img/icono_ocio.svg';
import IconHealth from '../assets/img/icono_salud.svg';
import IconSupscriptions from '../assets/img/icono_suscripciones.svg';

/**
 * This is for better handling the icons for every category
 */
const iconDictionary = {
  saving: IconSaving,
  house: IconHouse,
  food: IconFood,
  expenses: IconExpenses,
  hobby: IconHobby,
  health: IconHealth,
  supscriptions: IconSupscriptions,
};

/**
 *  it will return a div with all the expense detail
 * @param {Object} props
 * @param {Object} props.expense
 * @returns
 */
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
      <p className="cantidad-gasto">${amount}</p>
    </div>
  );
};

Expense.propTypes = {
  expense: PropTypes.object,
};

export default Expense;
