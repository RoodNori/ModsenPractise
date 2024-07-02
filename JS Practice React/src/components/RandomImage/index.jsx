import React from "react";

export default function RandomImage() {
  let [src, setSrc] = React.useState("");

  function getImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        console.log(res.status);
        return res.json();
    })
      .then((json) => setSrc(json.message))
      .catch((err) => alert("API недоступно"));
  }

  return (
    <>
      <h1>Random image</h1>
      <button onClick={getImage}>get</button>
      <br />
      <img src={src} />
    </>
  );
}
