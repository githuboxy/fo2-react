import React from 'react'; 
import { NavBar } from '../../navbar/components/navbar';
import { Link } from 'react-router-dom';
import { reportActions } from '../actions/report.actions';
import { connect } from 'react-redux';
import Filters from './Filters';
import ReactTable, { ReactTableDefaults } from "react-table";
import '../../../node_modules/react-table/react-table.css';  
import '../../user/css/App.css';
Object.assign(ReactTableDefaults, {
    defaultPageSize: 10,
    minRows: 1
  });
class ReportTemplate extends React.Component {
    constructor(){
        super();
        this.doChange = this.doChange.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(reportActions.fetchReportData());
   }

   doChange(e){
        this.props.dispatch(reportActions.fetchReportTableData()); 
        
   }
    render(){
        
        const { reportdata,reportdatatable } = this.props; 
        var results  = reportdatatable.reportdatatable;
        var columns = [];
        if(results !== undefined) {
            console.log(results)
           results.map((item,index) => {
                if(index === 0){
                    var s =  item;                     
                    for(var k in s) {
                    
                        columns.push({
                        Header: k,
                        accessor: k 
                        });
                
                    }
                }
            }); 
            
        }

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
                            <Filters method={this.doChange} data={reportdata}/>
                            </div>
                        </div>

                        <div className="clearfix"></div>
                        <div className="col-md-12 col-sm-12 head-cls backwhite">
                            <div className="panel">
                                <div className="panel-heading clearfix">
                                    <h4 className="panel-title pull-left col-md-1">Search Results</h4>
                                </div>
                            </div>
                            <ReactTable resizable={false} noDataText="No Data Found!" data={results} columns={columns}  className="table table-striped" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) { 
    console.log("mapStateToProps")
    console.log(state)
    const { reportdata,reportdatatable } = state;
    return { reportdata,reportdatatable };
}

const connectedReportTemplate = connect(mapStateToProps)(ReportTemplate);
export { connectedReportTemplate as ReportTemplate };
 