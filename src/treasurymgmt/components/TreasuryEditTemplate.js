import React from 'react'; 
import { NavBar } from '../../navbar/components/navbar';
import { Link } from 'react-router-dom';
import { treasuryActions } from '../actions/treasury.actions';
import { connect } from 'react-redux';
import Filters from './Filters';
import ReactTable, { ReactTableDefaults } from "react-table";
import '../../../node_modules/react-table/react-table.css';  
import '../../user/css/App.css';
import FormData from 'form-data';
Object.assign(ReactTableDefaults, {
    defaultPageSize: 5,
    minRows: 1
  });

  const data = [{
	"id": "0",
	"label": "",
	"name": "Treasury Policy",
	"value": "",
	"flag": "",
	"image": "",
	"parentImage": "",
	"toppanelImage": "",
	"token": "",
	"href": "",
	"onclick": "",
	"checked": "",
	"fieldValue": "",
	"loginId": "",
	"companyId": "",
	"action": "",
	"link": "",
	"type": "Title"
}, {
	"id": "1",
	"label": "Client Firm",
	"name": "clientfirm",
	"value": "",
	"flag": "",
	"image": "",
	"parentImage": "",
	"toppanelImage": "",
	"token": "",
	"href": "",
	"onclick": "",
	"checked": "",
	"fieldValue": "",
	"loginId": "",
	"companyId": "",
	"action": "",
	"link": "",
	"type": "Select",
	"values": [{
		"id": "All",
		"label": "",
		"name": "All",
		"value": "",
		"flag": "",
		"image": "",
		"parentImage": "",
		"toppanelImage": "",
		"token": "",
		"href": "",
		"onclick": "",
		"checked": "",
		"fieldValue": "",
		"loginId": "",
		"companyId": "",
		"action": "",
		"link": "",
		"type": ""
	}, {
		"id": "Roy Inc.",
		"label": "",
		"name": "Roy Inc.",
		"value": "",
		"flag": "",
		"image": "",
		"parentImage": "",
		"toppanelImage": "",
		"token": "",
		"href": "",
		"onclick": "",
		"checked": "",
		"fieldValue": "",
		"loginId": "",
		"companyId": "",
		"action": "",
		"link": "",
		"type": ""
	}, {
		"id": "IE Sub",
		"label": "",
		"name": "IE Sub",
		"value": "",
		"flag": "",
		"image": "",
		"parentImage": "",
		"toppanelImage": "",
		"token": "",
		"href": "",
		"onclick": "",
		"checked": "",
		"fieldValue": "",
		"loginId": "",
		"companyId": "",
		"action": "",
		"link": "",
		"type": ""
	}, {
		"id": "Roy Inc. UK",
		"label": "",
		"name": "Roy Inc. UK",
		"value": "",
		"flag": "",
		"image": "",
		"parentImage": "",
		"toppanelImage": "",
		"token": "",
		"href": "",
		"onclick": "",
		"checked": "",
		"fieldValue": "",
		"loginId": "",
		"companyId": "",
		"action": "",
		"link": "",
		"type": ""
	}, {
		"id": "Roy Inc. US",
		"label": "",
		"name": "Roy Inc. US",
		"value": "",
		"flag": "",
		"image": "",
		"parentImage": "",
		"toppanelImage": "",
		"token": "",
		"href": "",
		"onclick": "",
		"checked": "",
		"fieldValue": "",
		"loginId": "",
		"companyId": "",
		"action": "",
		"link": "",
		"type": ""
	}, {
		"id": "FR Sub",
		"label": "",
		"name": "FR Sub",
		"value": "",
		"flag": "",
		"image": "",
		"parentImage": "",
		"toppanelImage": "",
		"token": "",
		"href": "",
		"onclick": "",
		"checked": "",
		"fieldValue": "",
		"loginId": "",
		"companyId": "",
		"action": "",
		"link": "",
		"type": ""
	}]
},{
	"id": "2",
	"label": "Policy Name",
	"name": "policyName",
	"value": "",
	"flag": "",
	"image": "",
	"parentImage": "",
	"toppanelImage": "",
	"token": "",
	"href": "",
	"onclick": "",
	"checked": "",
	"fieldValue": "",
	"loginId": "",
	"companyId": "",
	"action": "",
	"link": "",
	"type": "input",
	"values":"USD POLICY"
},{
	"id": "3",
	"label": "Account Group",
	"name": "accountGroup",
	"value": "",
	"flag": "",
	"image": "",
	"parentImage": "",
	"toppanelImage": "",
	"token": "",
	"href": "",
	"onclick": "",
	"checked": "",
	"fieldValue": "",
	"loginId": "",
	"companyId": "",
	"action": "",
	"link": "",
	"type": "Select",
	"values":[{
		"id": "All EUR Accounts",
		"label": "",
		"name": "All EUR Accounts",
		"value": "",
		"flag": "",
		"image": "",
		"parentImage": "",
		"toppanelImage": "",
		"token": "",
		"href": "",
		"onclick": "",
		"checked": "",
		"fieldValue": "",
		"loginId": "",
		"companyId": "",
		"action": "",
		"link": "",
		"type": ""
	},{
		"id": "All TRY Accounts",
		"label": "",
		"name": "All TRY Accounts",
		"value": "",
		"flag": "",
		"image": "",
		"parentImage": "",
		"toppanelImage": "",
		"token": "",
		"href": "",
		"onclick": "",
		"checked": "",
		"fieldValue": "",
		"loginId": "",
		"companyId": "",
		"action": "",
		"link": "",
		"type": ""
	}]
},{
	"id": "4",
	"label": "Comments",
	"name": "comments",
	"value": "",
	"flag": "",
	"image": "",
	"parentImage": "",
	"toppanelImage": "",
	"token": "",
	"href": "",
	"onclick": "",
	"checked": "",
	"fieldValue": "",
	"loginId": "",
	"companyId": "",
	"action": "",
	"link": "",
	"type": "textarea",
	"values":""
}, {
	"id": "5",
	"label": "",
	"name": "",
	"value": "",
	"flag": "",
	"image": "",
	"parentImage": "",
	"toppanelImage": "",
	"token": "",
	"href": "",
	"onclick": "",
	"checked": "",
	"fieldValue": "",
	"loginId": "",
	"companyId": "",
	"action": "",
	"link": "",
	"type": "newline",
	"values":""
}, {
	"id": "6",
	"label": "",
	"name": "data",
	"value": "",
	"flag": "",
	"image": "",
	"parentImage": "",
	"toppanelImage": "",
	"token": "",
	"href": "",
	"onclick": "",
	"checked": "",
	"fieldValue": "",
	"loginId": "",
	"companyId": "",
	"action": "",
	"link": "",
	"type": "data",
	"values": [{
		"rowNumber":"0",
		"chktype":"checkbox",
		"poolIdentifier": "1",
		"poolName": "e2",
		"poolType": "Single Currency Single Country",
		"poolCurrency": "THB",
		"poolCountry": "POLAND",
		"Status": "Active",
		"Created Date": "Nov 16, 2018 10:57:19",
		"Created By": "PETE USER",
		"Last Modified Date": "Nov 16, 2018 12:20:41",
		"Modified By": "PETE USER",
		"btntype":"button"
	}, {
		"rowNumber":"1",
		"chktype":"checkbox",
		"poolIdentifier": "1",
		"poolName": "e1",
		"poolType": "Single Currency Single Country",
		"poolCurrency": "THB",
		"poolCountry": "UNITED STATES",
		"Status": "Active",
		"Created Date": "Nov 16, 2018 10:55:20",
		"Created By": "PETE USER",
		"Last Modified Date": "N/A",
		"Modified By": "N/A",
		"btntype":"button"
	}, {
		"rowNumber":"2",
		"chktype":"checkbox",
		"poolIdentifier": "1",
		"poolName": "test12345",
		"poolType": "Multiple Currency Single Country",
		"poolCurrency": "THB",
		"poolCountry": "POLAND",
		"Status": "Active",
		"Created Date": "Nov 14, 2018 15:02:35",
		"Created By": "DAVID USER",
		"Last Modified Date": "Nov 14, 2018 15:04:22",
		"Modified By": "DAVID USER"
	}, {
		"rowNumber":"3",
		"chktype":"checkbox",
		"poolIdentifier": "1000",
		"poolName": "UK Pool",
		"poolType": "Single Currency Single Country",
		"poolCurrency": "THB",
		"poolCountry": "All",
		"Status": "Active",
		"Created Date": "Nov 12, 2018 16:35:34",
		"Created By": "PETE USER",
		"Last Modified Date": "Nov 12, 2018 16:36:10",
		"Modified By": "PETE USER",
		"btntype":"button"
	}, {
		"rowNumber":"4",
		"chktype":"checkbox",
		"poolIdentifier": "1945",
		"poolName": "North policy",
		"poolType": "Single Currency Single Country",
		"poolCurrency": "HKD",
		"poolCountry": "UNITED STATES",
		"Status": "InActive",
		"Created Date": "Nov 09, 2018 20:11:27",
		"Created By": "PETE USER",
		"Last Modified Date": "Nov 12, 2018 16:29:43",
		"Modified By": "PETE USER",
		"btntype":"button"
	}, {
		"rowNumber":"5",
		"chktype":"checkbox",
		"poolIdentifier": "1542",
		"poolName": "Policy DK Sub",
		"poolType": "Single Currency Single Country",
		"poolCurrency": "HKD",
		"poolCountry": "DENMARK",
		"Status": "InActive",
		"Created Date": "Nov 09, 2018 18:43:27",
		"Created By": "PETE USER",
		"Last Modified Date": "Nov 12, 2018 16:29:43",
		"Modified By": "PETE USER",
		"btntype":"button"
	}, {
		"rowNumber":"6",
		"chktype":"checkbox",
		"poolIdentifier": "1854",
		"poolName": "IE Pool name",
		"poolType": "Multiple Currency Single Country",
		"poolCurrency": "EUR",
		"poolCountry": "IRELAND",
		"Status": "Active",
		"Created Date": "Nov 09, 2018 18:04:18",
		"Created By": "PETE USER",
		"Last Modified Date": "Nov 12, 2018 16:29:43",
		"Modified By": "PETE USER",
		"btntype":"button"
	}, {
		"rowNumber":"7",
		"chktype":"checkbox",
		"poolIdentifier": "1568",
		"poolName": "US",
		"poolType": "Single Currency Single Country",
		"poolCurrency": "THB",
		"poolCountry": "UNITED STATES",
		"Status": "InActive",
		"Created Date": "Nov 09, 2018 16:07:40",
		"Created By": "PETE USER",
		"Last Modified Date": "Nov 12, 2018 16:29:43",
		"Modified By": "PETE USER",
		"btntype":"button"
	}, {
		"rowNumber":"8",
		"chktype":"checkbox",
		"poolIdentifier": "1946",
		"poolName": "No Sub Policy Name",
		"poolType": "Single Currency Multiple Country",
		"poolCurrency": "HKD",
		"poolCountry": "IRELAND",
		"Status": "Active",
		"Created Date": "Nov 09, 2018 15:23:32",
		"Created By": "PETE USER",
		"Last Modified Date": "Nov 12, 2018 16:29:43",
		"Modified By": "PETE USER",
		"btntype":"button"
	}, {
		"rowNumber":"9",
		"chktype":"checkbox",
		"poolIdentifier": "1824",
		"poolName": "DE Sub pool policy",
		"poolType": "Multiple Currency Single Country",
		"poolCurrency": "EUR",
		"poolCountry": "SPAIN",
		"Status": "Active",
		"Created Date": "Nov 09, 2018 14:56:14",
		"Created By": "PETE USER",
		"Last Modified Date": "Nov 12, 2018 16:29:43",
		"Modified By": "PETE USER",
		"btntype":"button"
	}, {
		"rowNumber":"10",
		"chktype":"checkbox",
		"poolIdentifier": "2222",
		"poolName": "Margin Pooling",
		"poolType": "Single Currency Multiple Country",
		"poolCurrency": "THB",
		"poolCountry": "GERMANY",
		"Status": "Active",
		"Created Date": "Nov 08, 2018 17:47:01",
		"Created By": "Roy Manager",
		"Last Modified Date": "Nov 12, 2018 16:29:43",
		"Modified By": "PETE USER",
		"btntype":"button"
	}, {
		"rowNumber":"11",
		"chktype":"checkbox",
		"poolIdentifier": "1845",
		"poolName": "FR Sub",
		"poolType": "Single Currency Single Country",
		"poolCurrency": "EUR",
		"poolCountry": "FRANCE",
		"Status": "Active",
		"Created Date": "Nov 02, 2018 21:09:22",
		"Created By": "PETE USER",
		"Last Modified Date": "Nov 12, 2018 16:29:43",
		"Modified By": "PETE USER",
		"btntype":"button"
	}, {
		"rowNumber":"12",
		"chktype":"checkbox",
		"poolIdentifier": "5418",
		"poolName": "Spain sub",
		"poolType": "Single Currency Multiple Country",
		"poolCurrency": "EUR",
		"poolCountry": "SPAIN",
		"Status": "Active",
		"Created Date": "Nov 02, 2018 20:58:23",
		"Created By": "PETE USER",
		"Last Modified Date": "Nov 12, 2018 16:29:43",
		"Modified By": "PETE USER",
		"btntype":"button"
	}, {
		"rowNumber":"13",
		"chktype":"checkbox",
		"poolIdentifier": "1859",
		"poolName": "DK Sub policy",
		"poolType": "Single Currency Multiple Country",
		"poolCurrency": "NZD",
		"poolCountry": "DENMARK",
		"Status": "Active",
		"Created Date": "Nov 02, 2018 20:45:49",
		"Created By": "PETE USER",
		"Last Modified Date": "Nov 12, 2018 16:29:43",
		"Modified By": "PETE USER",
		"btntype":"button"
	}, {
		"rowNumber":"14",
		"chktype":"checkbox",
		"poolIdentifier": "3",
		"poolName": "3333",
		"poolType": "Single Currency Single Country",
		"poolCurrency": "THB",
		"poolCountry": "POLAND",
		"Status": "InActive",
		"Created Date": "Nov 02, 2018 20:38:24",
		"Created By": "PETE USER",
		"Last Modified Date": "N/A",
		"Modified By": "N/A",
		"btntype":"button"
	}, {
		"rowNumber":"15",
		"chktype":"checkbox",
		"poolIdentifier": "5",
		"poolName": "PL POOL111",
		"poolType": "Single Currency Single Country",
		"poolCurrency": "THB",
		"poolCountry": "ANGUILLA",
		"Status": "Active",
		"Created Date": "Nov 02, 2018 20:34:49",
		"Created By": "PETE USER",
		"Last Modified Date": "N/A",
		"Modified By": "N/A",
		"btntype":"button"
	}, {
		"rowNumber":"16",
		"chktype":"checkbox",
		"poolIdentifier": "1546",
		"poolName": "DE Sub pool Name",
		"poolType": "Multiple Currency Single Country",
		"poolCurrency": "NZD",
		"poolCountry": "BELGIUM",
		"Status": "Active",
		"Created Date": "Nov 02, 2018 20:21:07",
		"Created By": "PETE USER",
		"Last Modified Date": "N/A",
		"Modified By": "N/A",
		"btntype":"button"
	}, {
		"rowNumber":"17",
		"chktype":"checkbox",
		"poolIdentifier": "1459",
		"poolName": "FR Sub Pool",
		"poolType": "Single Currency Multiple Country",
		"poolCurrency": "HKD",
		"poolCountry": "AUSTRALIA",
		"Status": "Active",
		"Created Date": "Nov 02, 2018 20:12:32",
		"Created By": "PETE USER",
		"Last Modified Date": "N/A",
		"Modified By": "N/A",
		"btntype":"button"
	}, {
		"rowNumber":"18",
		"chktype":"checkbox",
		"poolIdentifier": "1284",
		"poolName": "DK Sub",
		"poolType": "Multiple Currency Single Country",
		"poolCurrency": "YEN",
		"poolCountry": "COLOMBIA",
		"Status": "Active",
		"Created Date": "Nov 02, 2018 17:50:22",
		"Created By": "PETE USER",
		"Last Modified Date": "N/A",
		"Modified By": "N/A",
		"btntype":"button"
	}]
}];

