import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import LatestNewsCarousel from '../latest_news_carousel/LatestNewsCarousel';

const LatestNews = () => {
  return (
    <div className='latestnews-wrapper text-center'>
      <Container>
        <MDBRow>
          <MDBCol md='12'>
            <div className='home-row-3 text-center'>
              <h1>Latest Review</h1>
              <div class='separator'></div>
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
                BMW M5 taking life and the Nürburgring by storm!
              </p>
              <p className='lastestnews-text2'>
                <span className='lastestnews-text2'>July 26 2022 | </span>
                <span className='news-red'>By Gary Donnelly</span>
              </p>
              <p className='lastestnews-text3 pt-3'>
                <p>
                  The quickest M5 ever is also the comfiest M5 ever. Maybe the
                  most complete super saloon of them all
                </p>
                <p>
                  Is ‘too complete’ a valid criticism? The M5 Competition is
                  almighty in its performance and comfort, but found a little
                  wanting when you want a bit of verve and attitude at everyday
                  pace. The kind of pace that doesn't trouble your own morals!
                </p>
              </p>
              <p className='lastestnews-text4 pt-3'>(credit TopGear)</p>
            </div>
          </MDBCol>
        </MDBRow>
      </Container>
    </div>
  );
};

export default LatestNews;
