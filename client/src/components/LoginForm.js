import React, { Component } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import validateInput from '../functions/validations/login';
import TextFieldGroup from './TextFieldGroup';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import logo from '../../images/green-logo.svg'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false,
      open: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name] : e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        (res) => this.context.router.push('/'),
        (err) => this.setState({ errors:  err.response.data.errors, isLoading: false, open: true })
      );
    }
  }

  handleClose = () => {
    this.setState({open: false});
  };

  render () {
    const { errors, isLoading} = this.state;
    const actions = [
      <FlatButton
        label="Okay"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];
    const LogoIconButton = () => (
      <IconButton href='/' style={{width: 120}}><img src={logo} alt="logo"/></IconButton>
    );
    return (
      <div>
        <Card className="container">
          <LogoIconButton/>
          <form onSubmit={this.onSubmit}>
            <h2 className="card-heading">Login</h2>
              <TextFieldGroup
                name="email"
                type="text"
                value={this.state.email}
                floatingLabelText="email"
                onChange={this.onChange}
                errorText={errors.email}
              />
              <TextFieldGroup
                name="password"
                type="password"
                value={this.state.password}
                floatingLabelText="password"
                onChange={this.onChange}
                errorText={errors.password}
              />
            <div className="button-line">
              <RaisedButton type="submit" label="log in" primary disabled={isLoading}/>
            </div>
            <CardText>Don't have an account? <Link to={'/signup'}>Create one</Link></CardText>
          </form>

          <Dialog
            title={errors.form}
            actions={actions}
            modal={false}
            open={this.state.open}
          >再度お試しください</Dialog>
        </Card>
      </div>
    )
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(null, { login })(LoginForm);
