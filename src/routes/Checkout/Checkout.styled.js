import styled from "styled-components";

export const CheckoutStyle = styled.div``;

export const CheckoutBanner = styled.img`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 25px 20px;
  margin: 10px;
  width: calc(100% - 20px);
`;

export const CheckoutBody = styled.div`
  display: flex;
  margin: 50px auto;
  width: 50vw;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 70vw;
  }
`;

export const CheckoutCustomerInfo = styled.div`
  width: 65%;
  margin-right: 10px;
`;

export const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  border: 1px solid lightgrey;
  border-radius: 15px;
  padding: 20px;

  h5 {
    margin: 10px 0 10px 20px;
    text-align: left;
  }

  b {
    cursor: pointer;
  }
`;

export const Payment = styled.img`
  width: 140px;
  height: 70px;
  border-radius: 15px;
  padding: 2px;
  margin: 10px;
  cursor: pointer;
`;

export const ContactInfo = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-radius: 15px;
  padding-bottom: 20px;
  margin-top: 20px;

  h5 {
    margin: 50px 30px 10px 30px;
    color: gray;
  }
`;

export const DeliveryInfo = styled(ContactInfo)`
  padding: 20px;

  h5 {
    margin: 20px 30px 10px 20px;
    color: gray;
  }
`;

export const Courier = styled(Payment)``;

export const Email = styled.input`
  margin: 40px auto 10px auto;
  padding: 15px;
  height: 40px;
  width: 35vw;
  border-radius: 10px;
  border: none;
`;

export const FirstName = styled(Email)``;

export const Surname = styled(Email)``;

export const Company = styled(Email)``;

export const Address = styled(Email)``;

export const Phone = styled(Email)``;

export const ZipCode = styled(Email)``;

export const CheckoutConfirm = styled.div`
  width: 50%;
  margin-left: 10px;
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 20px 20px 10px 20px;
    color: gray;
  }
`;

export const PromoCode = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled(Email)`
  width: 100%;
  margin: 10px auto;
`;

export const PaymentButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  color: darkgray;
  margin-top: 20px;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  width: 100%;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.color_7};
    transition: all ease-in-out;
    transition-duration: 400ms;
    color: black;
  }
`;

export const PaymentButtonDisabled = styled.button`
  margin-left: auto;
  margin-right: auto;
  color: darkgray;
  margin-top: 20px;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  width: 100%;
`;

export const ItemsList = styled.div`
  border-bottom: 1px solid lightgray;

  h3 {
    text-align: center;
    margin: 20px;
    color: gray;
  }
`;

export const BasketReturnButton = styled.button`
  display: block;
  margin: 0 auto 20px auto;
  padding: 15px;
  width: 100%;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  color: gray;

  &:hover {
    cursor: pointer;
    color: lightgray;
    background-color: gray;
    transition: all ease-in-out;
    transition-duration: 400ms;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  color: gray;
`;
