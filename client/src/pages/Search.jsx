import React, { useEffect, useState } from 'react';
import CarCard from '../components/car/CarCard';
// import { SideFilterNew } from '../components/search/SideFilterNew';
import { SearchDrawer } from '../components/search/SearchDrawer';
import { fetchAllVehicles } from '../services/vehicle.service';
import Pagination from 'react-bootstrap/Pagination';
import qs from 'qs';
import queryString from 'query-string';

const Search = ({ make, model, price, year, mileage, fuelType, colour, onHandleChange }) => {
  const [vehicles, setVehicles] = useState([]);
  const [query, setQuery] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  // const [countVehicles, setCountVehicles] = useState([]);

  const generatePages = () => {
    console.log(`REDRAW PAGES ${numberOfPages}`);
    return new Array(numberOfPages).fill().map((v, i) => (
      <Pagination.Item
        key={i + 1}
        active={i + 1 === pageNumber}
        onClick={(e) => onPageNoChange(e, i)}>
        {i + 1}
      </Pagination.Item>
    ));
  };

  const getVehicles = async (queryParams) => {
    // stringfy the query for our BE
    const { vehicles, totalPages } = await fetchAllVehicles(queryString.stringify(queryParams));
    setVehicles(vehicles);
    setNumberOfPages(totalPages);
    // setCountVehicles(countVehicles);
    window.scrollTo(0, 0);
  };

  const onPageNoChange = (event, pageIndex) => {
    const parsedQuery = { ...query, page: pageIndex + 1 };
    setQuery(parsedQuery);
    setPageNumber(pageIndex + 1);
    setURL(parsedQuery);
    getVehicles(parsedQuery);
  };

  const stringifyUrl = (obj) => {
    return queryString.stringify(obj);
  };

  const setURL = (params) => {
    window.history.replaceState(null, '', `/search?${stringifyUrl(params)}`);
  };

  const onSearchValueChange = (param) => {
    // {make : BMW }
    const { key, value } = param;
    // window. location
    const query = window.location.search;
    // return object of query string to make it easier to process
    const parsedQuery = { ...queryString.parse(query), page: 1, [`${key}`]: value };
    // keep obj {make: 'BMW',
    setURL(parsedQuery);

    setQuery(parsedQuery);

    getVehicles(parsedQuery);
  };

  const buildQuery = () => {
    // will get the full query string from the URL
    const windowSearch = window.location.search;

    const fullQuery = { ...queryString.parse(windowSearch) };
    // set the query string needed for API call
    setQuery(fullQuery);

    getVehicles(fullQuery);
  };

  useEffect(() => {
    buildQuery();
  }, []);

  useEffect(() => {
    generatePages();
  }, [numberOfPages]);

  return (
    <div className='main-search-container'>
      <div className='sidebar-search-page'>
        {/* <SideFilterNew /> */}
        <SearchDrawer onSearchValueChange={onSearchValueChange} />
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
          {generatePages()}
        </Pagination>
      </div>
    </div>
  );
};

export default Search;
