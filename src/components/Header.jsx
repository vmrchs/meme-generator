import React from "react";
import { ReactComponent as MeGusta } from "../assets/me-gusta.svg";

export default function Header() {
  return (
    <header>
      <MeGusta className="logo" />
      <h1>Meme Machine</h1>
    </header>
  );
}
