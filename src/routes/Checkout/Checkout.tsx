import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Address,
  BasketReturnButton,
  CheckoutBanner,
  CheckoutBody,
  CheckoutConfirm,
  CheckoutCustomerInfo,
  CheckoutStyle,
  Company,
  ContactInfo,
  Courier,
  DeliveryInfo,
  Email,
  FirstName,
  Input,
  Item,
  ItemsList,
  Payment,
  PaymentButton,
  PaymentButtonDisabled,
  PaymentInfo,
  Phone,
  Surname,
  Total,
  ZipCode,
  PaymentCheckGPay,
  PaymentCheckPayPal,
  PaymentCheckBlik,
  CourierCheckDHL,
  CourierCheckDPD,
  CourierCheckInPost,
  PayOnDelivery,
  PayOnDeliveryIcon,
} from './Checkout.styled';

import { defaults } from '../../utils/checkout';

import axios from 'axios';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { ProductInterface } from '../../typings';
import { getBasketTotal } from '../../states/states';

import DoneIcon from '@mui/icons-material/Done';

const Checkout = () => {
  const [payment, setPayment] = useState(0);
  const [courier, setCourier] = useState(0);
  const basket = useSelector((state: RootState) => state.product.basket);

  return (
    <CheckoutStyle>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <CheckoutBanner src={defaults.links.bannerUrl} />
      </motion.div>

      <CheckoutBody>
        <CheckoutCustomerInfo>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactInfo>
              <h5>Contact information:</h5>

              <Email placeholder={defaults.placeholders.email} />
              <FirstName placeholder={defaults.placeholders.fisrtName} />
              <Surname placeholder={defaults.placeholders.surname} />
              <Company placeholder={defaults.placeholders.company} />
              <Address placeholder={defaults.placeholders.address} />
              <Phone placeholder={defaults.placeholders.phone} />
              <ZipCode placeholder={defaults.placeholders.zipCode} />
            </ContactInfo>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <PaymentInfo>
              <h5>Payment options: </h5>
              <div style={{ display: 'flex' }}>
                <div>
                  <Payment
                    src={defaults.links.gpayUrl}
                    onClick={() => setPayment(1)}
                  />
                  <PaymentCheckGPay
                    style={
                      payment === 1 ? { display: 'flex' } : { display: 'none' }
                    }
                  >
                    <DoneIcon />
                  </PaymentCheckGPay>
                </div>
                <div>
                  <Payment
                    src={defaults.links.paypalUrl}
                    onClick={() => setPayment(2)}
                  />
                  <PaymentCheckPayPal
                    style={
                      payment === 2 ? { display: 'flex' } : { display: 'none' }
                    }
                  >
                    <DoneIcon />
                  </PaymentCheckPayPal>
                </div>
                <div>
                  <Payment
                    src={defaults.links.blikUrl}
                    onClick={() => setPayment(3)}
                  />

                  <PaymentCheckBlik
                    style={
                      payment === 3 ? { display: 'flex' } : { display: 'none' }
                    }
                  >
                    <DoneIcon />
                  </PaymentCheckBlik>
                </div>
              </div>

              <PayOnDelivery>
                or <b onClick={() => setPayment(4)}>pay on delivery!</b>
                <PayOnDeliveryIcon
                  style={
                    payment === 4 ? { display: 'flex' } : { display: 'none' }
                  }
                >
                  <DoneIcon />
                </PayOnDeliveryIcon>
              </PayOnDelivery>
            </PaymentInfo>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <DeliveryInfo>
              <h5>Delivery options:</h5>
              <div style={{ display: 'flex' }}>
                <div>
                  <Courier
                    src={defaults.links.dhlUrl}
                    onClick={() => setCourier(1)}
                  />
                  <CourierCheckDHL
                    style={
                      courier === 1 ? { display: 'flex' } : { display: 'none' }
                    }
                  >
                    <DoneIcon />
                  </CourierCheckDHL>
                </div>
                <div>
                  <Courier
                    src={defaults.links.dpdUrl}
                    onClick={() => setCourier(2)}
                  />
                  <CourierCheckDPD
                    style={
                      courier === 2 ? { display: 'flex' } : { display: 'none' }
                    }
                  >
                    <DoneIcon />
                  </CourierCheckDPD>
                </div>
                <div>
                  <Courier
                    src={defaults.links.inpostUrl}
                    onClick={() => setCourier(3)}
                  />
                  <CourierCheckInPost
                    style={
                      courier === 3 ? { display: 'flex' } : { display: 'none' }
                    }
                  >
                    <DoneIcon />
                  </CourierCheckInPost>
                </div>
              </div>
            </DeliveryInfo>
          </motion.div>
        </CheckoutCustomerInfo>

        <CheckoutConfirm>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <ItemsList>
              {basket.length > 0 ? (
                <>
                  {basket.map((product: ProductInterface) => (
                    <Item key={product.id}>
                      <h5>{product.name}</h5>
                      <p>{product.price} zł</p>
                    </Item>
                  ))}
                </>
              ) : (
                <>
                  <h3>You have any products in basket!</h3>
                  <Link to='/basket' style={{ textDecoration: 'none' }}>
                    <BasketReturnButton>Back to basket</BasketReturnButton>
                  </Link>
                </>
              )}
            </ItemsList>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Total>
              <p>Total</p>
              <p>{getBasketTotal(basket)} zł</p>
            </Total>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {basket.length === 0 ? (
              <PaymentButtonDisabled>Buy</PaymentButtonDisabled>
            ) : (
              <PaymentButton>Buy</PaymentButton>
            )}
          </motion.div>
        </CheckoutConfirm>
      </CheckoutBody>
    </CheckoutStyle>
  );
};

export default Checkout;
