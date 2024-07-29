import React from 'react';


const Button = ({text,src}) => {
  let buttontext=text
  if(!buttontext){
    buttontext="READ MORE";
  }
  return (
    <div className="mk-m-pagination mk--load-more">
    <div className="mk-m-pagination-inner">
      <a
        className="mk-load-more-button button submit mk-layout--filled  mk-html--link"
        href={src}
        target="_self"
      >
       {buttontext}
      </a>
    </div>
  </div>
  )
}

export default Button;
