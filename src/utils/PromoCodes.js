import { useEffect, useState } from 'react';

import CheckoutLogic from '../routes/Checkout/CheckoutLogic';
import { useStateValue } from '../helper/StateProvider/StateProvider';
import { getBasketTotal } from '../helper/StateProvider/reducer';

import axios from 'axios';

const PromoCodes = () => {
  const [{ basket }] = useStateValue();
  const [codes, setCodes] = useState([]);
  let { promoCode, setPromoCode } = CheckoutLogic();

  useEffect(() => {
    axios
      .get('http://localhost:3001/codes')
      .then((response) => {
        setCodes(response.data);
      })
      .catch((error) => {
        console.log('Error!!', error);
      });
  }, []);

  let basketValue = getBasketTotal(basket);
  let productValue = basket?.map((product) => product.price);

  //promo for all items in basket
  let basketValueAfterPromo;
  codes?.map((promo) => {
    if (promoCode === promo.code) {
      return (basketValueAfterPromo = basketValue * promo.value);
    }

    return basketValue;
  });

  //promo for single product
  let productValueAfterPromo;
  codes?.map((promo) => {
    if (promoCode === promo.code) {
      return (productValueAfterPromo = productValue * promo.value);
    }

    return productValue;
  });

  return {
    promoCode,
    setPromoCode,
    basketValue,
    basketValueAfterPromo,
    productValue,
    productValueAfterPromo,
  };
};

export default PromoCodes;
