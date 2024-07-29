import React from 'react';
import Style from "./Button.module.css";
import { Link } from 'react-router-dom';

const Button = ({text,src}) => {
  let buttontext=text
  if(!buttontext){
    buttontext="READ MORE";
  }
  return (
    <div className={Style.button}>
        <Link to={src}>
        <span className={Style.span}>{buttontext}</span>
        </Link>
    </div>
  )
}

export default Button;
