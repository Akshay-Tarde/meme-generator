import React from "react";
import memesData from "../memesData";

function Meme() {
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    imgUrl = memesArray[randomNumber].url;
  }

  return (
    <main className="main">
      <form className="form" action="">
        <input className="input" placeholder="Top Text" type="text" required />
        <input
          className="input"
          placeholder="Bottom Text"
          type="text"
          required
        />
        <br />
        <button onClick={getMemeImage} className="button">
          Get a new meme image 🖼
        </button>
      </form>
    </main>
  );
}

export default Meme;
