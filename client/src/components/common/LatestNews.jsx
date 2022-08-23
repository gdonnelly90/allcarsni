import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import LatestNewsCarousel from '../latestNewsCarousel/LatestNewsCarousel';

const LatestNews = () => {
  return (
    <div className='latestnews-wrapper text-center'>
      <Container>
        <MDBRow>
          <MDBCol md='12'>
            <div className='home-row-3 text-center'>
              <h1>Latest Review</h1>
              <div className='separator'></div>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md='5'>
            <LatestNewsCarousel />
          </MDBCol>
          <MDBCol md='7 pb-5'>
            <div className='lastestnews-text'>
              <p className='lastestnews-text1'>
                BMW M5: taking life, and the Nürburgring, by storm!
              </p>
              <div className='lastestnews-text2 pb-2'>
                <MDBRow md='12'>
                  <MDBCol md='8'>
                    <span className='lastestnews-text2'>July 26 2022 | </span>
                    <span className='news-red'>By Gary Donnelly</span>
                  </MDBCol>
                  <MDBCol md='4'>
                    <Link to='/review' className='nav-link p-0 text-muted'>
                      Click for full review
                    </Link>
                  </MDBCol>
                </MDBRow>
              </div>
              <div className='lastestnews-text3 mt-3'>
                <p>
                  The quickest M5 ever is also the comfiest M5 ever. Maybe the most complete super
                  saloon of them all...
                </p>
                <p>
                  <span className='news-para1'>Is ‘too complete’ a valid criticism?</span> The M5
                  Competition is almighty in its performance and comfort, but found a little wanting
                  when you want a bit of verve and attitude at everyday pace. The kind of pace that
                  doesn't trouble your own morals!
                </p>
              </div>
              <div className='lastestnews-text4 pt-3'>(credit TopGear)</div>
            </div>
          </MDBCol>
        </MDBRow>
      </Container>
    </div>
  );
};

export default LatestNews;
