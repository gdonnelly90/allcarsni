import Lottie from 'lottie-react';
import loadingAnimation from '../assets/lottie/loading.json';

export const Loading = () => {
  return (
    <div className='loading'>
      <Lottie height='100' width='250' animationData={loadingAnimation} />
    </div>
  );
};
