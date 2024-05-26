import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Sidebar.css'; // Import the CSS file

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-container">
      <div className={`sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark ${isOpen ? 'open' : 'closed'}`}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">PLSE</span>
        </a>

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Charts
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Table
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              Report
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              Forecast
            </a>
          </li>
        </ul>
        <hr />
        <div className="d-flex align-items-center text-white">
          <div className="me-2" style={{ background: 'white', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="https://github.com/mdo.png" alt="User" width="32" height="32" className="rounded-circle" />
          </div>
          <div>
            <p className="mb-0">Sourabh Rawat</p>
            <small>user</small>
          </div>
        </div>
        <button className="btn btn-outline-light mt-3">Logout</button>
      </div>
      <div className="hamburger-icon" onClick={toggleSidebar}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
};

export default Sidebar;