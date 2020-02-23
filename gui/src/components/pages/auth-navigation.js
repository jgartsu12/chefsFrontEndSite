import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';

class AuthNavigation extends Component{
    render() {
      return (
        <div className='auth-site-manager-navbar-items'>
          {/* auth to view site manager */}
          {
            this.props.isAuthenticated ?
            
            <navbarItem key='1' onClick={this.props.logout}>
                Logout
            </navbarItem>

            :

            <navbarItem key='1'>
                <Link to="/login">Login</Link>
            </navbarItem>
          }

            <navbarItem key='2'>
                <Link to='/site-manager'>Site Manager</Link>
            </navbarItem>
        </div>
      );
    }
  }


const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
}

export default withRouter(connect(null, mapDispatchToProps)(AuthNavigation));