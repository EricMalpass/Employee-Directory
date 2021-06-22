
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wrapper from "./componets/Wrapper";
import Employees from "./pages/Employees";
import Navbar from "./componets/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/Employees" component={Employees} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