class TreasuryEditTemplate extends React.Component {
    constructor(){
        super();
        this.state={
            results:[],
            results1:[],
            reportdata:[],
            reportdatatable:[],
            columns:[],
			screenName:'',
			selected: {}, 
			selectAll: 0
		}
		this.toggleRow = this.toggleRow.bind(this); 
        this.doChange = this.doChange.bind(this);
    }
    componentDidMount() { 
        this.getFilter()
   }
   getFilter(){
    this.props.dispatch(treasuryActions.fetchReportData());
   }

 
   doChange(fillObj){
        var bodyFormData = new FormData(); 
        for (name in fillObj) { 
            bodyFormData.set(name, fillObj[name]); 
        }
        this.props.dispatch(treasuryActions.fetchReportTableData(bodyFormData)); 
        
   }
   toggleRow(product) { 
	const newSelected = Object.assign({}, this.state.selected);
	newSelected[product] = !this.state.selected[product];
	this.setState({
		selected: newSelected,
		selectAll: 2
	});
	 
}

toggleSelectAll() {
	let newSelected = {};
    
	if (this.state.selectAll === 0) {
		this.state.results.forEach(x => {
			newSelected[x.rowNumber] = true;
		});
	}
	 
	this.setState({
		selected: newSelected,
		selectAll: this.state.selectAll === 0 ? 1 : 0
	});
}

