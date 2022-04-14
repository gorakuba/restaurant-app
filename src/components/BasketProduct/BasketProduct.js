import React from "react";
import { useStateValue } from "../../helper/StateProvider";
import {
  Description,
  HeaderLine,
  ProductStyle,
  Price,
  RemoveSection,
  Minus,
  Name,
} from "./BasketProduct.styled";
import { color } from "../../utilities/colors";

function BasketProduct({ id, name, price, description }) {
  const [{ basket }, dispatch] = useStateValue();

  const basketRemove = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
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
        <Name>{name}</Name>

        <RemoveSection>
          <Minus onClick={basketRemove}>Remove from basket</Minus>

          <Price>Price: {price} zł</Price>
        </RemoveSection>
      </HeaderLine>
      <Description>{description}</Description>
    </ProductStyle>
  );
}

export default BasketProduct;
