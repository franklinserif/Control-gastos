import { useContext } from 'react';
import { ExpensesContext } from '../context/ExpensesProvider';
import PropTypes from 'prop-types';
import dateFormated from '../Helpers/dateFormat';
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

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
  const { setEditExpense } = useContext(ExpensesContext);
  const { categories, name, amount, date } = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditExpense(expense)}>Editar</SwipeAction>
    </LeadingActions>
  );
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.log('eliminar')}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={iconDictionary[categories]} alt={'icon ' + categories} />
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
      </SwipeableListItem>
    </SwipeableList>
  );
};

Expense.propTypes = {
  expense: PropTypes.object,
};

export default Expense;
