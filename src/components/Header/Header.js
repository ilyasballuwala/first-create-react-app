import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/localyte-logo.png';
import UserImage from '../../assets/img/person.svg';

class Header extends React.Component{
	state = {
    isMenuOpen: false,
    appName: process.env.REACT_APP_NAME,
	}

  componentDidMount(){
      document.body.addEventListener('click', this.handleBodyClick.bind(this));
  }

  componentWillUnmount(){
      document.body.removeEventListener('click', this.handleBodyClick.bind(this));
  }

  handleBodyClick(){
      this.setState(() => ({ isMenuOpen: false }));
  }

	onToggleMenu(){
		this.setState((prevState) => ({
			isMenuOpen : !prevState.isMenuOpen
		}));
	}

	renderLogo() {
    return (
      <Link to={{ pathname: '/' }} className="al-logo clearfix">
				<img src={Logo} className="img-responsive app-logo" alt="site-logo"/><div className="projectTitle">{this.props.title}</div>
			</Link>
    );
	}
	
	renderUserSection() {
    return (
      <div className="user-profile clearfix">
        <div className={`al-user-profile dropdown ${this.state.isMenuOpen ? 'open' : ''}`}>
          <a className="profile-toggle-link dropdown-toggle" onClick={this.onToggleMenu.bind(this)}>
            <img src={UserImage} className="user-image" alt="userimage" />
          </a>
          <ul className="top-dropdown-menu profile-dropdown dropdown-menu">
            <li><i className="dropdown-arr"></i></li>
            <li><Link to="/user-profile"><i className="fa fa-user"></i>Profile</Link></li>
            <li><Link to="/user-settings"><i className="fa fa-cog"></i>Settings</Link></li>
            <li>
              <a className="signout" onClick={e => this.onLogout()}>
                <i className="fa fa-power-off"></i>Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
	}
	
	render(){
		return(
			<div className="page-top clearfix" scroll-position="scrolled" max-height="50">
				{this.renderLogo()}
				{this.renderUserSection()}
			</div>
		);
	}
}

Header.defaultProps = {
	title : 'Hyperlocal App For SAAS - Merchant'
}

export default Header;