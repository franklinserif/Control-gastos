import NewBudget from './NewBudget';

/**
 * Components Header
 * @returns {JSX.Element} <Header/>
 */
const Header = () => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      <NewBudget />
    </header>
  );
};

export default Header;
