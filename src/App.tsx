import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import CusinePage from './pages/cusines';
import { currentUser } from './store';


import LoginPage from './pages/LoginPage';
import RestaurantsPage from './pages/restaurants-page';
import OrderDetailsPage from './pages/order-details';
import RestaurantAlerts from './pages/restaurant-alerts';

function App() {
  return (
    <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/cusines" element={<CusinePage user={currentUser}/>} />        
        <Route path="/restaurants" element={<RestaurantsPage user={currentUser}/>} /> 
        <Route path="/orderDetails"  element={<OrderDetailsPage user={currentUser}/>}/>
        <Route path="/alert"  element={<RestaurantAlerts user={currentUser}/>}/>
    </Routes>
      
      
    
  );
}

export default App;
