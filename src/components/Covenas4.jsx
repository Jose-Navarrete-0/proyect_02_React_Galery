import image4 from '../assets/img/image4.4.jpg'
import PropTypes from 'prop-types';

export const Covenas4 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={image4} alt="outfit aesthetic" className='image'  />
    </div>
  )
}

Covenas4.protoTypes = {
  className: PropTypes.string
};