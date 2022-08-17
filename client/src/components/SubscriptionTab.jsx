import React from 'react';
import { SubscriptionCard } from './SubscriptionCard';

export const SubscriptionTab = ({ subscriptions, onSubscription }) => {
  return (
    <main>
      <h2 className='display-6 text-center mt-5'>Subscription Plans</h2>
      <h4 className='fw-light text-center mb-5'>
        Simple pricing. No hidden fees. Advanced portal features
      </h4>
      <div className='row row-cols-1 row-cols-md-4 my-3 text-center'>
        {subscriptions &&
          subscriptions.map((sub, i) => (
            <SubscriptionCard key={i} sub={sub} onSubscription={onSubscription} />
          ))}
      </div>
    </main>
  );
};
