

import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left-nav">
        <button className="nav-button">Summary</button>
        <button className="nav-button">Balance Sheet</button>
        <button className="nav-button">Income Statement</button>
        <button className="nav-button">Cashflow</button>
        <button className="nav-button">+</button>
      </div>
      <div className="right-nav">
        <button className="nav-button">Normal View</button>
        <button className="nav-button">Growth View</button>
        <input type="date"  className="nav-input" placeholder="Period From" />
        <input type="date"  className="nav-input" placeholder="Period To" />
      </div>
    </div>
  );
};

export default NavBar;
