import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";

function App() {
   return (
      <>
         <Router>
            <Navbar></Navbar>
            <Header></Header>
            <Switch>
               <Route exact path="/">
                  <Home></Home>
               </Route>
               <Route path="/home">
                  <Home></Home>
               </Route>
               <Route exact path="/dashboard">
                  <Dashboard></Dashboard>
               </Route>
            </Switch>
            <Footer></Footer>
         </Router>
      </>
   );
}

export default App;
