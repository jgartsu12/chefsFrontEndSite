import React from 'react';
import { Route } from 'react-router-dom';

// import FoodListView from './containers/FoodListView';
// import FoodDetailView from './containers/FoodDetailsView';
import Login from './containers/Login';
import Signup from './containers/Signup';

const BaseRouter = () => (
    <div>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/foods/foodsList/" component={FoodListView} /> */}
        {/* <Route exact path="foods/:/foodID/" component={FoodDetailView} /> */}
        <Route exact path="/login/" component={Login} />
        <Route exact path="/signup/" component={Signup} />
    </div>
);

export default BaseRouter;