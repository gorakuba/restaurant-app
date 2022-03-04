import React from "react";
import {
  Description,
  HeaderLine,
  ProductStyle,
  Price,
  AddSection,
} from "./Product.styled";
import AddIcon from "@mui/icons-material/Add";
import { useStateValue } from "../../helper/StateProvider";

function Product({ id, name, price, description }) {
  const [{ basket }, dispatch] = useStateValue();

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
  };

  return (
    <ProductStyle>
      <HeaderLine>
        <h3>{name}</h3>
        <Price>Price: {price} zł</Price>
      </HeaderLine>

      <Description>{description}</Description>

      <AddSection>
        <AddIcon className='clicked__plus' onClick={basketAdd} />
      </AddSection>
    </ProductStyle>
  );
}

export default Product;
