import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../context/appContext';
import { getSetSubscription } from '../context/appContext/actions';
import { isEmpty } from 'lodash';
import { SuccessBanner } from '../components/common/SuccessBanner';

export const StripeSuccess = () => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('Susbcription active');

  const isCustomerSession = (session) => {
    // test is for customer subscription in url cs_****
    if (session) return session.startsWith('cs_test');

    return false;
  };

  useEffect(() => {
    const getStripeSubscription = async () => {
      await getSetSubscription(dispatch);
      const customerSession = isCustomerSession(searchParams.get('session_id'));
      setMessage(customerSession ? 'Subscritption active...' : 'Subscription has been updated...');
      setSuccess(true);
      setTimeout(() => {
        return navigate('/account');
      }, 5000);
    };

    getStripeSubscription();
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        {success && <SuccessBanner text={message} classNames='mt-5' />}
        <div className='col-md-12'>
          <div className='d-flex text-center justify-content-center py-5'>
            Successfully subscribed... you will be redirected to your account page shortly.
          </div>
        </div>
      </div>
    </div>
  );
};
