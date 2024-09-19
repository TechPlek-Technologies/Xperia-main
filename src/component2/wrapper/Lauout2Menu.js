import React from 'react'

const MenuWrapper = ({ menuData }) => {
    // Recursive function to render menu and submenu
    const renderMenu = (menuItems) => {
      return (
        <ul className="mk-ver-menu">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`menu-item menu-item-type-${item.type} menu-item-object-${item.object} ${
                item.children.length ? "menu-item-has-children" : ""
              }`}
            >
              <a href={item.href}>
                {item.label}
                {item.children.length > 0 && (
                  <svg
                    className="swm-svg--angle swm-svg-submenu-indicator"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <path d="M388.418,240.915L153.752,6.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L343.163,256 L123.582,475.582c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l234.667-234.667 C396.749,262.754,396.749,249.246,388.418,240.915z" />
                  </svg>
                )}
              </a>
              {item.children.length > 0 && (
                <ul className="sub-menu">
                  {renderMenu(item.children)}
                </ul>
              )}
            </li>
          ))}
        </ul>
      );
    };
  
    return <nav>{renderMenu(menuData)}</nav>;
  };

  export default MenuWrapper;