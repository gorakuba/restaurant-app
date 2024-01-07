import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  Style,
  ProductDetailImage,
  ProductDetailsHeader,
  AddSection,
  Counter,
  Plus,
} from './ProductDetails.styled'
import { motion } from 'framer-motion'
import { ProductInterface } from '../../typings'
import { productDetailsAnimations } from '../../utils/animations'
import { useDispatch } from 'react-redux'
import { addToBasket, removeProductFromBasket } from '../../slices/ProductSlice'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const ProductDetails = () => {
  const [product, setProduct] = useState<ProductInterface[]>([])
  const { productId } = useParams()
  const [clicked, setClicked] = useState(false)
  const [counter, setCounter] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`/drinks/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data)
      })
  }, [productId])

  const basketAdd = () => {
    dispatch(addToBasket(product))

    setClicked(true)
    setCounter((current: number) => (current += 1))
  }

  const basketRemove = () => {
    if (counter > 0) {
      dispatch(removeProductFromBasket(product))

      setCounter((current: number) => (current -= 1))
    } else {
      setCounter(0)
    }
  }

  return (
    <>
      {!product ? (
        <p>Loading...</p>
      ) : (
        <>
          {product.map((product) => (
            <motion.div {...productDetailsAnimations.productDetails}>
              <Style>
                <ProductDetailImage>
                  <img src={product.photoSrc} alt={product.name} />
                </ProductDetailImage>
                <div>
                  <motion.div {...productDetailsAnimations.header}>
                    <ProductDetailsHeader>
                      <div>
                        <h2>{product.name}</h2>
                        <h3>Price: {product.price} zł</h3>
                      </div>

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
                    </ProductDetailsHeader>
                  </motion.div>

                  <motion.div {...productDetailsAnimations.description}>
                    <p>{product.description}</p>
                  </motion.div>
                </div>
              </Style>
            </motion.div>
          ))}
        </>
      )}
    </>
  )
}

export default ProductDetails
