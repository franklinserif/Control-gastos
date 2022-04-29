import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IconCloseModal from '../assets/img/cerrar.svg';
import Message from './Message';

/**
 * Modal Window component
 * @returns {JSX.Element} <Modal></Modal>
 */
const Modal = ({
  setIsModalOpen,
  setModalAnimation,
  modalAnimation,
  saveExpenses,
}) => {
  const [formState, setFormState] = useState({
    name: '',
    amount: '',
    categories: '',
  });

  const [message, setMessage] = useState('');
  /**
   * It will set all modal state to false
   * it will wait 500ms to clase the modal this
   * will show an cool hide effect in the modal
   * elements
   */
  const handleHideModal = () => {
    setModalAnimation(false);

    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };

  /**
   * It will set the new state with setFormState
   * everytime that user type o change inputs values
   * @param {event} event
   */
  const handleFormChange = (event) => {
    /**
     * set the state with the new Values
     */
    setFormState(
      /**
       * it will return an object with all
       * inputs fields and rewrite the old values
       * with the new ones from inputs
       * @param {Object} prevState
       * @returns {Object} state
       */
      (prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      })
    );
  };

  /**
   *
   * @param {event} event
   */
  const handleSubmit = (event) => {
    /**
     * It will prevent default form behavior
     * when the user submit the form
     */
    event.preventDefault();
    if (Object.values(formState).includes('')) {
      setMessage('Todos los campos son obligatorios');
      setTimeout(() => {
        setMessage('');
      }, 3000);
      return;
    }

    saveExpenses(formState);
  };

  return (
    <div className="modal">
      <button
        className="cerrar-modal"
        // Close the this modal window
        onClick={handleHideModal}
      >
        <img src={IconCloseModal} alt="icono cerrar modal" />
      </button>

      <form
        className={`formulario ${modalAnimation ? 'animar' : 'cerrar'}`}
        onSubmit={handleSubmit}
      >
        <legend>Nuevo Gasto</legend>

        {message && <Message type="error">{message}</Message>}

        <div className="campo">
          <label htmlFor="name">Nombre Gasto</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Añade el nombre del gasto"
            value={formState.name}
            onChange={handleFormChange}
          />
        </div>

        <div className="campo">
          <label htmlFor="amount">Cantidad</label>
          <input
            id="amount"
            name="amount"
            type="number"
            placeholder="Añade la cantidad del gasto ej. 300"
            value={formState.amount}
            onChange={handleFormChange}
          />
        </div>

        <div className="campo">
          <label htmlFor="categories">Categoría</label>
          <select
            name="categories"
            id="categories"
            value={formState.categories}
            onChange={handleFormChange}
          >
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="Entretenimiento">Ocio</option>
            <option value="ocio">Ocio</option>
          </select>
        </div>

        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  );
};

Modal.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  setModalAnimation: PropTypes.func.isRequired,
  modalAnimation: PropTypes.bool.isRequired,
  saveExpenses: PropTypes.func.isRequired,
};

export default Modal;