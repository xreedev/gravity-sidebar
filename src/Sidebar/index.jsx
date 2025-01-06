import React, { useState } from "react";
import "./style.css";

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const[sideBar, setSideBar] = useState(true);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleSidebar = () => {
    setSideBar(!sideBar);
  }

  const options = [
    { name: "Home", icon: "fas fa-home" },
    { name: "Events", icon: "fa fa-envelope-open" },
    { name: "Communities", icon: "fa fa-users" },
    { name: "Calender", icon: "fa fa-window-maximize" },
    { name: "Scheduled", icon: "fa fa-briefcase" },
    { name: "Create", icon: "fa fa-star" },
  ];

  return (
    <div className={`sidebar-container ${sideBar?'sidebar-container-collapsed':'sidebar-container-expanded'}`}>
    <div className="sidebar">
      <div className="sidebar-header mobile-nav">
        <i class="fa fa-bars header-icon" aria-hidden="true" onClick={handleSidebar}></i>
        {(!sideBar)?<span className="no-sidebar mobile-nav">BoardFlex</span>:''}
      </div>
        <div className="sidebar-list">
          <ul className="sidebar-content">
            {options.map((option) => (
              <li
                key={option.name} 
                className={`sidebar-item ${
                activeItem === option.name ? "active-sidebar-item" : "inactive-sidebar-item"
                }`}
                onClick={() => handleItemClick(option.name)} 
              >
              <i className={`${option.icon} sidebar-list-icon `}  aria-hidden="true"></i>
               {(!sideBar)?<span className="no-sidebar">{option.name}</span>:null}
             </li>
        ))}
          </ul>
        </div>
      </div>
      <div className="sidebar-footer mobile-nav">
        <div className="sidebar-footer-icons">
          {(!sideBar)?<i class="fa fa-user footer-icon no-sidebar " aria-hidden="true"></i>:''}
          {(!sideBar)? <i class="fa fa-cog footer-icon no-sidebar" aria-hidden="true"></i>:''}
          <i class="fa fa-sign-out footer-icon" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};
