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

        if(result !== undefined){
            linkmap= result.map((item) => {
                if(item.label === "Home"){
                    return  <NavBarItem key={item.id} classname={"active"} item={item}/>
                }else if(item.subitem !== undefined){
                    return <NavBarItem classname="dropdown" key={item.id} item={item} />
                }else{ 
                    return <NavBarItem classname="dropdown" key={item.id} item={item} />                 
                }  
            });
        }
 
        return(
            <div id="navbar" style={{float:'left'}}>
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
    return { navlinks };
}

const connectedNavBar = connect(mapStateToProps)(NavBar);
export { connectedNavBar as NavBar };
 