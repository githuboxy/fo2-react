import React from 'react'; 

import ReactTable from "react-table";
class FixedTradeTable extends React.Component {
	constructor(props) {
		super(props);
		 
		this.doSubmit = this.doSubmit.bind(this); 
	}
	doSubmit(e){ 
        this.props.method(e.target.id) 
	}
	render() { 
		var columns = []; 
        var results = this.props.columns;
		 
        if(results !== undefined) { 
           results.map((item,index) => {
               if(item === "Action"){
                columns.push({
                    Header: item,
                    accessor: "",
                    Cell: ({ original }) => { 
                        return (
                            <button id={original.rowNumber} className="btn btn-primary btn-xs mt" onClick={this.doSubmit.bind(this)}>Trade</button>
                        );
                    }
                })
               }else{
                    columns.push({
                        Header: item,
                        accessor:item 
                    });
                }
			});      
        }

		return (
			<div>
				<ReactTable
					data={this.props.tdata}
					columns={columns} 
				/>
 			</div>
		);
	}
}

export default FixedTradeTable;

 
