import React from 'react';
import logo from '../assets/img/localyte-logo.png';

const Header = (props) => (
	<div className="header">
	  <header className="App-header">
		<img src={logo} className="App-logo img-responsive" alt="logo" />
		<h1 className="App-title">{props.title}</h1>
	  </header>	
	</div>
);

Header.defaultProps = {
	title : 'Hyperlocal App For Merchant'
}

export default Header;