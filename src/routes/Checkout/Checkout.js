import React from "react";
import { Link } from "react-router-dom";

import CheckoutLogic, { defaults } from "./CheckoutLogic";

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
  PromoCode,
  Surname,
  Total,
  ZipCode,
} from "./Checkout.styled";

import { useStateValue } from "../../helper/StateProvider/StateProvider";
import { motion } from "framer-motion";
import PromoCodes from "../../utils/PromoCodes";

const Checkout = () => {
  const { payment, setPayment, courier, setCourier } = CheckoutLogic();
  const { promoCode, setPromoCode, basketValue, basketValueAfterPromo } =
    PromoCodes();

  const [{ basket }] = useStateValue();

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
            <PaymentInfo>
              <h5>Payment options: </h5>
              <div>
                <Payment
                  src={defaults.links.gpayUrl}
                  onClick={() => setPayment(1)}
                  style={
                    payment === 1 ? defaults.styles.afterClickStyle.icon : null
                  }
                />
                <Payment
                  src={defaults.links.paypalUrl}
                  onClick={() => setPayment(2)}
                  style={
                    payment === 2 ? defaults.styles.afterClickStyle.icon : null
                  }
                />
                <Payment
                  src={defaults.links.blikUrl}
                  onClick={() => setPayment(3)}
                  style={
                    payment === 3 ? defaults.styles.afterClickStyle.icon : null
                  }
                />
              </div>

              <div style={{ margin: "20px 0 10px 20px" }}>
                or{" "}
                <b
                  onClick={() => setPayment(4)}
                  style={
                    payment === 4 ? defaults.styles.afterClickStyle.text : null
                  }
                >
                  pay on delivery!
                </b>
              </div>
            </PaymentInfo>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
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
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <DeliveryInfo>
              <h5>Delivery options:</h5>

              <div>
                <Courier
                  src={defaults.links.dhlUrl}
                  onClick={() => setCourier(1)}
                  style={
                    courier === 1 ? defaults.styles.afterClickStyle.icon : null
                  }
                />
                <Courier
                  src={defaults.links.dpdUrl}
                  onClick={() => setCourier(2)}
                  style={
                    courier === 2 ? defaults.styles.afterClickStyle.icon : null
                  }
                />
                <Courier
                  src={defaults.links.inpostUrl}
                  onClick={() => setCourier(3)}
                  style={
                    courier === 3 ? defaults.styles.afterClickStyle.icon : null
                  }
                />
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
                  {basket?.map((product) => (
                    <Item key={product.id}>
                      <h5>{product.name}</h5>
                      <p>{product.price} zł</p>
                    </Item>
                  ))}
                </>
              ) : (
                <>
                  <h3>You have any products in basket!</h3>
                  <Link to='/basket' style={{ textDecoration: "none" }}>
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
              <p>{promoCode === "" ? basketValue : basketValueAfterPromo} zł</p>
            </Total>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <PromoCode>
              {basket.length === 0 ? (
                <Input placeholder={defaults.placeholders.promoCode} disabled />
              ) : (
                <Input
                  placeholder={defaults.placeholders.promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
              )}
            </PromoCode>
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
