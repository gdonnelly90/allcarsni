import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ResultsGrid from '../components/ResultsGrid';
import SidePanel from '../components/search/SidePanel';

const SearchGrid = () => {
  return (
    <div>
      <Row>
        <Col>
          <SidePanel />
        </Col>
        <Col>
          <Container>
            <ResultsGrid />
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default SearchGrid;
