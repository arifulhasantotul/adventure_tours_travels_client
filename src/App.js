import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddGallery from "./components/AddGallery/AddGallery";
import AddPackages from "./components/AddPackages/AddPackages";
import AddServices from "./components/AddServices/AddServices";
import Booking from "./components/Bookings/Booking";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import ManagePackages from "./components/ManagePackaages/ManagePackages";
import MyOrders from "./components/MyOrders/MyOrders";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Packages from "./components/Packages/Packages";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
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
                  <PrivateRoute path="/gallery/add">
                     <AddGallery></AddGallery>
                  </PrivateRoute>
                  <Route path="/services">
                     <Services></Services>
                  </Route>
                  <PrivateRoute path="/service/add">
                     <AddServices></AddServices>
                  </PrivateRoute>
                  <PrivateRoute exact path="/orders">
                     <Orders></Orders>
                  </PrivateRoute>
                  <PrivateRoute exact path="/orders/myOrders/:orderId">
                     <MyOrders></MyOrders>
                  </PrivateRoute>
                  <PrivateRoute path="/orders/myOrders/">
                     <MyOrders></MyOrders>
                  </PrivateRoute>
                  <Route path="/orders/booking">
                     <Booking></Booking>
                  </Route>
                  <PrivateRoute path="/orders/addPackage">
                     <AddPackages></AddPackages>
                  </PrivateRoute>
                  <PrivateRoute path="/orders/managePackage">
                     <ManagePackages></ManagePackages>
                  </PrivateRoute>
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
