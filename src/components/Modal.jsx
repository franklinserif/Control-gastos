import PropTypes from 'prop-types';
import IconCloseModal from '../assets/img/cerrar.svg';

/**
 * Modal Window component
 * @returns {JSX.Element} <Modal></Modal>
 */
const Modal = ({ setIsModalOpen, setModalAnimation, modalAnimation }) => {
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

  return (
    <div className="modal">
      <button
        className="cerrar-modal"
        // Close the this modal window
        onClick={handleHideModal}
      >
        <img src={IconCloseModal} alt="icono cerrar modal" />
      </button>

      <form className={`formulario ${modalAnimation ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>
      </form>
    </div>
  );
};

Modal.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  setModalAnimation: PropTypes.func.isRequired,
  modalAnimation: PropTypes.bool.isRequired,
};

export default Modal;
