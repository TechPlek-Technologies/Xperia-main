import React from "react";
import StickyHeader from "./stickyHeader/StickyHeader";
import CustomHeader from "./customHeader/CustomHeader";
import Header2 from "./Header2";

export const menuData = [
  {
    id: 1970,
    type: "post_type",
    object: "page",
    href: "/projects/",
    label: "projects",
    children: [],
  },
  {
    id: 1965,
    type: "custom",
    object: "custom",
    href: "#",
    label: "about",
    children: [
      {
        id: 1981,
        type: "post_type",
        object: "page",
        href: "/xperia-group",
        label: "xperia group",
        children: [],
      },
      {
        id: 1971,
        type: "post_type",
        object: "page",
        href: "/pencil-box/",
        label: "pencil box",
        children: [],
      },
      {
        id: 1972,
        type: "post_type",
        object: "page",
        href: "/xperia-live/",
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
        id: 1989,
        type: "post_type",
        object: "page",
        href: "/pricing/",
        label: "music",
        children: [],
      },
    ],
  },
  {
    id: 1969,
    type: "post_type",
    object: "page",
    href: "/team/",
    label: "team",
    children: [],
  },
  {
    id: 1979,
    type: "post_type",
    object: "page",
    href: "/blogs/",
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
        href: "/locations/",
        label: "locations",
        children: [],
      },
      {
        id: 1982,
        type: "post_type",
        object: "page",
        href: "/get-in-touch/",
        label: "get in touch",
        children: [],
      },
    ],
  },
];

const Header = ({type}) => {
  return (
    <>
       {type==="other" ? <Header2 menuItems={menuData}/> :  <CustomHeader menuItems={menuData} /> }
        <StickyHeader menuItems={menuData} />

    </>
  );
};

export default Header;
