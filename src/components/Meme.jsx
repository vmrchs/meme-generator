import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    console.log(randomNumber);
    console.log(memesArray);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <form action="" className="form">
        <input type="text" className="form--input" placeholder="Top text" />
        <input type="text" className="form--input" placeholder="Bottom text" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼️{" "}
        </button>
      </form>
      <img src={memeImage} />
    </main>
  );
}
