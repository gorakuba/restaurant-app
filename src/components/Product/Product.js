import React, { useState } from "react";
import {
  Description,
  HeaderLine,
  ProductStyle,
  Price,
  AddSection,
  Counter,
} from "./Product.styled";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useStateValue } from "../../helper/StateProvider";
import { color } from "../../utilities/colors";

function Product({ id, name, description, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const [clicked, setClicked] = useState(false);
  const [counter, setCounter] = useState(0);

  const counterPlus = () => {
    setCounter(counter + 1);

    if (counter >= 0) {
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
  };

  const counterMinus = () => {
    setCounter(counter - 1);

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
    } else if (counter === 0) {
      setCounter(0);
    }
  };

  const basketAdd = () => {
    setClicked((prev) => !prev);
    setCounter(counter + 1);

    dispatch({
      type: "ADD_TO_BASKET",
      product: {
        id: id,
        name: name,
        price: price,
        description: description,
      },
    });
  };

  return (
    <ProductStyle color={color}>
      <HeaderLine>
        <h3>{name}</h3>

        <AddSection>
          {clicked && counter > 0 ? (
            <Counter>
              <AddIcon onClick={counterPlus} />
              {counter}
              <RemoveIcon onClick={counterMinus} />
            </Counter>
          ) : (
            <div className='product__clickedPlus' onClick={basketAdd}>
              Add to basket
            </div>
          )}
          <Price>Price: {price} zł</Price>
        </AddSection>
      </HeaderLine>

      <Description color={color}>{description}</Description>
    </ProductStyle>
  );
}

export default Product;
