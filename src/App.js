import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Switch, Link,Routes } from "react-router-dom";
import Home from './Home';

function App() {
  return (
     <Router>
        <Routes>
        <Route exact path = {"/home"} element={<Home/>} />
        </Routes>
      </Router>
  );
}

export default App;
