import PropTypes from 'prop-types';
import IconCloseModal from '../assets/img/cerrar.svg';

/**
 * Modal Window component
 * @returns {JSX.Element} <Modal></Modal>
 */
const Modal = ({ close }) => {
  return (
    <div className="modal">
      <button className="cerrar-modal">
        <img src={IconCloseModal} alt="icono cerrar modal" />
      </button>
    </div>
  );
};

Modal.propTypes = {
  close: PropTypes.func.isRequired,
};

export default Modal;
