//useStateValue
import { useStateValue } from "../../helper/StateProvider/StateProvider";

const BasketLogic = () => {
  const [{ basket }, dispatch] = useStateValue();

  const deleteItems = () => {
    dispatch({
      type: "REMOVE_ALL_FROM_BASKET",
    });
  };

  return { basket, deleteItems };
};

export default BasketLogic;
