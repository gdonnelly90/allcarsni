import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import ModalCar from '../components/car/ModalCar';
import car_advert from '../assets/m5/bannernew1.jpg';
import Image1 from '../assets/m5/m5a.jpg';
import Image2 from '../assets/m5/m5b.jpg';
import Image3 from '../assets/m5/m5c.jpg';
import Image4 from '../assets/m5/m5e.jpg';
import Image5 from '../assets/m5/m5f.jpg';
import reviewBanner from '../assets/m5/banner.jpg';
import { CarButton } from '../components/car/CarButton';
// review and image content copied from TopGear website

export const FeaturedReview = (ScrollToTop) => {
  const [modalCar, setModalCar] = useState(false);

  return (
    <Container>
      <Row className='review-banner'>
        <img
          className='fullwidth-banner-pic'
          src={car_advert}
          onClick={() =>
            window.open('https://www.bavarianbmw.co.uk/cars/bmw-m/m5-competition-saloon', '_blank')
          }
          alt=''
        />
      </Row>
      <Container className='actual-review-container pt-4'>
        {/* <CarButton setModalCar={setModalCar} />
        {modalCar === true && <ModalCar setModalCar={setModalCar} />} */}
        <MDBRow className='review-row' md='12'>
          <MDBCol className='review-text' md='8'>
            {/* <h4 className='small-header-text'>CAR REVIEW</h4> */}
            <h1 className='header-text'>BMW M5 Competition Review</h1>
            <hr style={{ width: '65%', size: '3px', color: '#c53030' }} />
            <hr style={{ width: '65%', size: '3px', color: '#c53030' }} />
            <h4 className='small-title-text'>WHAT IS IT?</h4>
            <hr style={{ width: '20%', size: '3px', color: '#c53030' }} />
            <p className='small-title-text'>
              Like you even have to ask. The BMW M5 is an icon of the motoring world. Back in 2020
              this current generation F90 enjoyed a similar refresh to the regular 5 Series, but
              with one crucial difference. While the regular saloon saw its range swell with a
              handful of new engine options, the M5’s halved, from two to one. That means in the UK
              you can now only have the full-bore M5 Competition. And we’re the second biggest
              market for the M5 behind America (yep, ahead of Germany) so we ought to know a thing
              or two about how to buy one of these.
            </p>
            <h4 className='small-title-text mt-5'>SO I CAN’T BUY A STANDARD M5?</h4>
            <hr style={{ width: '50%', size: '3px', color: '#c53030' }} />
            <p className='small-title-text'>
              Not in the UK, friend. The year 2020 definitely dealt us trickier revelations, but it
              was an interesting move from BMW, not least because its big nemesis – the Mercedes-AMG
              E63 – continued with two power outputs and an entry point below £100,000 (just),
              something the M5 Competition couldn’t offer. In 2022, prices for the M5 Comp now start
              at £107,520 before options. And you will add options. We’ll get onto those in a sec.
              It’s worth remembering that BMW did briefly give us another M5 option, though. The
              full-fat £140,780, 626bhp M5 CS was the most powerful M car ever built when it arrived
              in Spring 2021, and although it wasn’t a limited edition BMW only ever planned to
              build it for 12 months.
            </p>
            <h4 className='small-title-text mt-5'>SO THERE’S M8 INPUT HERE, IS THERE?</h4>
            <hr style={{ width: '58%', size: '3px', color: '#c53030' }} />
            <p className='small-title-text'>
              Yep, the M8 actually influenced some of the other tweaks for the updated M5. The
              suspension set up from the M8 Gran Coupe is slotted in here, surely upping the big
              Five’s comfort game in light of the plusher AMG E63. There’s also an M Mode switch on
              the centre console, which sets the car up ready for sporty road driving or
              gritted-teeth track driving with a respective push or hold of the button. Separate to
              all the engine and chassis settings (toggleable via separate M buttons on the steering
              wheel), this new one shuts off the stereo volume and safety systems at increasing
              levels for road and track..
            </p>
            <h4 className='small-title-text mt-5'>WHAT'S THE VERDICT?</h4>
            <hr style={{ width: '38%', size: '3px', color: '#c53030' }} />
            <h4 className='small-title-text mt-2 mb-2'>
              “The quickest M5 ever is also the comfiest M5 ever. Maybe the most complete super
              saloon of them all”
            </h4>
            <p className='small-title-text'>
              Is ‘too complete’ a valid criticism? The M5 Competition is almighty in its performance
              and comfort, but found a little wanting when you want a bit of verve and attitude at
              everyday pace. The kind of pace that doesn't trouble your own morals. We could list a
              dozen performance cars the same is true of, however, and at least as a big, posh
              four-door, this car’s not solely about putting a grin on your face. It’s about
              slipping into everyday life too. Which the M5 will with utter class. Merc’s mighty
              (but soon to be replaced) E63 shows us what’s possible when a bit more anger is
              allowed to bubble to the surface, but in truth the pair of them – as well as Audi’s
              staggeringly good RS7 Sportback – operate at such high levels now they’re achingly
              hard to split. Try them all before you pick which one’s for you.
            </p>
            <h4 className='small-title-text mt-5'>COST</h4>
            <hr style={{ width: '14%', size: '3px', color: '#c53030' }} />
            <h4 className='small-title-text mt-2'>
              <p>Prices start from £107,520</p>
            </h4>
            <img className='review-image pb-2' src={reviewBanner} alt='' />
            <div className='lastestnews-text4 pt-3'>(credit TopGear)</div>
          </MDBCol>
          <MDBCol className='review-images' md='4'>
            <br></br>
            <br></br>
            <CarButton setModalCar={setModalCar} />
            {modalCar === true && <ModalCar setModalCar={setModalCar} />}
            <MDBRow className='review-images mt-5 mb-5'>
              {/* <div className='modal-delete-icon' onClick={() => setModal(false)}> */}
              <img className='review-image' src={Image1} alt='' />
            </MDBRow>
            <MDBRow className='review-images mb-5'>
              <img className='review-image' src={Image2} alt='' />
            </MDBRow>
            <MDBRow className='review-images mb-5'>
              <img className='review-image' src={Image3} alt='' />
            </MDBRow>
            <MDBRow className='review-images mb-5'>
              <img className='review-image' src={Image4} alt='' />
            </MDBRow>
            <MDBRow className='review-images'>
              <img className='review-image' src={Image5} alt='' />
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </Container>
    </Container>
  );
};
