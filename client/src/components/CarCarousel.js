import Carousel from 'react-bootstrap/Carousel';
import placeholder from '../assets/img/placeholder.jpg';

function CarCarousel() {
  return (
    <Carousel variant='dark'>
      <Carousel.Item>
        <img className='d-block w-100' src={placeholder} alt='First slide' />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>First</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={placeholder} alt='Second slide' />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Second</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={placeholder} alt='Third slide' />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Third</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={placeholder} alt='Fourth slide' />
        <Carousel.Caption>
          <h5>Fourth slide label</h5>
          <p>Fourth</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={placeholder} alt='Fifth slide' />
        <Carousel.Caption>
          <h5>Fifth slide label</h5>
          <p>Fifth</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarCarousel;

// <Carousel variant='dark'>
//   <Carousel.Item>
//     <img className='d-block w-100' src={placeholder} alt='First slide' />
//     <Carousel.Caption>
//       <h5>First slide label</h5>
//       <p>First</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img className='d-block w-100' src={placeholder} alt='Second slide' />
//     <Carousel.Caption>
//       <h5>Second slide label</h5>
//       <p>Second</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img className='d-block w-100' src={placeholder} alt='Third slide' />
//     <Carousel.Caption>
//       <h5>Third slide label</h5>
//       <p>Third</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img className='d-block w-100' src={placeholder} alt='Fourth slide' />
//     <Carousel.Caption>
//       <h5>Fourth slide label</h5>
//       <p>Fourth</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img className='d-block w-100' src={placeholder} alt='Fifth slide' />
//     <Carousel.Caption>
//       <h5>Fifth slide label</h5>
//       <p>Fifth</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
