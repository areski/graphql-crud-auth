import OneGraphAuth from 'onegraph-auth';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './styles/App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import BaseRouter from './routes';
import { ApolloProvider } from 'react-apollo';
import OneGraphApolloClient from 'onegraph-apollo-client';
import client from './apollo';

const APP_ID = "8e6b4171-1c97-4a00-ab1e-28f80ee9d47d";


class App extends React.Component {
  state = {
    isLoggedIn: true,
  };

  constructor(props) {
    super(props);
    this._oneGraphAuth = new OneGraphAuth({
      appId: APP_ID,
    });

    this._oneGraphClient = new OneGraphApolloClient({
      oneGraphAuth: this._oneGraphAuth,
    });

  }

  _authWithGithub = async () => {
    await this._oneGraphAuth.login('github');
    const isLoggedIn = await this._oneGraphAuth.isLoggedIn('github');
    console.log('Login succeeded');
    this.setState({ isLoggedIn: isLoggedIn });
  };

  _logoutWithGithub = async (e) => {
    e.preventDefault();
    await this._oneGraphAuth.logout('github').then(response => {
      if (response.result === 'success') {
        console.log('Logout succeeded');
        this.setState({ isLoggedIn: false });
      } else {
        console.log('Logout failed');
      }
    });
  };

  // componentDidMount() {
  //   this._oneGraphAuth
  //     .isLoggedIn('github')
  //     .then(isLoggedIn => this.setState({ isLoggedIn }));
  // }

  render() {
    return (
      <ApolloProvider client={client}>
        <Container>
          <BrowserRouter>

            {
              this.state.isLoggedIn
                ?
                <div>
                  <Row className="header-title">
                    <Col ld="auto">
                      <h1>CRUD-Demo</h1>
                    </Col>
                    <Col ld="auto">
                      <p className="header-login">
                        <Button variant="danger" onClick={this._logoutWithGithub}>Logout</Button>
                      </p>
                    </Col>
                  </Row>
                  <BaseRouter />
                </div>

                : (
                  <p className="header-login">
                    <Button variant="primary" onClick={this._authWithGithub}>Login with Github</Button>
                  </p>
                )
            }
          </BrowserRouter>
        </Container>
      </ApolloProvider>
    );
  }
}

export default App;
