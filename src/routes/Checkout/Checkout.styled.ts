import styled from 'styled-components';

export const CheckoutStyle = styled.div``;

export const CheckoutBanner = styled.img`
  padding: 25px 20px;
  margin: 10px;
  width: calc(100% - 20px);
`;

export const CheckoutBody = styled.div`
  display: flex;
  margin: 0 auto;
  width: 50vw;
  padding-bottom: 50px;

  @media ${(props) => props.theme.breakpoints.xl} {
    flex-direction: column;
    align-items: center;
    width: 100%;
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
  color: ${(props) => props.theme.fonts.colors.grayFont};
  border: 1px solid lightgrey;
  border-radius: 15px;
  padding: 20px;
  margin-top: 20px;

  h5 {
    margin: 10px 0 10px 20px;
    text-align: left;
  }
`;

export const Payment = styled.img`
  width: 140px;
  height: 70px;
  border-radius: 15px;
  margin: 10px 10px 0 10px;
  cursor: pointer;
`;

export const PayOnDelivery = styled.div`
  margin: 20px 0 10px 20px;
  display: flex;
  align-items: center;

  b {
    margin-left: 6px;
    cursor: pointer;
  }
`;

export const PayOnDeliveryIcon = styled.div`
  border-radius: 999px;
  color: ${(props) => props.theme.fonts.colors.whiteFont};
  background-color: green;
  width: 25px;
  height: 25px;
  margin-left: 6px;
`;

export const PaymentCheckGPay = styled.div`
  height: 40px;
  width: 140px;
  background-color: green;
  margin: -16px 0 0 10px;
  color: ${(props) => props.theme.fonts.colors.whiteFont};
  padding: 4px;
  justify-content: center;
  align-items: flex-end;
  border-radius: 0 0 15px 15px;
`;

export const PaymentCheckPayPal = styled(PaymentCheckGPay)``;
export const PaymentCheckBlik = styled(PaymentCheckGPay)``;
export const CourierCheckDHL = styled(PaymentCheckGPay)``;
export const CourierCheckDPD = styled(PaymentCheckGPay)``;
export const CourierCheckInPost = styled(PaymentCheckGPay)``;

export const ContactInfo = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-radius: 15px;
  padding-bottom: 20px;
  margin-top: 20px;

  h5 {
    margin: 50px 30px 10px 30px;
    color: ${(props) => props.theme.fonts.colors.grayFont};
  }
`;

export const DeliveryInfo = styled(ContactInfo)`
  height: 220px;
  padding: 20px;

  h5 {
    margin: 20px 30px 10px 20px;
    color: ${(props) => props.theme.fonts.colors.grayFont};
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

  @media ${(props) => props.theme.breakpoints.lg} {
    width: calc(100% - 40px);
  }
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

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-left: 0;
    margin-top: 50px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 20px 20px 10px 20px;
    color: ${(props) => props.theme.fonts.colors.grayFont};
  }
`;

export const Input = styled(Email)`
  width: 100%;
  margin: 10px auto;
`;

export const PaymentButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  color: ${(props) => props.theme.fonts.colors.darkGrayFont};
  margin-top: 20px;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: ${(props) => props.theme.fonts.size.fontSize16};
  width: 100%;

  &:hover {
    cursor: pointer;
    transition: all ease-in-out;
    transition-duration: 400ms;
    color: ${(props) => props.theme.fonts.colors.blackFont};
  }
`;

export const PaymentButtonDisabled = styled.button`
  margin-left: auto;
  margin-right: auto;
  color: ${(props) => props.theme.fonts.colors.darkGrayFont};
  margin-top: 20px;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: ${(props) => props.theme.fonts.size.fontSize16};
  width: 100%;
`;

export const ItemsList = styled.div`
  border-bottom: 1px solid lightgray;

  h3 {
    text-align: center;
    margin: 60px;
    color: ${(props) => props.theme.fonts.colors.grayFont};
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
  font-size: ${(props) => props.theme.fonts.size.fontSize16};
  color: ${(props) => props.theme.fonts.colors.grayFont};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.fonts.colors.lightGrayFont};
    background-color: ${(props) => props.theme.colors.states.gray};
    transition: all ease-in-out;
    transition-duration: 400ms;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  color: ${(props) => props.theme.fonts.colors.grayFont};
`;
