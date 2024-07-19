import image5 from '../assets/img/image5.jpg'
import PropTypes from 'prop-types';

export const Covenas5 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={image5} alt="outfit aesthetic" className='image' />
    </div>
  )
}

Covenas5.protoTypes = {
  className: PropTypes.string
};