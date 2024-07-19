import image1 from '../assets/img/image1.1.jpg'
import PropTypes from 'prop-types';

export const Covenas1 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={image1} alt="outfit aesthetic" className='image'  />
    </div>
  )
}

Covenas1.protoTypes = {
  className: PropTypes.string
};