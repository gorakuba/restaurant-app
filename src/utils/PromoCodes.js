import { codes } from "../resources/codes";
import CheckoutLogic from "../routes/Checkout/CheckoutLogic";
import { useStateValue } from "../helper/StateProvider/StateProvider";
import { getBasketTotal } from "../helper/StateProvider/reducer";

const PromoCodes = () => {
  const [{ basket }] = useStateValue();
  var { promoCode, setPromoCode } = CheckoutLogic();

  var basketValue = getBasketTotal(basket);
  var productValue = basket?.map((product) => product.price);

  //promo for all items in basket
  var basketValueAfterPromo;
  codes?.map((promo) => {
    if (promoCode === promo.code) {
      return (basketValueAfterPromo = basketValue * promo.value);
    }

    return basketValue;
  });

  //promo for single product
  var productValueAfterPromo;
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
