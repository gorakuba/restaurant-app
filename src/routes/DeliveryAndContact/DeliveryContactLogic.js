const DeliveryContactLogic = () => {
  const position = [49.854851, 19.33852];
  const markerPosition = [49.85485, 19.33852];
  const zoom = 12;

  const send = (e) => {
    e.preventDefault();

    window.open("https://mail.google.com/#inbox?compose=new");
  };

  return { position, markerPosition, zoom, send };
};

export default DeliveryContactLogic;
