import React from "react";
import memesData from "../memesData";

export default function Meme() {
  //   const [memeImage, setMemeImage] = React.useState(
  //     "http://i.imgflip.com/lbij.jpg"
  //   );

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    console.log(randomNumber);
    console.log(memesArray);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div action="" className="form">
        <input type="text" className="form--input" placeholder="Top text" />
        <input type="text" className="form--input" placeholder="Bottom text" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼️{" "}
        </button>
      </div>
      <img src={meme.randomImage} className="meme--image" />
    </main>
  );
}
