import { useState } from "react";

//initialState
import { useStateValue } from "../../helper/StateProvider/StateProvider";

//basketTotal
import { getBasketTotal } from "../../helper/StateProvider/reducer";

//promo codes
import { codes } from "../../utilities/codes";

const PromoCodes = () => {
  const [promoCode, setPromoCode] = useState("");
  const [{ basket }] = useStateValue();

  var basketValue = getBasketTotal(basket);
  var basketValueAfterPromo;
  console.log("clicked!");

  codes?.map((promo) => {
    if (promoCode === promo.code) {
      return (basketValueAfterPromo = basketValue * promo.value);
    } else {
      return (basketValueAfterPromo = basketValue);
    }

    // return basketValue;
  });

  return {
    promoCode,
    setPromoCode,
    basketValue,
    basketValueAfterPromo,
  };
};

export default PromoCodes;
