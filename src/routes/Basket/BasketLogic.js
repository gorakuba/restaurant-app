import { useStateValue } from "../../helper/StateProvider";

const BasketLogic = () => {
  const [{ basket }, dispatch] = useStateValue();

  const deleteItems = () => {
    dispatch({
      type: "REMOVE_ALL_FROM_BASKET",
    });
  };

  const checkout = () => {};

  return { basket, deleteItems, checkout };
};

export default BasketLogic;
