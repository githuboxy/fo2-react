import React from 'react';
import '../css/App.css'; 
import '../css/index.css';
import '../css/custom.css';
import '../css/layout.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavBar } from '../../navbar/components/navbar';
import { userActions } from '../actions/user.actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll()); 
    }
    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }
    render() {
         console.log(this.props)
        const { user, users } = this.props;
        return (
            <div>
                <NavBar /><div className="pull-right btn btn-danger"><Link to="/login" style={{color:'#fff'}}>Logout</Link></div>
                <div className="panel panel-primary" style={{clear:'both'}}>
                    <div className="panel-heading">
                        <h4 className="panel-title">Trade History</h4>
                    </div>
                    <div className="panel-body">
                        <div className="col-md-12 col-sm-12 head-cls">
                            <div className="panel">
                                <div className="panel-heading clearfix">
                                    <h4 className="panel-title pull-left col-md-2">Filter Criteria: </h4>
                                    <a className="pull-right" onClick={this.tottgleDisplay}>
                                        <i className="fa fa-caret-down"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="filter_div" id="filter_div" >              
                  
                            </div>
                        </div>

                        <div className="clearfix"></div>
                        <div className="col-md-12 col-sm-12 head-cls backwhite">
                            <div className="panel">
                                <div className="panel-heading clearfix">
                                    <h4 className="panel-title pull-left col-md-1">Search Results</h4>
                    
                     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users 
    };
}
 
const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };