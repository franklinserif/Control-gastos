import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label htmlFor="expenses-filter">Filtrar gastos</label>
          <select
            name="expensesFilter"
            id="expenses-filter"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          >
            <option value="selection">--- Selecione ----</option>
            <option value="saving">Ahorro</option>
            <option value="food">Comida</option>
            <option value="house">Casa</option>
            <option value="health">Salud</option>
            <option value="expenses">Gastos</option>
            <option value="supscriptions">Suscripciones</option>
            <option value="hobby">Ocio</option>
          </select>
        </div>
      </form>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
