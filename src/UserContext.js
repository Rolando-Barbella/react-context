import React from 'react';
import { FAKE_USER } from './api';

let UserContext;
// Consumer and Provider comes with Context
const { Provider, Consumer } = UserContext = React.createContext();

class UserProvider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: FAKE_USER,
			onLogin: this.handleLogin,
			onLogout: this.handleLogout,
			age: 50
		};
	}

  handleLogin = user => {
    this.setState({ user: user });
  };

  handleLogout = () => {
    this.setState({ user: null });
  };

	render() {
		return (
			<Provider value={this.state}>
				{this.props.children}
			</Provider>
		)
	}
}

export { UserProvider, Consumer as UserConsumer, UserContext }