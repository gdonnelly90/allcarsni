import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { isEmpty } from 'lodash';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppState } from '../context/appContext';
import { fetchSubscriptions } from '../services/subscription.service';
import { SubscriptionTab } from '../components/SubscriptionTab';
import { ProfileTab } from '../components/ProfileTab';
import { FavouritesTab } from '../components/FavouritesTab';
import { StockTab } from '../components/StockTab';
import { VehicleTab } from '../components/VehicleTab';
import { createSubscription, createBillingSession } from '../context/appContext/actions';
import { APP_TABS } from '../utils/constants';

export const Account = () => {
  const state = useAppState();
  const dispatch = useAppDispatch();
  const [key, setKey] = useState(APP_TABS.PROFILE);

  const [subscriptionTypes, setSubscriptionTypes] = useState([]);

  const getSubscriptionTypes = async () => {
    try {
      const subscriptions = await fetchSubscriptions();
      console.log(subscriptions);
      setSubscriptionTypes(subscriptions);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const handleTabSelect = async (key) => {
    switch (key) {
      case APP_TABS.PROFILE:
        setKey(key);
        console.log('Profile');
        break;
      case APP_TABS.PLANS_PRICING:
        setKey(key);
        if (isEmpty(setSubscriptionTypes)) {
          getSubscriptionTypes();
        }
        break;
      case APP_TABS.FAVOURITES:
        setKey(key);
        console.log('Favourites');
        break;
      case APP_TABS.SELL:
        setKey(key);
        console.log('Create car');
        break;
      case APP_TABS.STOCK:
        setKey(key);
        console.log('stock');
        break;
      default:
        return false;
    }
  };

  const onSubscription = async (stripePriceId) => {
    // check if user has active subscription - if so open billing session
    const hasPlan = hasActivePlan();
    if (hasPlan) {
      // ie manage billing
      initBillingSession();
    } else {
      // ie create a subscription to all cars
      createSubscriptionPlan(stripePriceId);
    }
  };

  const initBillingSession = async () => {
    try {
      const url = await createBillingSession(dispatch);
      window.open(url);
    } catch (error) {}
  };

  const createSubscriptionPlan = async (stripePriceId) => {
    try {
      const payload = { stripePriceId };
      // create a stripe subscription
      const { session } = await createSubscription(dispatch, payload);
      // opens stripe session for payment
      window.open(session.url);
    } catch (error) {
      // toastr error to do
      console.log(error);
    }
  };

  const hasActivePlan = () => {
    return state?.user?.subscription?.plan?.active || false;
  };

  // useEffect(() => {
  //   debugger;
  //   const queryParams = new URLSearchParams(window.location.search);
  //   const tab = queryParams.get(APP_TABS.QUERY_ACTIVE_TAB) || '';
  //   if (!isEmpty(tab)) {
  //     setKey(tab);
  //   }
  // }, []);

  return (
    <div className='container mt-4' style={{ minHeight: '80vh' }}>
      {/* <pre>{JSON.stringify(state?.user?.subscription, null, 2)}</pre> */}
      <Tabs
        activeKey={key}
        id='uncontrolled-tab-example'
        className='mb-3'
        onSelect={handleTabSelect}>
        <Tab eventKey={APP_TABS.PROFILE} title='Profile'>
          <ProfileTab />
        </Tab>
        <Tab eventKey={APP_TABS.PLANS_PRICING} title='Plans &amp; Pricing'>
          <SubscriptionTab subscriptions={subscriptionTypes} onSubscription={onSubscription} />
        </Tab>
        <Tab eventKey={APP_TABS.FAVOURITES} title='Favourites'>
          <FavouritesTab />
        </Tab>
        <Tab eventKey={APP_TABS.STOCK} title='Stock'>
          <StockTab />
        </Tab>
        <Tab eventKey={APP_TABS.SELL} title='Sell'>
          <VehicleTab handleTabSelect={handleTabSelect} />
        </Tab>
      </Tabs>
    </div>
  );
};
