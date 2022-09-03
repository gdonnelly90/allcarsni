import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { isEmpty } from 'lodash';
import { toast } from 'react-toastify';
import { fetchSubscriptions } from '../services/subscription.service';
import { fetchRecipientMessages } from '../services/message.service';
import { fetchFavourites } from '../services/favourite.service';
import { useAppDispatch, useAppState } from '../context/appContext';
import { SubscriptionTab } from '../components/SubscriptionTab';
import { ProfileTab } from '../components/ProfileTab';
import { FavouritesTab } from '../components/FavouritesTab';
import { StockTab } from '../components/StockTab';
import { VehicleTab } from '../components/VehicleTab';
import { MessagesTab } from '../components/MessagesTab';
import { createSubscription, createBillingSession } from '../context/appContext/actions';
import { updateUserDetails } from '../context/appContext/actions';
import { APP_TABS } from '../utils/constants';

export const Account = () => {
  const state = useAppState();
  const [messages, setMessages] = useState();
  const dispatch = useAppDispatch();
  const [key, setKey] = useState(APP_TABS.PROFILE);
  const [subscriptionTypes, setSubscriptionTypes] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [vehicles, setVehicles] = useState([]);

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

  const getRecipientMessages = async () => {
    const messages = await fetchRecipientMessages();
    console.log('-----RESPONSE MESSAGES DATA-----');
    console.log(messages);
    setMessages(messages);
    // console.log('-----RESPONSE.DATA FE-----');
    // console.log(response.data);
    // console.log('-----DATA OBJ-----');
    // console.log({ data });
  };

  const getVehicles = async () => {
    const vehicles = await fetchFavourites();
    console.log('-----RESPONSE.DATA FE-----');
    console.log(vehicles.data);
    setVehicles(vehicles);
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
        getVehicles();
        console.log('Favourites');
        break;
      case APP_TABS.SELL:
        setKey(key);
        console.log('Sell Car');
        break;
      case APP_TABS.STOCK:
        setKey(key);
        console.log('Stock');
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
          {/* <FavouritesTab vehicles={vehicles} /> */}
        </Tab>
        <Tab eventKey={APP_TABS.STOCK} title='Stock'>
          <StockTab />
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
