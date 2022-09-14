import { useState } from 'react';

const ShowDetailsOpen = () => {
  const [productClicked, setProductClicked] = useState(false);

  const isShowDetailsOpen = () => {
    setProductClicked(true);
  };

  return { productClicked, isShowDetailsOpen };
};

export default ShowDetailsOpen;
