import React, { useEffect, useState } from 'react';
import CarCard from '../components/car/CarCard';
import { SearchDrawer } from '../components/search/SearchDrawer';
import {
  fetchAllVehicles,
  fetchFilterData,
  fetchVehicleModelsByMake,
} from '../services/vehicle.service';
import Pagination from 'react-bootstrap/Pagination';
import queryString from 'query-string';
import { toast } from 'react-toastify';

export const Search = ({}) => {
  const [vehicles, setVehicles] = useState([]);
  const [query, setQuery] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [colours, setColours] = useState([]);
  const [bodyTypes, setBodyTypes] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  // const [countVehicles, setCountVehicles] = useState([]);

  // pagination function
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

  // get all vehicles with the query as the params
  const getVehicles = async (queryParams) => {
    try {
      // stringfy the query for BE
      const { vehicles, totalPages } = await fetchAllVehicles(queryString.stringify(queryParams));
      setVehicles(vehicles);
      setNumberOfPages(totalPages);

      window.scrollTo(0, 0);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // get models once make function is called
  const getModels = async (model) => {
    try {
      const response = await fetchVehicleModelsByMake(model);
      setModels(response);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // function to get all filter data
  const getInitialFilterData = async () => {
    try {
      const [makes, colours, bodyTypes, fuelTypes] = await fetchFilterData();
      // console.log('FILTER DATA');
      // console.log(`${JSON.stringify(makes, null, 2)} ${JSON.stringify(colours, null, 2)}`);
      setMakes(makes);
      setColours(colours);
      setBodyTypes(bodyTypes);
      setFuelTypes(fuelTypes);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // part of the pagination
  const onPageNoChange = (event, pageIndex) => {
    const parsedQuery = { ...query, page: pageIndex + 1 };
    // set page number
    setPageNumber(pageIndex + 1);
    // updateURL
    setURL(parsedQuery);
    // set query local value
    setQuery(parsedQuery);
  };

  // setting the returned obj into a string for the url
  const stringifyUrl = (obj) => {
    return queryString.stringify(obj);
  };

  // setting the url
  const setURL = (params) => {
    window.history.replaceState(null, '', `/search?${stringifyUrl(params)}`);
  };

  // when search value is called
  const onSearchValueChange = (param) => {
    const { key, value } = param;

    // if param.key is of make - call model api
    if (key === 'make') {
      getModels(value);
    }

    // window. location
    const query = window.location.search;
    // return object of query string to make it easier to process
    const parsedQuery = { ...queryString.parse(query), page: 1, [`${key}`]: value };
    // keep obj {make: 'BMW',
    setURL(parsedQuery);
    // set local query
    setQuery(parsedQuery);
  };

  const buildQuery = () => {
    // will get the full query string from the URL
    const windowSearch = window.location.search;

    const fullQuery = { ...queryString.parse(windowSearch) };
    // set the query string needed for API call
    // setQuery(fullQuery);

    getVehicles(fullQuery);
  };

  useEffect(() => {
    buildQuery();
  }, [query]);

  useEffect(() => {
    generatePages();
  }, [numberOfPages]);

  useEffect(() => {
    generatePages();
  }, []);

  // usEeffect for getting filters DB info
  // Leave blank [] for single actioning
  useEffect(() => {
    getInitialFilterData();
  }, [numberOfPages, query]);

  return (
    <div className='main-search-container'>
      <div className='sidebar-search-page'>
        <SearchDrawer
          makes={makes}
          models={models}
          colours={colours}
          bodyTypes={bodyTypes}
          fuelTypes={fuelTypes}
          onSearchValueChange={onSearchValueChange}
        />
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
