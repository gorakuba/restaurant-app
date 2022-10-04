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
        <h4>{name}</h4>

        <RemoveSection>
          <Count>{count}</Count>
          <Price>{price} zł</Price>
        </RemoveSection>
      </ProductSection>
    </ProductStyle>
  );
};

export default BasketProduct;
