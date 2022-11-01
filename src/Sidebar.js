import React from 'react';
import "./styles/Sidebar.css";
import AgroEaseLogo from "./images/agro_ease_logo.png"

export const Sidebar = () => {
  return (
    <>
    <nav>
        <div className="logo-name">
          <div className="logo-name" style={{ height: 60 }}>
            <img src={AgroEaseLogo} alt="AgroEase Logo" id='agroease_logo' />
          </div>
        </div>
        <div className="menu-items">
          <ul className="nav-links">
            <li>
              <a href="/broker/brokerDashbord/brokerDashboard.html">
                <i className="uil uil-estate" />
                <span className="link-name">Dahsboard</span>
              </a>
            </li>
            <li>
              <a href="/pages/brokerclientpage/brokerclient.html">
                <i className="uil uil-users-alt" />
                <span className="link-name">My Client</span>
              </a>
            </li>
            <li>
              <a href="/broker/brokerReferral/brokerReferral.html">
                <i className="uil uil-elipsis-double-v-alt" />
                <span className="link-name">Refferal</span>
              </a>
            </li>
          </ul>
          <ul className="logout-mode">
            <li>
              <a href="">
                <i className="uil uil-signout" />
                <span className="link-name">Logout</span>
              </a>
            </li>
            {/* <li className="mode">
              <a href="#">
                <i className="uil uil-moon" />
                <span className="link-name">Dark Mode</span>
              </a>
              <div className="mode-toggle">
                <span className="switch" />
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  )
}
