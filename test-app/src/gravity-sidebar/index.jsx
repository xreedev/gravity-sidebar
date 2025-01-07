import React, { useState } from "react";
import "./style.css";

export const Sidebar = (props) => {
  const [activeItem, setActiveItem] = useState("Home");
  const [sideBar, setSideBar] = useState(true);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleSidebar = () => {
    setSideBar(!sideBar);
  };

  return (
    <div
      className={`sidebar-container ${
        sideBar
          ? "sidebar-container-collapsed"
          : "sidebar-container-expanded"
      }`}
    >
      <div className="sidebar">
        <div className="sidebar-header mobile-nav">
          <i
            className = {props.sidebarButton}
            aria-hidden="true"
            onClick={handleSidebar}
          ></i>
          {!sideBar ? (
            <span className="no-sidebar mobile-nav">Gravity</span>
          ) : (
            ""
          )}
        </div>
        <div className="sidebar-list">
          <ul className="sidebar-content">
            {props.options.map((option) => (
              <li
                key={option.name}
                className={`sidebar-item ${
                  activeItem === option.name
                    ? "active-sidebar-item"
                    : "inactive-sidebar-item"
                }`}
                onClick={() => handleItemClick(option.name)}
              >
                <i
                  className={`${option.icon} sidebar-list-icon`}
                  aria-hidden="true"
                ></i>
                {!sideBar ? (
                  <span className="no-sidebar">{option.name}</span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sidebar-footer mobile-nav">
        <div className="sidebar-footer-icons">
          {props.footerOptions.slice(0, 3).map((footerIcon, index) => (
            <i
              key={index}
              className={`${footerIcon.icon} footer-icon ${
                !sideBar ? "no-sidebar" : ""
              }`}
              aria-hidden="true"
            ></i>
          ))}
        </div>
      </div>
    </div>
  );
};
