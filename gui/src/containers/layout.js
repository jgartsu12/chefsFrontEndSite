import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';
import socialMediaFooter from './social-media-footer';


class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Header/>
        <Navbar/>
        <socialMediaFooter />
      </div>
    );
  }
}

export default Layout;