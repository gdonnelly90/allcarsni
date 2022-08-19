import React, { useEffect, useState } from 'react';
import CarCard from '../components/car/CarCard';
import { SideFilterNew } from '../components/search/SideFilterNew';
import { fetchAllVehicles } from '../services/vehicle.service';
import Pagination from 'react-bootstrap/Pagination';
import qs from 'qs';
import queryString from 'query-string';

const Search = ({ make, model, price, year, mileage, fuelType, colour, onHandleChange }) => {
  const [vehicles, setVehicles] = useState([]);
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  // const [countVehicles, setCountVehicles] = useState([]);

  const pages = new Array(numberOfPages).fill().map((v, i) => (
    <Pagination.Item key={i + 1} active={i + 1 === pageNumber} onClick={() => setPageNumber(i + 1)}>
      {i + 1}
    </Pagination.Item>
  ));

  const getVehicles = async () => {
    const { vehicles, totalPages } = await fetchAllVehicles(query);
    // const { vehicles, totalPages, countVehicles } = await fetchAllVehicles(query).countDocuments();
    setVehicles(vehicles);
    setNumberOfPages(totalPages);
    // setCountVehicles(countVehicles);
    window.scrollTo(0, 0);
  };

  const buildQuery = () => {
    // will get the full query string from the URL
    const query = window.location.search;
    // return object of query string to make it easier to process
    const parsedQuery = queryString.parse(query);
    // append in page number
    const fullQuery = { ...parsedQuery, page: pageNumber };
    // setFilter Options based on query parms ********************************

    // set the query string needed for API call
    setQuery(queryString.stringify(fullQuery));
    // get vehicles
    getVehicles();
  };

  useEffect(() => {
    buildQuery();
  }, [query, pageNumber]);

  return (
    <div className='main-search-container'>
      <div className='sidebar-search-page'>
        <SideFilterNew />
      </div>
      <div className='card-search-container'>
        <div className='container-search-page'>
          {/* <span className='total-vehicles'>Total vehicles = {countVehicles}</span> */}
          {vehicles &&
            vehicles.map((vehicle, i) => {
              return <CarCard key={i} vehicle={vehicle} />;
            })}
        </div>
        <Pagination
          className='pagination-row'
          style={{ display: 'flex', justifyContent: 'center' }}>
          {pages}
        </Pagination>
      </div>
    </div>
  );
};

export default Search;
