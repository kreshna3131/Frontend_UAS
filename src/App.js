import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

// tampilan awal dan menu
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
// untuk kota
import Cirebon from "./pages/Kota/Cirebon";
import Pekalongan from "./pages/Kota/Pekalongan";
import Solo from "./pages/Kota/Solo";
import Yogyakarta from "./pages/Kota/Yogyakarta";
// navbar dan footer
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Solo" exact>
            <Solo />
          </Route>
          <Route path="/Cirebon" exact>
            <Cirebon />
          </Route>
          <Route path="/Pekalongan" exact>
            <Pekalongan />
          </Route>
          <Route path="/Yogyakarta" exact>
            <Yogyakarta />
          </Route>
          <Route path="/Gallery" exact>
            <Gallery />
          </Route>
          <Route path="/About" exact>
            <About />
          </Route>
          <Route path="/Contact" exact>
            <Contact />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
