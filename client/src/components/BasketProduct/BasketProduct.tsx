import { ProductInterface } from '../../typings';
import {
  ProductSection,
  ProductStyle,
  Price,
  RemoveSection,
  Count,
  BasketProductImage,
  BasketProductHeaderLine,
} from './BasketProduct.styled';

const BasketProduct = ({
  id,
  name,
  description,
  price,
  count,
  photoSrc,
}: ProductInterface) => {
  return (
    <ProductStyle>
      <ProductSection>
        <BasketProductHeaderLine>
          <BasketProductImage>
            <img src={photoSrc} alt={name} />
          </BasketProductImage>
          <h4>{name}</h4>
        </BasketProductHeaderLine>

        <RemoveSection>
          <Count>{count}</Count>
          <Price>{price.toFixed(2)} zł</Price>
        </RemoveSection>
      </ProductSection>
    </ProductStyle>
  );
};

export default BasketProduct;
