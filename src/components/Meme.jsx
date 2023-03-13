import React from "react";

function Meme() {
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
        <button className="button">Get a new meme image 🖼 </button>
      </form>
    </main>
  );
}

export default Meme;
