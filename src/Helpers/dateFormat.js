/**
 * It will format a date to format 15 de noviembre del 22
 * @params {Object} date
 * @return {string} date
 */
export default function dateFormated(date = Date.now()) {
  // Date format 15 de noviembre del 22
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };

  const dateFormated = new Date(date);

  return dateFormated.toLocaleDateString('es-Es', options);
}
