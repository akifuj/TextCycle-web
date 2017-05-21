import React, { Component } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signup';
import validateInput from '../functions/validations/signup';
import TextFieldGroup from './TextFieldGroup';
import logo from '../../images/green-logo.svg'


class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordconfirmation: '',
      errors: {},
      isLoading: false,
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
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
      this.props.userSignupRequest(this.state).then(
        () => this.context.router.push('/'),
        (err) => this.setState({ errors: err.response.data, isLoading: false })
      )
    }
  }

  render () {
    const errors = this.state.errors
    const LogoIconButton = () => (
      <IconButton href='/' style={{width: 120}}><img src={logo} alt="logo"/></IconButton>
    );
    return (
      <div>
          <Card className="container">
            <form onSubmit={this.onSubmit}>
              <LogoIconButton className="logo"/>
              <h2 className="card-heading">Sign Up</h2>
              <TextFieldGroup
                name="username"
                type="text"
                value={this.state.username}
                floatingLabelText="Username"
                onChange={this.onChange}
                errorText={errors.username}
              />
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
                floatingLabelText="Password"
                onChange={this.onChange}
                errorText={errors.password}
              />
              <TextFieldGroup
                name="passwordconfirmation"
                type="password"
                value={this.state.passwordconfirmation}
                floatingLabelText="Password confirmation"
                onChange={this.onChange}
                errorText={errors.passwordconfirmation}
              />
              <div className="button-line">
                <RaisedButton type="submit" label="Create New Account" primary disabled={this.state.isLoading}/>
              </div>
              <CardText>Already have an accoutn? <Link to={'/login'}>Log in</Link></CardText>
            </form>
          </Card>
      </div>
    )
  }
}

SignUpForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

SignUpForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(null, { userSignupRequest })(SignUpForm);
