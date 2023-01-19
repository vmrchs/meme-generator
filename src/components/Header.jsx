import React from "react";
import { ReactComponent as MeGusta } from "../assets/me-gusta.svg";

export default function Header() {
  return (
    <header>
      <MeGusta className="logo" />
      <div className="header--text">
        <h1>Meme Machine</h1>
        <h4>React Course - Project 3</h4>
      </div>
    </header>
  );
}
