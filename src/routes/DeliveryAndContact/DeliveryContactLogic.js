import { useState } from "react";

const DeliveryContactLogic = () => {
  const [hover, setHover] = useState(false);

  const mouseOut = () => {
    setHover(false);
  };

  const mouseOn = () => {
    setHover(true);
  };

  return { hover, mouseOut, mouseOn };
};

export default DeliveryContactLogic;
