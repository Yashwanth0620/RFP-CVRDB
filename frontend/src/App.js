import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Header />
    </BrowserRouter>
  );
}

export default App;
