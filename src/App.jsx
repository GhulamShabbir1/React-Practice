import "./App.css";
import Home from "./Components/Home";

function App() {
  // const risk = {
  //   no: 1234,
  //   color: "Black",
  // };

  return (
    <>
      <h1>Hello</h1>
      <Home
        Pages={100}
        name={{ name1: "Ghulam Shabbir", des: "Graduate", risk }
      }
      />
    </>
  );
}

export default App;
