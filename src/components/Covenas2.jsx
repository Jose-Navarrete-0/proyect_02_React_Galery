import image2 from '../assets/img/image2.jpg'
import PropTypes from 'prop-types';

export const Covenas2 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={image2} alt="outfit aesthetic" className='image'  />
    </div>
  )
}

Covenas2.protoTypes = {
  className: PropTypes.string
};