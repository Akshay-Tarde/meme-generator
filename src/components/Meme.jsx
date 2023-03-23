import React from "react";
import memesData from "../memesData";

function Meme() {
  const [meme, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    allMemeImages: memesData,
  }); // Setting the image url to empty

  function getMemeImage(event) {
    event.preventDefault();
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main className="main">
      <form className="form" action="">
        <input className="input" placeholder="Top Text" type="text" />
        <input className="input" placeholder="Bottom Text" type="text" />
        <br />
        <button onClick={getMemeImage} className="button">
          Get a new meme image 🖼
        </button>
      </form>
      <img src={memeImage} alt="" className="meme-image" />
    </main>
  );
}

export default Meme;
