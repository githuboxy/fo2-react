import React from 'react'; 
import { NavBar } from '../../navbar/components/navbar';
import { Link } from 'react-router-dom';
import { reportActions } from '../actions/report.actions';
import { connect } from 'react-redux';
import Filters from './Filters';

class ReportTemplate extends React.Component {
    componentDidMount() {
        this.props.dispatch(reportActions.fetchReportData());
   }
    render(){
        
        const { reportdata } = this.props;
       

        return(
            <div>
                <NavBar/>
                <div className="pull-right btn btn-danger">
                    <Link to="/login" style={{color:'#fff'}}>Logout</Link>
                </div>
                <div className="panel panel-primary clearfix" style={{clear:'both'}}>
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
                            <Filters data={reportdata}/>
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
    const { reportdata } = state;
    return { reportdata };
}

const connectedReportTemplate = connect(mapStateToProps)(ReportTemplate);
export { connectedReportTemplate as ReportTemplate };
 