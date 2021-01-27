import React, { Component } from 'react';

import Toolbar from '../Menu/Toolbar';
import SideDrawer from '../Menu/SideDrawer'
import Backdrop from '../Menu/Backdrop';
import Footer from '../Footer';


class Wrapper extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
      this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen};
      });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }
  render(){
    let backdrop;
    if (this.state.sideDrawerOpen){
      backdrop =<Backdrop click={this.backdropClickHandler} />;
    }

    let drawerClasses = 'wrapper';
    if (this.state.sideDrawerOpen){
        drawerClasses = 'wrapper blur';
    }
    return (
      
      <div className={this.props.className} >
        <header className="App-top">
          <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} closeBtn={this.state.sideDrawerOpen}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
        </header>
        <main className="App-main">
          {backdrop}

          <div className={drawerClasses} >
            
                {this.props.children}
          
            <Footer />
          </div>
        </main>
      </div>
    );
  }
  
}


export default Wrapper;
