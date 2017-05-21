import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default function(ComposedComponent) {
  class Authenticate extends Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push('/');
      }
    }

    handleLogin = () => {
      this.context.router.push('/login');
    };
    handleReturn = () => {
      this.context.router.push('/');
    };
    render() {
      const actions = [
        <FlatButton
          label="ログインする"
          primary={true}
          onTouchTap={this.handleLogin}
        />,
        <FlatButton
          label="戻る"
          primary={true}
          onTouchTap={this.handleReturn}
        />,
      ];
      if (!this.props.isAuthenticated) {
        return (
          <Dialog
            title="ログインして下さい"
            actions={actions}
            modal={false}
            open={true}
          ></Dialog>
        );
      }
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired,
  }

  Authenticate.contextTypes = {
      router: React.PropTypes.object.isRequired
    }

  const mapStateToProps = (state) => {
    return  {
      isAuthenticated: state.auth.isAuthenticated
    };
  }

  return connect(mapStateToProps, {})(Authenticate);
}
