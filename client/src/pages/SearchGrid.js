import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppShellNoFooter from '../AppShellNoFooter';
import ResultsGrid from '../components/search/ResultsGrid';

const SearchGrid = () => {
  return (
    <Container>
      <Row>
        <ResultsGrid />
      </Row>
    </Container>
  );
};

export default SearchGrid;
