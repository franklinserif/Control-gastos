import PropTypes from 'prop-types';
import IconCloseModal from '../assets/img/cerrar.svg';

/**
 * Modal Window component
 * @returns {JSX.Element} <Modal></Modal>
 */
const Modal = ({ setIsModalOpen }) => {
  return (
    <div className="modal">
      <button
        className="cerrar-modal"
        // Close the this modal window
        onClick={() => setIsModalOpen(false)}
      >
        <img src={IconCloseModal} alt="icono cerrar modal" />
      </button>
    </div>
  );
};

Modal.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};

export default Modal;
