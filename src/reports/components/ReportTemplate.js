import React from 'react'; 
import { NavBar } from '../../navbar/components/navbar';
import { Link } from 'react-router-dom';
import { reportActions } from '../actions/report.actions';
import { connect } from 'react-redux';
import Filters from './Filters';
// import ReactTable, { ReactTableDefaults } from "react-table";
// import '../../../node_modules/react-table/react-table.css';  
// import '../../user/css/App.css';
import MUIDataTable from "mui-datatables";
import FormData from 'form-data';
// Object.assign(ReactTableDefaults, {
//     defaultPageSize: 5,
//     minRows: 1
//   });
class ReportTemplate extends React.Component {
    constructor(){
        super();
        this.state={
            results:[],
            results1:[],
            reportdata:[],
            reportdatatable:[],
            columns:[],
            screenName:''
        }
        this.doChange = this.doChange.bind(this);
    }
    componentDidMount() { 
        this.getFilter()
   }
   getFilter(){
    this.props.dispatch(reportActions.fetchReportData());
   }

   shouldComponentUpdate(nextProps,nextState) {   
        const update = this.props.reportdata !== nextProps.reportdata; 
        if(!update){
           this.getFilter()
           this.setState({results:[]})
           this.setState({columns:[]})
           
        }

            return true;
    }
   doChange(fillObj){
        var bodyFormData = new FormData(); 
        for (name in fillObj) { 
            bodyFormData.set(name, fillObj[name]); 
        }
        this.props.dispatch(reportActions.fetchReportTableData(bodyFormData)); 
        
   }
    render(){
       
         

        this.state.reportdata = this.props.reportdata;
        this.state.reportdatatable = this.props.reportdatatable; 
        this.state.results1  = this.state.reportdata.reportdata;

       
        
        
        if( this.state.results1 !== undefined)
             this.state.results1.map((item,index) => {
                if(item.type === "Title")
                 this.state.screenName = item.name

                if(item.name === "data")
                this.state.results = item.values
            })
       
        
        if(this.state.results !== undefined) { 
            this.state.results.map((item,index) => {
                if(index === 0){
                    var s =  item;                     
                    for(var k in s) {
                    
                        this.state.columns.push(k);
                
                    }
                }
            }); 
           
        }
        const columns1 = ["Name", "Company", "City", "State"];

        const data1 = [
         ["Joe James", "Test Corp", "Yonkers", "NY"],
         ["John Walsh", "Test Corp", "Hartford", "CT"],
         ["Bob Herm", "Test Corp", "Tampa", "FL"],
         ["James Houston", "Test Corp", "Dallas", "TX"],
        ];
        return(
            <div>
                <NavBar/>
                <div className="pull-right btn btn-danger">
                    <Link to="/login" style={{color:'#fff'}}>Logout</Link>
                </div>
                <div className="panel panel-primary clearfix" style={{clear:'both'}}>
                    <div className="panel-heading">
                        <h4 className="panel-title">{this.state.screenName}</h4>
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
                            <Filters method={this.doChange} data={this.state.reportdata}/>
                            </div>
                        </div>

                        <div className="clearfix"></div>
                        <div className="col-md-12 col-sm-12 head-cls backwhite">
                            <div className="panel">
                                <div className="panel-heading clearfix">
                                    <h4 className="panel-title pull-left col-md-1">Search Results</h4>
                                </div>
                            </div>
                            <MUIDataTable  
                              data={data1} 
                              columns={columns1}  />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) { 
    const { reportdata,reportdatatable } = state;
    return { reportdata,reportdatatable };
}

const connectedReportTemplate = connect(mapStateToProps)(ReportTemplate);
export { connectedReportTemplate as ReportTemplate };
 