import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom"
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (

    <div className="App">

      <Navbar />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>

    </div>



  );
}

export default App;
