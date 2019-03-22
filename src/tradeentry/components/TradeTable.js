import React from 'react'; 

import ReactTable from "react-table";
class TradeTable extends React.Component {
	constructor(props) {
		super(props);
		 
		this.state = { selected: {}, selectAll: 0, data: '' };

		this.toggleRow = this.toggleRow.bind(this); 
		this.doSubmit = this.doSubmit.bind(this); 
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
			this.props.tdata.forEach(x => {
				newSelected[x.rowNumber] = true;
			});
		}

		this.setState({
			selected: newSelected,
			selectAll: this.state.selectAll === 0 ? 1 : 0
		});
	}
	isEmpty(obj) {
		for(var key in obj) {
			if(obj.hasOwnProperty(key))
				return false;
		}
		return true;
	}
	doSubmit(){ 
		if(this.isEmpty(this.state.selected))
			alert("Please check atleast one checkbox");
		else
			this.props.method(this.state.selected) 
	}
	render() { 
		var columns = []; 
		var results = this.props.columns;
		columns.push({
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
			},
			sortable: false,
			width: 65
		})
        if(results !== undefined) { 
           results.map((item,index) => {
							columns.push({
								Header: item,
								accessor:item 
							});
						});      
		}

		return (
			<div>
				<ReactTable
					data={this.props.tdata}
					columns={columns} 
				/>
                <button className="btn btn-primary btn-xs mt" onClick={this.doSubmit.bind(this)}>Trade</button>
			</div>
		);
	}
}

export default TradeTable;

 
