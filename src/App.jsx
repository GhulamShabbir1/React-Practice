import "./App.css";
import Home from "./Components/Home";
import Conditional from "./Components/Conditional"

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Home
        Pages={100}
        name={{ name1: "Ghulam Shabbir", des: "Graduate" }}
        risk={{
          no: 1234,
          color: "Black",
        }}
      />
      <Conditional isGoal={true}/>
    </>
  );
}

export default App;
