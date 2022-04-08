import React from "react";
import Header from "../../components/Header/Header";
import { Container, Content, Button } from "./Home.styled";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <Container color>
        <Content color>
          <h1>Welcome to our restaurant page!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
            libero placerat lectus ultricies placerat. Cras eros mi, vestibulum
            id arcu in, vehicula porta velit. Nunc ut nisi congue, ornare diam
            ut, pellentesque turpis. Maecenas faucibus massa neque, vel mattis
            magna malesuada quis. Nam nec lectus massa. Sed pharetra at urna eu
            fringilla. Vestibulum nisl enim, egestas at interdum ac, molestie ut
            arcu. Duis a enim a tellus interdum viverra et et ante. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Phasellus imperdiet nisi ac arcu ullamcorper
            pulvinar. Donec leo magna, lobortis vel purus ut, malesuada
            dignissim quam. Quisque porta urna nec euismod consequat. Nullam
            posuere justo sem, ut ultricies enim pulvinar vel. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. In vitae libero placerat
            lectus ultricies placerat. Cras eros mi, vestibulum id arcu in,
            vehicula porta velit. Nunc ut nisi congue, ornare diam ut,
            pellentesque turpis. Maecenas faucibus massa neque, vel mattis magna
            malesuada quis. Nam nec lectus massa. Sed pharetra at urna eu
            fringilla. Vestibulum nisl enim, egestas at interdum ac, molestie ut
            arcu. Duis a enim a tellus interdum viverra et et ante. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Phasellus imperdiet nisi ac arcu ullamcorper
            pulvinar. Donec leo magna, lobortis vel purus ut, malesuada
            dignissim quam. Quisque porta urna nec euismod consequat. Nullam
            posuere justo sem, ut ultricies enim pulvinar vel. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. In vitae libero placerat
            lectus ultricies placerat. Cras eros mi, vestibulum id arcu in,
            vehicula porta velit. Nunc ut nisi congue, ornare diam ut,
            pellentesque turpis. Maecenas faucibus massa neque, vel mattis magna
            malesuada quis. Nam nec lectus massa. Sed pharetra at urna eu
            fringilla. Vestibulum nisl enim, egestas at interdum ac, molestie ut
            arcu. Duis a enim a tellus interdum viverra et et ante. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Phasellus imperdiet nisi ac arcu ullamcorper
            pulvinar. Donec leo magna, lobortis vel purus ut, malesuada
            dignissim quam. Quisque porta urna nec euismod consequat. Nullam
            posuere justo sem, ut ultricies enim pulvinar vel.
          </p>
          <Link to='/specialsoftheday'>
            <Button color font>
              Start make your order
            </Button>
          </Link>
        </Content>
      </Container>
    </>
  );
}

export default Home;
