//promo codes
import { codes } from "../resources/codes";

//checkout logic
import CheckoutLogic from "../routes/Checkout/CheckoutLogic";

const PromoCodes = () => {
  var { promoCode, setPromoCode, basketValue, basketValueAfterPromo } =
    CheckoutLogic();

  codes?.map((promo) => {
    if (promoCode === promo.code) {
      return (basketValueAfterPromo = basketValue * promo.value);
    }

    return basketValue;
  });

  return {
    promoCode,
    setPromoCode,
    basketValue,
    basketValueAfterPromo,
  };
};

export default PromoCodes;
