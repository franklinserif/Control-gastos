import PropTypes from 'prop-types';

/**
 * Message component, will render a message
 * in the browser, depent of the type
 * error | success
 * @param {Object} props
 * @param {string} props.type
 * @param {string} props.children
 * @returns
 */
const Message = ({ type, children }) => {
  return <div className={`alerta ${type}`}>{children}</div>;
};

Message.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Message;
