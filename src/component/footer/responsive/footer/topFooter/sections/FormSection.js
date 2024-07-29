import React, { useState } from 'react'
import Style from './FormSection.module.css'
import { Link } from 'react-router-dom'
import FormPopUp from '../../../../../popups/FormPopUp';
const FormSection = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
   <>
    <div onClick={handleClickOpen}>
    <div className={Style.header} >
      <h2 className={Style.h2}>
        <span>{"Have a Project in Mind?"}</span>
      </h2>
    </div>
    
    <div className={Style.body}>
      <Link to={"/"} className={Style.link}>
      <img src='./assets/img/contact/icon.webp' alt='' className={Style.image}/>
      </Link>
      
    </div>
    <Link to={"/"} className={Style.contactLink}>
    <h4 className={Style.h4}>Contact Us</h4></Link>
   
  </div>
  <FormPopUp open={open} handleClose={handleClose}/>
   </>
  )
}

export default FormSection