import React from 'react'; 
import { NavBar } from '../../navbar/components/navbar';
import { Link } from 'react-router-dom';
import { reportActions } from '../actions/report.actions';
import { connect } from 'react-redux';
import Filters from './Filters';
import ReactTable, { ReactTableDefaults } from "react-table";
import '../../../node_modules/react-table/react-table.css';  
import '../../user/css/App.css';
import FormData from 'form-data';
import MultiTable from './MultiTable';
Object.assign(ReactTableDefaults, {
    defaultPageSize: 5,
    minRows: 1
  });
  const filters = {"reportdata":[{
    "id":"1",
    "label":"Client Firm",
    "name":"entiySel",
    "value":"",
    "flag":"",
    "image":"",
    "parentImage":"",
    "toppanelImage":"",
    "token":"",
    "href":"",
    "onclick":"",
    "checked":"",
    "fieldValue":"",
    "loginId":"",
    "companyId":"",
    "action":"",
    "link":"",
    "type":"Select",
    "values":[
       {
          "id":"ALL",
          "label":"",
          "name":"All",
          "value":"",
          "flag":"",
          "image":"",
          "parentImage":"",
          "toppanelImage":"",
          "token":"",
          "href":"",
          "onclick":"",
          "checked":"",
          "fieldValue":"",
          "loginId":"",
          "companyId":"",
          "action":"",
          "link":"",
          "type":""
       },
       {
          "id":"19687983",
          "label":"",
          "name":"Roy Inc.",
          "value":"",
          "flag":"",
          "image":"",
          "parentImage":"",
          "toppanelImage":"",
          "token":"",
          "href":"",
          "onclick":"",
          "checked":"",
          "fieldValue":"",
          "loginId":"",
          "companyId":"",
          "action":"",
          "link":"",
          "type":""
       },
       {
          "id":"40286025",
          "label":"",
          "name":"IE Sub",
          "value":"",
          "flag":"",
          "image":"",
          "parentImage":"",
          "toppanelImage":"",
          "token":"",
          "href":"",
          "onclick":"",
          "checked":"",
          "fieldValue":"",
          "loginId":"",
          "companyId":"",
          "action":"",
          "link":"",
          "type":""
       },
       {
          "id":"81837075",
          "label":"",
          "name":"Roy Inc. UK",
          "value":"",
          "flag":"",
          "image":"",
          "parentImage":"",
          "toppanelImage":"",
          "token":"",
          "href":"",
          "onclick":"",
          "checked":"",
          "fieldValue":"",
          "loginId":"",
          "companyId":"",
          "action":"",
          "link":"",
          "type":""
       },
       {
          "id":"37799213",
          "label":"",
          "name":"Roy Inc. US",
          "value":"",
          "flag":"",
          "image":"",
          "parentImage":"",
          "toppanelImage":"",
          "token":"",
          "href":"",
          "onclick":"",
          "checked":"",
          "fieldValue":"",
          "loginId":"",
          "companyId":"",
          "action":"",
          "link":"",
          "type":""
       },
       {
          "id":"90384620",
          "label":"",
          "name":"Spain Sub",
          "value":"",
          "flag":"",
          "image":"",
          "parentImage":"",
          "toppanelImage":"",
          "token":"",
          "href":"",
          "onclick":"",
          "checked":"",
          "fieldValue":"",
          "loginId":"",
          "companyId":"",
          "action":"",
          "link":"",
          "type":""
       },
       {
          "id":"15613714",
          "label":"",
          "name":"FR Sub",
          "value":"",
          "flag":"",
          "image":"",
          "parentImage":"",
          "toppanelImage":"",
          "token":"",
          "href":"",
          "onclick":"",
          "checked":"",
          "fieldValue":"",
          "loginId":"",
          "companyId":"",
          "action":"",
          "link":"",
          "type":""
       },
       {
          "id":"98396847",
          "label":"",
          "name":"DE Sub",
          "value":"",
          "flag":"",
          "image":"",
          "parentImage":"",
          "toppanelImage":"",
          "token":"",
          "href":"",
          "onclick":"",
          "checked":"",
          "fieldValue":"",
          "loginId":"",
          "companyId":"",
          "action":"",
          "link":"",
          "type":""
       },
       {
          "id":"89072412",
          "label":"",
          "name":"SE Sub",
          "value":"",
          "flag":"",
          "image":"",
          "parentImage":"",
          "toppanelImage":"",
          "token":"",
          "href":"",
          "onclick":"",
          "checked":"",
          "fieldValue":"",
          "loginId":"",
          "companyId":"",
          "action":"",
          "link":"",
          "type":""
       },
       {
          "id":"84351622",
          "label":"",
          "name":"DK Sub",
          "value":"",
          "flag":"",
          "image":"",
          "parentImage":"",
          "toppanelImage":"",
          "token":"",
          "href":"",
          "onclick":"",
          "checked":"",
          "fieldValue":"",
          "loginId":"",
          "companyId":"",
          "action":"",
          "link":"",
          "type":""
       },
       {
          "id":"12601994",
          "label":"",
          "name":"NO Sub",
          "value":"",
          "flag":"",
          "image":"",
          "parentImage":"",
          "toppanelImage":"",
          "token":"",
          "href":"",
          "onclick":"",
          "checked":"",
          "fieldValue":"",
          "loginId":"",
          "companyId":"",
          "action":"",
          "link":"",
          "type":""
       },
       {
          "id":"65748249",
          "label":"",
          "name":"PL Sub",
          "value":"",
          "flag":"",
          "image":"",
          "parentImage":"",
          "toppanelImage":"",
          "token":"",
          "href":"",
          "onclick":"",
          "checked":"",
          "fieldValue":"",
          "loginId":"",
          "companyId":"",
          "action":"",
          "link":"",
          "type":""
       }
    ]
 },
 {
    "id":"2",
    "label":"Policy Name",
    "name":"policyId",
    "value":"",
    "flag":"",
    "image":"",
    "parentImage":"",
    "toppanelImage":"",
    "token":"",
    "href":"",
    "onclick":"",
    "checked":"",
    "fieldValue":"",
    "loginId":"",
    "companyId":"",
    "action":"",
    "link":"",
    "type":"Select",
    "values":[
       {
          "id":"ALL",
          "label":"",
          "name":"All",
          "value":"",
          "flag":"",
          "image":"",
          "parentImage":"",
          "toppanelImage":"",
          "token":"",
          "href":"",
          "onclick":"",
          "checked":"",
          "fieldValue":"",
          "loginId":"",
          "companyId":"",
          "action":"",
          "link":"",
          "type":""
       },
       {
          "id":"1029",
          "label":"",
          "name":"USD POLICY",
          "value":"",
          "flag":"",
          "image":"",
          "parentImage":"",
          "toppanelImage":"",
          "token":"",
          "href":"",
          "onclick":"",
          "checked":"",
          "fieldValue":"",
          "loginId":"",
          "companyId":"",
          "action":"",
          "link":"",
          "type":""
       }
    ]
 },
 {
    "id":"3",
    "label":"Go",
    "name":"Go",
    "value":"",
    "flag":"",
    "image":"",
    "parentImage":"",
    "toppanelImage":"",
    "token":"",
    "href":"",
    "onclick":"",
    "checked":"",
    "fieldValue":"",
    "loginId":"",
    "companyId":"",
    "action":"",
    "link":"",
    "type":"Button"
 }]};
  const data = {
      "title": {
       "id":"0",
       "label":"",
       "name":"Treasury Policy Compliance Report",
       "value":"",
       "flag":"",
       "image":"",
       "parentImage":"",
       "toppanelImage":"",
       "token":"",
       "href":"",
       "onclick":"",
       "checked":"",
       "fieldValue":"",
       "loginId":"",
       "companyId":"",
       "action":"",
       "link":"",
       "type":"Title"
    },
    "tabledata":[{
       "id":"5",
       "name":"data",
       "values":[
          {
             "data1":{
                "rowNumber":0,
                "ClientFirm":"Roy Inc. UK",
                "Policy Name":"USD POLICY",
                "Account Group":"All USD Accounts",
                "Schedule Type":"1, 2, 30, 31",
                "Status":"Active",
                "Modified Date":"Oct 01, 2018 20:42:30",
                "Modified By":"PETE",
                "Comments":"",
                "Balance":"  29,234,102,822.10",
                "Compliance":"Y"
             },
             "data2":[
                {
                   "Title":"Policy Rules",
                   "Priority":"1",
                   "Threshold Amt":"2000000.00",
                   "Min Amt":"4000000.00",
                   "Max Amt":"3000000.00",
                   "Product Type":"Time Deposits",
                   "Fund Family":"",
                   "Fund/Product":"Time Deposits GER",
                   "Term/Rating":"50",
                   "Max Investment":"100000000.00",
                   "Counter Party":"Global Bank",
                   "Concentration Limit":"600000000.00"
                },
                {
                   "Priority":"2",
                   "Threshold Amt":"4000000.00",
                   "Min Amt":"600000.00",
                   "Max Amt":"4500000.00",
                   "Product Type":"Repurchase Agreement",
                   "Fund Family":"",
                   "Fund/Product":"Repurchase Agreement - IE",
                   "Term/Rating":"60",
                   "Max Investment":"500000000.00",
                   "Counter Party":"Demo Bank",
                   "Concentration Limit":"3200000.00"
                }
             ]
          },
          {
            "data1":{
               "rowNumber":1,
               "ClientFirm":"Roy Inc. UK",
               "Policy Name":"USD POLICY",
               "Account Group":"All USD Accounts",
               "Schedule Type":"1, 2, 30, 31",
               "Status":"Active",
               "Modified Date":"Oct 01, 2018 20:42:30",
               "Modified By":"PETE",
               "Comments":"",
               "Balance":"  29,234,102,822.10",
               "Compliance":"Y"
            },
            "data2":[
               {
                  "Title":"Policy Rules",
                  "Priority":"1",
                  "Threshold Amt":"2000000.00",
                  "Min Amt":"4000000.00",
                  "Max Amt":"3000000.00",
                  "Product Type":"Time Deposits",
                  "Fund Family":"",
                  "Fund/Product":"Time Deposits GER",
                  "Term/Rating":"50",
                  "Max Investment":"100000000.00",
                  "Counter Party":"Global Bank",
                  "Concentration Limit":"600000000.00"
               },
               {
                  "Priority":"2",
                  "Threshold Amt":"4000000.00",
                  "Min Amt":"600000.00",
                  "Max Amt":"4500000.00",
                  "Product Type":"Repurchase Agreement",
                  "Fund Family":"",
                  "Fund/Product":"Repurchase Agreement - IE",
                  "Term/Rating":"60",
                  "Max Investment":"500000000.00",
                  "Counter Party":"Demo Bank",
                  "Concentration Limit":"3200000.00"
               }
            ]
         }
       ]
    }
 ]};

class ReportMultiTemplates extends React.Component {
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
        
        var results;
        if( data !== undefined){ 
            if(data.title.type === "Title")
                this.state.screenName = data.title.name
            results = data.tabledata
        }
       let tableMarkup;
        if(results !== undefined){
            results.map((item,index) => {
                if(item.name === "data"){
                    console.log(item.values.length)
                    tableMarkup = item.values.map((val,ind) => {
                         return( <MultiTable data1={val.data1} data2={val.data2} key={ind}/>)
                })
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
                            <Filters method={this.doChange} data={filters}/>
                            </div>
                        </div>

                        <div className="clearfix"></div>
                        
                            {tableMarkup}
                            
                      
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

const connectedReportMultiTemplates = connect(mapStateToProps)(ReportMultiTemplates);
export { connectedReportMultiTemplates as ReportMultiTemplates };
 