import { useState } from "react";

export const defaults = {
  //links
  links: {
    gpayUrl:
      "https://lh3.googleusercontent.com/E6mETzjkh34gu4Px2fLNLMg0eKZ2z0lrRjbT509tjDHBiYBXNIPYKcxakUcf1PRz72wa6DXFCJ2WDcCqSn9IqgDZsqpW4sqHceMLtQ",

    paypalUrl:
      "https://www.kontomaniak.pl/artykuly/image-thumb__336__image-preview/paypal.png",

    blikUrl:
      "https://i0.wp.com/mobirank.pl/wp-content/uploads/2019/03/blik-ikona.png",

    bannerUrl:
      "https://www.knowband.com/blog/wp-content/uploads/2016/09/sales-payment-banner.jpg",

    inpostUrl:
      "https://inpost.pl/sites/default/files/InPost_logotype_2019_white.png",

    dpdUrl: "https://papetka.pl/wp-content/uploads/2020/03/dpd.png",

    dhlUrl: "http://podrugie.pl/wp-content/uploads/2020/12/DHL-logo.png",
  },

  //click styles
  styles: {
    afterClickStyle: {
      icon: { border: "2px solid black" },
      text: { textDecoration: "underline", color: "#404545" },
    },
  },

  //placeholders
  placeholders: {
    email: "Enter your address email (user@email.com)",
    fisrtName: "Enter your name ...",
    surname: "Enter your surname ...",
    company: "Enter your company name ...",
    address: "Enter your address ...",
    phone: "Enter your phone number (XXX-XXX-XXX)",
    zipCode: "Enter your zip code and city (XX-XXX CITY)",
    promoCode: "Enter promo code ...",
  },
};

const CheckoutLogic = () => {
  const [payment, setPayment] = useState(0);
  const [courier, setCourier] = useState(0);

  return {
    payment,
    setPayment,
    courier,
    setCourier,
  };
};

export default CheckoutLogic;
