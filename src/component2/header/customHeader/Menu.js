import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ item, isActive }) => {
    return (
      <li
        id={`menu-item-${item.id}`}
        className={`menu-item menu-item-type-${item.type} menu-item-object-${item.object} ${isActive ? 'swm-m-active' : ''} ${item.children.length > 0 ? 'menu-item-has-children' : ''}`}
      >
        <Link to={item.href}>
          <span>{item.label}</span>
        </Link>
        {item.children.length > 0 && (
          <ul className="sub-menu">
            {item.children.map((child) => (
              <MenuItem key={child.id} item={child} />
            ))}
          </ul>
        )}
      </li>
    );
  };

const Menu = ({ menuItems }) => {
  return (
    <div
    className="mk_sections_item elementor-element elementor-element-1b5d4c87 elementor-hidden-tablet elementor-hidden-mobile mk-nav-menu-indicator1-no mk-nav-menu-hover-circle-yes mk-nav-menu-indicator2-yes elementor-widget elementor-widget-mk_horizontal_menu"
    data-id="1b5d4c87"
    data-element_type="widget"
    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
    data-widget_type="mk_horizontal_menu.default"
  >
    <div className="elementor-widget-container">
      <div className="mk-navigation-menu-container">
        <div className="swm-primary-nav-wrap">
          <div className="menu-main-navigation-container">
            <ul id="menu-main-navigation" className="mk-nav-menu swm-primary-nav">
            {menuItems?.map((item, index) => (
                  <MenuItem key={item.id} item={item} isActive={index === 0} />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Menu;
