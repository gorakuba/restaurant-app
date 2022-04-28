import React, { useState } from "react";

//styled components
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

//checkout logic
import CheckoutLogic, { defaults } from "./CheckoutLogic";

//initialState
import { useStateValue } from "../../helper/StateProvider/StateProvider";

//basketTotal
import { getBasketTotal } from "../../helper/StateProvider/reducer";

//icons
import AddIcon from "@mui/icons-material/Add";

//react router
import { Link } from "react-router-dom";

const Checkout = () => {
  const { payment, setPayment, courier, setCourier } = CheckoutLogic();
  const [{ basket }] = useStateValue();

  return (
    <CheckoutStyle>
      <CheckoutBanner src={defaults.links.bannerUrl} />

      <CheckoutBody>
        <CheckoutCustomerInfo>
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
        </CheckoutCustomerInfo>
        <CheckoutConfirm>
          <ItemsList>
            {basket.length > 0 ? (
              <>
                {basket?.map((product) => (
                  <Item key={product.id}>
                    <h5 style={{ wordWrap: "wrap" }}>{product.name}</h5>
                    <p style={{ marginLeft: "8vw" }}>{product.price} zł</p>
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
          <Total>
            <p>Total</p>
            <p>{getBasketTotal(basket)} zł</p>
          </Total>
          <PromoCode>
            <Input placeholder={defaults.placeholders.promoCode} />
            <AddIcon
              style={{
                width: "10%",
                marginLeft: "-40px",
                cursor: "pointer",
                color: "gray",
              }}
            />
          </PromoCode>
          {basket.length === 0 ? (
            <PaymentButtonDisabled>Buy</PaymentButtonDisabled>
          ) : (
            <PaymentButton>Buy</PaymentButton>
          )}
        </CheckoutConfirm>
      </CheckoutBody>
    </CheckoutStyle>
  );
};

export default Checkout;
