import React from "react";
import StickyHeader from "./stickyHeader/StickyHeader";
import CustomHeader from "./customHeader/CustomHeader";

export const menuData = [
  {
    id: 1970,
    type: "post_type",
    object: "page",
    href: "/contact/",
    label: "projects",
    children: [],
  },
  {
    id: 1965,
    type: "custom",
    object: "custom",
    href: "/",
    label: "about",
    children: [
      {
        id: 1981,
        type: "post_type",
        object: "page",
        href: "/",
        label: "xperia group",
        children: [],
      },
      {
        id: 1971,
        type: "post_type",
        object: "page",
        href: "/creative-agency/",
        label: "pencil box",
        children: [],
      },
      {
        id: 1972,
        type: "post_type",
        object: "page",
        href: "/digital-agency/",
        label: "xperia live",
        children: [],
      },
    ],
  },
  {
    id: 1993,
    type: "custom",
    object: "custom",
    href: "#",
    label: "services",
    children: [
      {
        id: 1983,
        type: "post_type",
        object: "page",
        href: "/our-services/",
        label: "Ideation",
        children: [],
      },
      {
        id: 1967,
        type: "post_type",
        object: "page",
        href: "/about-us/",
        label: "media planning",
        children: [],
      },
      {
        id: 1966,
        type: "post_type",
        object: "page",
        href: "/about-me/",
        label: "film",
        children: [],
      },
      {
        id: 1973,
        type: "post_type",
        object: "page",
        href: "/faq-page/",
        label: "design",
        children: [],
      },
      {
        id: 1987,
        type: "post_type",
        object: "page",
        href: "/pricing/",
        label: "content",
        children: [],
      },
      {
        id: 1987,
        type: "post_type",
        object: "page",
        href: "/pricing/",
        label: "music",
        children: [],
      },
    ],
  },
  {
    id: 1970,
    type: "post_type",
    object: "page",
    href: "/contact/",
    label: "blog",
    children: [],
  },
  {
    id: 1994,
    type: "custom",
    object: "custom",
    href: "#",
    label: "contact",
    children: [
      {
        id: 1990,
        type: "post_type",
        object: "page",
        href: "/standard-list/",
        label: "locations",
        children: [],
      },
      {
        id: 1982,
        type: "post_type",
        object: "page",
        href: "/masonry-list/",
        label: "get in touch",
        children: [],
      },
    ],
  },
];

const Header = () => {
  return (
    <>
        <CustomHeader menuItems={menuData} />
        <StickyHeader menuItems={menuData} />

    </>
  );
};

export default Header;
