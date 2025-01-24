import { useState, useEffect } from 'react';

const ProgressBar = ({totalPrice}) => {
  const [progressWidth, setProgressWidth] = useState(0);
  const freeShippingThreshold = 69;

  useEffect(() => {
    setProgressWidth((totalPrice / freeShippingThreshold) * 100);
  }, [totalPrice]);

  return (
    <div className="h-full bg-palevioletred" style={{ width: `${progressWidth}%` }}></div>
  );
}

export default ProgressBar
