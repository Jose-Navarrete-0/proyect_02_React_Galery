import image6 from '../assets/img/image6.jpg'
import PropTypes from 'prop-types';

export const Covenas6 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={image6} alt="outfit aesthetic" className='image'  />
    </div>
  )
}

Covenas6.protoTypes = {
  className: PropTypes.string,
};
