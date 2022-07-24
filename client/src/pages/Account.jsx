import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useAppState, useAppDispatch } from '../context/appContext';

export const Account = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppState();
  console.log(user);

  const handleTabSelect = (key) => {
    switch (key) {
      case 'profile':
        console.log('Profile');
        break;
      case 'subscription':
        console.log('Subscription');
        break;
      case 'favourites':
        console.log('Favourites');
        break;
      default:
        return false;
    }
  };

  return (
    <div className='container mt-4' style={{ minHeight: '80vh' }}>
      <Tabs
        defaultActiveKey='profile'
        id='uncontrolled-tab-example'
        className='mb-3'
        onSelect={handleTabSelect}>
        <Tab eventKey='profile' title='Profile'>
          <h1>Profile</h1>
        </Tab>
        <Tab eventKey='subscription' title='Subscription'>
          <h1>Subscription</h1>
        </Tab>
        <Tab eventKey='favourites' title='Favourites'>
          <h1>Favourites</h1>
        </Tab>
      </Tabs>
    </div>
  );
};
