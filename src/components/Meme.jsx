import React from "react";
import memesData from "../memesData";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  }); // Setting the image url to empty

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage(event) {
    event.preventDefault();
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    // const randomImage = memesArray[randomNumber].url;
    // console.log("Hello");
    // console.log(randomImage);
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: memesArray[randomNumber].url,
      };
    });
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
      <img src={meme.randomImage} alt="" className="meme-image" />
    </main>
  );
}

export default Meme;
