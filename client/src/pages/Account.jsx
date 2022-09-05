import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import { isEmpty } from 'lodash';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppState } from '../context/appContext';
import { fetchSubscriptions } from '../services/subscription.service';
import { fetchRecipientMessages } from '../services/message.service';
import { SubscriptionTab } from '../components/SubscriptionTab';
import { ProfileTab } from '../components/ProfileTab';
import { FavouritesTab } from '../components/FavouritesTab';
import { StockTab } from '../components/StockTab';
import { VehicleTab } from '../components/VehicleTab';
import { MessagesTab } from '../components/MessagesTab';
import { createSubscription, createBillingSession } from '../context/appContext/actions';
import { updateUserDetails } from '../context/appContext/actions';
import { APP_TABS } from '../utils/constants';
import { fetchCustomerVehicles } from '../services/vehicle.service';
import { fetchUserFavouriteVehicles } from '../services/vehicle.service';

export const Account = () => {
  const state = useAppState();
  const dispatch = useAppDispatch();
  const [messages, setMessages] = useState();
  const [key, setKey] = useState(APP_TABS.PROFILE);
  const [vehicleData, setVehicleData] = useState({ vehicles: [], page: 1, totalPages: 1 });
  const [subscriptionTypes, setSubscriptionTypes] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [favouriteVehicles, setFavouriteVehicles] = useState([]);

  const getSubscriptionTypes = async () => {
    try {
      const subscriptions = await fetchSubscriptions();
      if (subscriptions) setSubscriptionTypes(subscriptions);
      else toast.error('Error getting subscriptions');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getCustomerVehicles = async () => {
    try {
      const data = await fetchCustomerVehicles();
      setVehicleData(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getUserFavouriteVehicles = async () => {
    try {
      const favouriteVehicles = await fetchUserFavouriteVehicles(state.user.id);
      setFavouriteVehicles(favouriteVehicles);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getRecipientMessages = async () => {
    try {
      const messages = await fetchRecipientMessages();
      setMessages(messages);
    } catch (error) {
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
        console.log('Plan & Pricing');
        setKey(key);
        if (isEmpty(setSubscriptionTypes)) {
          getSubscriptionTypes();
        }
        break;
      case APP_TABS.FAVOURITES:
        setKey(key);
        console.log('Favourites');
        getUserFavouriteVehicles();
        // getVehicles();
        break;
      case APP_TABS.STOCK:
        setKey(key);
        console.log('stock');
        getCustomerVehicles();
        break;
      case APP_TABS.SELL:
        setKey(key);
        console.log('Sell Car');
        break;
      case APP_TABS.MESSAGES:
        setKey(key);
        console.log('Messages');
        getRecipientMessages();
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
          <FavouritesTab favouriteVehicles={favouriteVehicles} />
        </Tab>
        <Tab eventKey={APP_TABS.STOCK} title='Stock'>
          <StockTab vehicleData={vehicleData} />
        </Tab>
        <Tab eventKey={APP_TABS.SELL} title='Sell'>
          <VehicleTab handleTabSelect={handleTabSelect} />
        </Tab>
        <Tab eventKey={APP_TABS.MESSAGES} title='Messages'>
          <MessagesTab messages={messages} />
        </Tab>
      </Tabs>
    </div>
  );
};
