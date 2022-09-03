import React from 'react';
import { useAppState } from '../context/appContext';

export const SubscriptionCard = ({ sub, onSubscription }) => {
  const { user } = useAppState();
  const { subscription = {} } = user;

  const subscribe = () => {
    const stripePriceId = sub.stripePriceId;
    onSubscription(stripePriceId);
  };

  const currentPlan = () => {
    return subscription?.plan?.id === sub.stripePriceId;
  };

  return (
    <div className='col subscription-col'>
      <div className='card mb-4 rounded-3 shadow-sm'>
        <div className={`card-header py-3`}>
          <h4 className='my-0 fw-normal'>{sub.name}</h4>
        </div>
        <div className='card-body'>
          <h1 className='card-title pricing-card-title'>
            £{sub.price}
            <small className='text-muted fw-light'>/mo</small>
          </h1>
          <ul className='list-unstyled mt-3 mb-4'>
            <p>
              {sub.quantity} {`${sub.quantity <= 1 ? 'car per time' : 'cars per month'}`}
            </p>
            <p>{sub.quantity < 150 ? 'Email support' : ''}</p>
            <p>{sub.quantity >= 150 ? 'Premium Ads' : ''}</p>
            {sub.quantity > 1 ? (
              <li>Vehicle evaluation & Auto populate</li>
            ) : (
              <li>Auto populate</li>
            )}
          </ul>
          <button
            type='button'
            variant='primary'
            className={`w-100 btn btn-md ${
              currentPlan() ? 'btn-outline-primary' : 'btn-outline-dark'
            }`}
            onClick={() => subscribe()}>
            {currentPlan() ? 'Manage Plan' : 'Get started'}
          </button>
        </div>
      </div>
    </div>
  );
};
