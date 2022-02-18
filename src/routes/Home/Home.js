import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { HomeStyle, HomeBlock } from "./Home.styled";

function Home() {
  return (
    <>
      <Header />
      <HomeStyle>
        <Sidebar />
        <HomeBlock>home</HomeBlock>
      </HomeStyle>
    </>
  );
}

export default Home;
