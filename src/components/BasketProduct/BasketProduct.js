import React from "react";
import { useStateValue } from "../../helper/StateProvider";
import {
  Description,
  HeaderLine,
  ProductStyle,
  Price,
  RemoveSection,
} from "./BasketProduct.styled";

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
    <ProductStyle>
      <HeaderLine>
        <h3>{name}</h3>

        <RemoveSection>
          <div className='clicked__minus' onClick={basketRemove}>
            Remove from basket
          </div>

          <Price>Price: {price} zł</Price>
        </RemoveSection>
      </HeaderLine>
      <Description>{description}</Description>
    </ProductStyle>
  );
}

export default BasketProduct;
