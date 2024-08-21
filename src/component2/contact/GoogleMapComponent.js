import Style from './GoogleMapComponent.module.css';

const GoogleMapComponent= () => {
    return (
      <div className={Style.wrapper}>
        <iframe title="realestate location" className={Style.container} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.628263541073!2d77.26826757549784!3d28.550891175709385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a8372b7275%3A0x379274667a205340!2sXPERIA%20GROUP!5e0!3m2!1sen!2sin!4v1720760412215!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowFullScreen></iframe>
      </div>
    );
  };
  
  export default GoogleMapComponent;