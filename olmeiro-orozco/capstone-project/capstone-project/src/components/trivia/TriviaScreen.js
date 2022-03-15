import React from "react";
import { CentralGame } from "./CentralGame";
import { FooterGame } from "./FooterGame";
import { HeaderGame } from "./HeaderGame";
import { SidebarLeft } from "./SidebarLeft";
import { SidebarRight } from "./SidebarRight";

export const TriviaScreen = () => {
  return (
    <section className="trivia__main-content">
      <HeaderGame />
      <section className="trivia__main-central">
        <SidebarLeft />
        <CentralGame />
        <SidebarRight />
      </section>
      <FooterGame />
    </section>
  );
};