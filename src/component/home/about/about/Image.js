import React from 'react'
import Style from "./Image.module.css";

const Image = ({source,alt}) => {
  return (
    <div className={Style.image}>
        <img src={source} alt={alt} className={Style.imageinner}></img>
    </div>
  )
}

export default Image
