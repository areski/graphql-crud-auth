import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ListCustomer from './components/ListCustomer';
import EditCustomer from './components/EditCustomer';


const BaseRouter = () => (
  <div>
    <Route exact path='/' component={ListCustomer} />
    <Route path='/list' component={ListCustomer} />
    <Route path='/edit/:id' children={<EditCustomer />} />
    <Route
      exact
      path='/logout'
      render={() => (
        <div>
          <h1>Logout</h1>
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        </div>
      )
      }
    />

  </div>
);


export default BaseRouter;