import "./Styles/App.css"; // Global CSS
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import ContactForm from "./components/ContactForm"
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    // Router wrapper to allow page navigation
    <Router>
      <div>
        <Header />
        {/* home page should have 'exact' keyword otherwise home page will be 
        matched and displayed for every path 
        e.g /AboutUs would show it + home page */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={ContactForm} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
