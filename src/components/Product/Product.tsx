import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderLine,
  ProductStyle,
  Price,
  AddSection,
  Counter,
  Plus,
  Name,
  ProductImage,
} from './Product.styled';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ProductInterface } from '../../typings';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../slices/ProductSlice';
import { removeProductFromBasket } from '../../slices/ProductSlice';

const Product = ({
  id,
  name,
  description,
  price,
  count,
  photoSrc,
  title,
}: ProductInterface) => {
  const [clicked, setClicked] = useState(false);
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  let productGroup: string = title.toLowerCase().replace(/ /g, '');

  const basketAdd = () => {
    dispatch(addToBasket({ id, name, description, price, count, photoSrc }));

    setClicked(true);
    setCounter((current: number) => (current += 1));
  };

  const basketRemove = () => {
    if (counter > 0) {
      dispatch(
        removeProductFromBasket({
          id,
          name,
          description,
          price,
          count,
          photoSrc,
        })
      );

      setCounter((current: number) => (current -= 1));
    } else {
      setCounter(0);
    }
  };

  return (
    <ProductStyle>
      <ProductImage>
        <img src={photoSrc} alt={name} />
      </ProductImage>
      <HeaderLine>
        <Link
          to={`/${productGroup}/${id}`}
          style={{ textDecoration: 'none', color: 'var(--font)' }}
        >
          <Name>{name}</Name>
        </Link>

        <Price>Price: {price.toFixed(2)} zł</Price>

        <AddSection>
          {clicked && counter > 0 ? (
            <Counter>
              <AddIcon onClick={basketAdd} />
              {counter}
              <RemoveIcon onClick={basketRemove} />
            </Counter>
          ) : (
            <Plus onClick={basketAdd}>Add to basket</Plus>
          )}
        </AddSection>
      </HeaderLine>
    </ProductStyle>
  );
};

export default Product;
