import Carousel from 'react-bootstrap/Carousel';
import placeholder from '../../assets/img/placeholder.jpg';
// import image1 from '../../assets/img/cars/Audi_R8_V10_1a.jpg';
import image1 from '../../assets/img/cars/Ferrari_LaFerrari_Aperta_1.jpg';
import image2 from '../../assets/img/cars/Ferrari_LaFerrari_Aperta_2.jpg';
import image3 from '../../assets/img/cars/Ferrari_LaFerrari_Aperta_3.jpg';
import image4 from '../../assets/img/cars/Ferrari_LaFerrari_Aperta_4.jpg';
import image5 from '../../assets/img/cars/Ferrari_LaFerrari_Aperta_5.jpg';

function CarCarousel({ images = [] }) {
  return (
    <Carousel variant='light'>
      {images && images.length > 0 ? (
        images.map((image) => (
          <Carousel.Item>
            <img
              className='d-block'
              style={{ width: '100%', height: '551.85px' }}
              src={image?.url}
              alt='First slide'
            />
          </Carousel.Item>
        ))
      ) : (
        <>
          <Carousel.Item>
            <img
              className='d-block'
              style={{ width: '100%', height: '551.85px' }}
              src={image1}
              alt='First slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block'
              style={{ width: '100%', height: '551.85px' }}
              src={image2}
              alt='Second slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block'
              style={{ width: '100%', height: '551.85px' }}
              src={image3}
              alt='Third slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block'
              style={{ width: '100%', height: '551.85px' }}
              src={image4}
              alt='Fourth slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block'
              style={{ width: '100%', height: '550.85px' }}
              src={image5}
              alt='Fifth slide'
            />
          </Carousel.Item>
        </>
      )}
    </Carousel>
  );
}

export default CarCarousel;
