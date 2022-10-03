import { ProductInterface } from '../../typings';
import {
  ProductSection,
  ProductStyle,
  Price,
  RemoveSection,
  Count,
} from './BasketProduct.styled';

const BasketProduct = ({
  id,
  name,
  description,
  price,
  count,
}: ProductInterface) => {
  return (
    <ProductStyle>
      <ProductSection>
        <h3>{name}</h3>

        <RemoveSection>
          <Count>{count}</Count>
          <Price>{price} zł</Price>
        </RemoveSection>
      </ProductSection>
    </ProductStyle>
  );
};

export default BasketProduct;
