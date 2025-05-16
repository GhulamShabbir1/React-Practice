import React from "react";

function Home({ Page, name, risk }) {
  const handleClick = () => {
    alert("Click me");
  };
  const shoot = (a) => {
    alert(a);
  };

  const raw = (b) => {
    alert(b);
  };
  return (
    <>
      <h1>This is Home</h1>
      <h2>{Page}</h2>
      <p>
        The person name is {name.name1} and he is {name.des}
      </p>
      <p>
        The person number is {risk.no} and his color is {risk.color}
      </p>

      <button type="button" onClick={handleClick}>
        Click me
      </button>
      <button onClick={() => shoot("Goal!")}>Take the shot!</button>
      <button
        type="button"
        onClick={() => {
          raw(7);
        }}
      >
        raw
      </button>
    </>
  );
}

export default Home;
