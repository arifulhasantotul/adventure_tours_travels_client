import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddGallery from "./components/AddGallery/AddGallery";
import AddPackages from "./components/AddPackages/AddPackages";
import AddServices from "./components/AddServices/AddServices";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Packages from "./components/Packages/Packages";
import Services from "./components/Services/Services";
import AuthProvider from "./contexts/AuthProvider";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Orders from "./Pages/Orders/Orders";
import Register from "./Pages/Register/Register";

function App() {
   return (
      <>
         <AuthProvider>
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
                  <Route exact path="/packages">
                     <Packages></Packages>
                  </Route>
                  <Route exact path="/gallery">
                     <Gallery></Gallery>
                  </Route>
                  <Route path="/gallery/add">
                     <AddGallery></AddGallery>
                  </Route>
                  <Route path="/services">
                     <Services></Services>
                  </Route>
                  <Route path="/service/add">
                     <AddServices></AddServices>
                  </Route>
                  <Route exact path="/orders">
                     <Orders></Orders>
                  </Route>
                  <Route path="/orders/addPackage">
                     <AddPackages></AddPackages>
                  </Route>
                  <Route path="/login">
                     <Login></Login>
                  </Route>
                  <Route path="/register">
                     <Register></Register>
                  </Route>
                  <Route path="*">
                     <NotFound></NotFound>
                  </Route>
               </Switch>
               <Footer></Footer>
            </Router>
         </AuthProvider>
      </>
   );
}

export default App;
