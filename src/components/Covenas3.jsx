import image3 from '../assets/img/image3.3.jpg'
import PropTypes from 'prop-types';

export const Covenas3 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={image3} alt="outfit aesthetic" className='image'  />
    </div>
  )
}

Covenas3.protoTypes = {
  className: PropTypes.string
};