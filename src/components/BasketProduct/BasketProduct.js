import React from "react";
import { useStateValue } from "../../helper/StateProvider";
import {
  Description,
  HeaderLine,
  ProductStyle,
  Price,
  AddSection,
} from "./BasketProduct.styled";
import RemoveIcon from "@mui/icons-material/Remove";

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
        <Price>Price: {price} zł</Price>
      </HeaderLine>
      <Description>{description}</Description>
      <AddSection>
        <RemoveIcon className='clicked__minus' onClick={basketRemove} />
      </AddSection>
    </ProductStyle>
  );
}

export default BasketProduct;
