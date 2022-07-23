import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppShellNoFooter from '../AppShellNoFooter';
import ResultsGrid from '../components/search/ResultsGrid';

const SearchGrid = () => {
  return (
    <AppShellNoFooter>
      <Container>
        <Row>
          <ResultsGrid />
        </Row>
      </Container>
    </AppShellNoFooter>
  );
};

export default SearchGrid;
