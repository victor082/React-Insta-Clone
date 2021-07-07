import React from 'react';
import './Login.css';
import styled, { css } from 'styled-components';

export const Button = styled.button `
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  :hover {
    padding: 1em 2em;
  }
`;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmitLogin = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
      };

    loginHandler = event => {
        this.setState({ login: event.target.value });
      };

    render() {
        return(
            <form className="loginForm">
                <input
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.loginHandler}>
                </input>
                <input
                type="text"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.loginHandler}></input>
                <div className="loginButton">
                <button>Log In</button>
                </div>
            </form>
        )
    }
}

export default Login;