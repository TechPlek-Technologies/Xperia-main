import React from "react";
import { Link } from "react-router-dom";

// SVG icon component
const SvgIcon = () => (
  <svg
    className="swm-svg--angle swm-svg-submenu-indicator"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
  >
    <path d="M388.418,240.915L153.752,6.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L343.163,256 L123.582,475.582c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l234.667-234.667 C396.749,262.754,396.749,249.246,388.418,240.915z" />
  </svg>
);

// Menu item component
const MenuItem = ({ href, label, subMenu, isCurrent }) => (
  <li
    className={`menu-item ${
      isCurrent ? "current-menu-item current_page_item" : ""
    } ${subMenu ? "menu-item-has-children" : ""}`}
  >
    <a href={href} aria-current={isCurrent ? "page" : undefined}>
      {label}
      {subMenu && <SvgIcon />}
    </a>
    {subMenu && (
      <ul className="sub-menu">
        {subMenu.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>
    )}
  </li>
);

// Menu data
const menuData = [
  {
    href: "/",
    label: "home",
    isCurrent: true,
  },
  {
    href: "#",
    label: "about",
    subMenu: [
      { href: "/xperia-group/", label: "xperia group" },
      { href: "/pencil-box/", label: "pencil box" },
      { href: "/xperia-alive", label: "xperia alive" },
    ],
  },
  {
    href: "#",
    label: "services",
    subMenu: [
      { href: "/out-of-home", label: "out of home" },
      { href: "/multiplex", label: "cinema advertisement" },
      { href: "/events-and-promotions", label: "events & promotions" },
      { href: "/content-design", label: "content design" },
      { href: "/creative-retainership", label: "creative-retainership" },
      { href: "/corporate-films", label: "corporate films" },
      { href: "/music", label: "music" },
    ],
  },
  {
    href: "/team",
    label: "team",
  },
  {
    href: "/blogs",
    label: "blog",
  },

  {
    href: "#",
    label: "contact",
    subMenu: [
      { href: "/locations/", label: "locations" },
      { href: "/get-in-touch/", label: "get in touch" },
    ],
  },
];

const WrapperMenu = () => (
  <ul id="menu-main-navigation-1" className="mk-ver-menu">
    {menuData.map((item, index) => (
      <MenuItem key={index} {...item} />
    ))}
  </ul>
);

export default WrapperMenu;