    render(){

		console.log("edit")
        //this.state.reportdata = this.props.reportdata; for dynamic use
        this.state.reportdata = data;
        // this.state.reportdatatable = this.props.reportdatatable; 
        this.state.results1  = this.state.reportdata;
        
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
						if(k === "chktype"){
							this.state.columns.push({
								id: "checkbox",
								accessor: "",
								Cell: ({ original }) => { 
									return (
										<input
											type="checkbox"
											className="checkbox"
											checked={this.state.selected[original.rowNumber] === true}
											onChange={() => this.toggleRow(original.rowNumber)}
										/>
									);
								},
								Header: x => {
									return (
										<input
											type="checkbox"
											className="checkbox"
											checked={this.state.selectAll === 1}
											ref={input => {
												if (input) {
													input.indeterminate = this.state.selectAll === 2;
												}
											}}
											onChange={() => this.toggleSelectAll()}
										/>
									);
								} 
							})
						}else if(k === "btntype"){
							this.state.columns.push({
								id: "btn",
								accessor: "",
								Cell: ({ original }) => { 
									return (
										<div>
											<a title="Edit" onClick={(e)=>{this.doChange();}} className="btn btn-primary btn-xs">Edit</a> 
											<a title="New" onClick={(e)=>{this.doChange();}} className="btn btn-primary btn-xs">New</a> 
										</div>
									);
								},
								Header: x => {
									return (
										 ""
									);
								} 
							})
							
						}else if(k!=="rowNumber"){
							this.state.columns.push({
							Header: k,
							accessor: k 
							});
						}
                
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
                            <ReactTable resizable={false} noDataText="No Data Found" data={this.state.results} columns={this.state.columns}  className="table table-striped" />
							<div className="col-md-6">
								<a title="Save" onClick={(e)=>{this.doChange();}} className="btn btn-primary btn-xs">Save</a> 
								<a title="Clear" onClick={(e)=>{this.doChange();}} className="btn btn-primary btn-xs">Clear</a> 
								<a title="Create New Policy" onClick={(e)=>{this.doChange();}} className="btn btn-primary btn-xs">Create New Policy</a> 
							</div>
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

const connectedTreasuryEditTemplate = connect(mapStateToProps)(TreasuryEditTemplate);
export { connectedTreasuryEditTemplate as TreasuryEditTemplate };
 