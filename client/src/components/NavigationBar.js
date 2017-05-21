import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import logo from '../../images/white-logo.svg'

class NavigationBar extends Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    const LogoIconButton = () => (
      <IconButton href='/' style={{padding: '0 0 0 0', width: 65}}><img src={logo} alt="logo"/></IconButton>
    );
    const isAuthenticated = this.props.auth.isAuthenticated;
    return (
        <AppBar
          iconElementLeft={<LogoIconButton />}
          iconElementRight={isAuthenticated ? <FlatButton label="Logout" onTouchTap={this.logout.bind(this)}/> : <FlatButton label="Login" containerElement={<Link to='/login'/>} />}
        />
    );
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return  {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
