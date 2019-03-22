import React from 'react'; 
import { NavBar } from '../../navbar/components/navbar';
import { Link } from 'react-router-dom';

class Helloworld extends React.Component {
    render(){
        return(
            <div>
                <NavBar />
                <div className="pull-right btn btn-danger">
                    <Link to="/login" style={{color:'#fff'}}>Logout</Link>
                </div>
                <div className="clearfix"></div>
                <h1>Hello World!!</h1>
            </div>
        );
    }
}

export default Helloworld;