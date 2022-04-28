import IconCloseModal from '../assets/img/cerrar.svg';

const Modal = () => {
  return (
    <div className="modal">
      <button className="cerrar-modal">
        <img src={IconCloseModal} alt="icono cerrar modal" />
      </button>
    </div>
  );
};

export default Modal;
