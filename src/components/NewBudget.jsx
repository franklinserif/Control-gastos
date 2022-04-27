/**
 * New Buget component
 * @returns {JSX.Element} <NewBudget/>
 */
const NewBudget = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label htmlFor="presupuesto">Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Añade tu presupuesto"
          />
        </div>

        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
};

export default NewBudget;
