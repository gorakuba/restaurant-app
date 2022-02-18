import React from "react";
import { SpecialBlock, SpecialStyle } from "./Special.styled";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

function Special() {
  return (
    <>
      <Header />
      <SpecialStyle>
        <Sidebar />
        <SpecialBlock>special</SpecialBlock>
      </SpecialStyle>
    </>
  );
}

export default Special;
