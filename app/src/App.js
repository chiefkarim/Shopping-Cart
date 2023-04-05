import logo from "./assets/images/2.png";
import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import BestSellers from "./components/bestSellers";
import "./assets/font/static/Montserrat-Regular.ttf";
function App() {
  return (
    <>
      <Header />
      <BestSellers />
    </>
  );
}

export default App;
