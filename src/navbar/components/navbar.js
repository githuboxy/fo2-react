import React from 'react';
import NavBarItem from './navbaritem';  
import { connect } from 'react-redux';

import { navbarActions } from '../actions/navbar.actions';

class NavBar extends React.Component {
    componentDidMount() {
         this.props.dispatch(navbarActions.fetchNavlinks());
    }
    render(){
        const { navlinks } = this.props;
        
       let result = navlinks.navlinks;
       let linkmap;
       if(result !== undefined)
       linkmap= result.map((item) => {
            return  <NavBarItem key={item.id} name={item.label}/>
        })
 
        return(
            <div id="navbar">
              <nav className="navbar navbar-default navbar-static-top">
               <div className="collapse navbar-collapse" id="navbar-collapse-1">
                  <ul className="nav navbar-nav">
                  {linkmap}
                  </ul>
              </div>
             </nav>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { navlinks } = state;
    return {
        navlinks 
    };
}

const connectedNavBar = connect(mapStateToProps)(NavBar);
export { connectedNavBar as NavBar };
 