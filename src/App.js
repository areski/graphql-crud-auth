import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './styles/App.css';
import Container from 'react-bootstrap/Container';
import Login from './layout/Login';
import BaseRouter from './routes';



class App extends React.Component {
  state = {
    isAuthenticated: true,
  };
  render() {
    return (
      <Container>
        {
          this.state.isAuthenticated
            ?
            <BrowserRouter>
              <BaseRouter />
            </BrowserRouter>
            :
            <Login />
        }
      </Container>
    );
  }
}


export default App;
