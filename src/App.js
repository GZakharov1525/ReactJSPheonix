import "./Styles/App.css"; // Global CSS
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    // Router wrapper to allow page navigation
    <Router>
      <div>
        <Header />
        Clean slate/Main Body
        {/* home page should have 'exact' keyword otherwise home page will be 
        matched and displayed for every path 
        e.g /AboutUs would show it + home page */}
        <Route exact path="/" component={Home} /> 
        <Route path="/About" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
