import React, { useState } from "react";

//styled components
import {
  Description,
  HeaderLine,
  ProductStyle,
  Price,
  AddSection,
  Counter,
  Plus,
  Name,
} from "./Product.styled";

//icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

//useStateValue
import { useStateValue } from "../../helper/StateProvider/StateProvider";

const Product = ({ id, name, description, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  const [clicked, setClicked] = useState(false);
  const [counter, setCounter] = useState(0);

  const counterPlus = () => {
    if (counter === 0) {
      dispatch({
        type: "ADD_TO_BASKET",
        product: {
          id: id,
          name: name,
          price: price,
          description: description,
        },
      });
    }

    setCounter(counter + 1);
  };

  const counterMinus = () => {
    if (counter > 0) {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        product: {
          id: id,
          name: name,
          price: price,
          description: description,
        },
      });

      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };

  const basketAdd = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      product: {
        id: id,
        name: name,
        price: price,
        description: description,
      },
    });

    setClicked((prev) => !prev);
    setCounter(counter + 1);
  };

  return (
    <ProductStyle>
      <HeaderLine>
        <Name>{name}</Name>

        <AddSection>
          {clicked && counter > 0 ? (
            <Counter>
              <AddIcon onClick={counterPlus} />
              {counter}
              <RemoveIcon onClick={counterMinus} />
            </Counter>
          ) : (
            <Plus onClick={basketAdd}>Add to basket</Plus>
          )}

          <Price>Price: {price} zł</Price>
        </AddSection>
      </HeaderLine>

      <Description color>{description}</Description>
    </ProductStyle>
  );
};

export default Product;
