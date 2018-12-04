import React from 'react'; 

import ReactTable from "react-table";
class TradeTable extends React.Component {
	constructor(props) {
		super(props);

		this.state = { selected: {}, selectAll: 0, data: makeData() };

		this.toggleRow = this.toggleRow.bind(this);
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
			this.state.data.forEach(x => {
				newSelected[x.product] = true;
			});
		}

		this.setState({
			selected: newSelected,
			selectAll: this.state.selectAll === 0 ? 1 : 0
		});
	}

	render() {
		const columns = [
					{
						id: "checkbox",
						accessor: "",
						Cell: ({ original }) => {
							return (
								<input
									type="checkbox"
									className="checkbox"
									checked={this.state.selected[original.product] === true}
									onChange={() => this.toggleRow(original.product)}
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
					},
					{
						Header: "Product",
						accessor: "product"
					},
					{
						Header: "Currency",
						id: "currency",
						accessor: d => d.currency
                    },
                    {
						Header: "Account Number",
						accessor: "accountnumber"
                    },
                    {
						Header: "Short Name",
						accessor: "shortname"
                    },
                    {
						Header: "Cut Off Time",
						accessor: "cutofftime"
					}
				];

		return (
			<div>
				<ReactTable
					data={this.state.data}
					columns={columns} 
				/>
                <button className="btn btn-primary btn-xs">Trade</button>
			</div>
		);
	}
}

export default TradeTable;

function makeData() {
	return [
		{
			product: "judge",
			currency: "babies",
            accountnumber: 16,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "quarter",
			currency: "driving",
            accountnumber: 17,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "division",
			currency: "society",
            accountnumber: 3,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "lamp",
			currency: "point",
            accountnumber: 2,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "argument",
			currency: "insurance",
            accountnumber: 13,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "pets",
			currency: "fan",
            accountnumber: 27,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "learning",
			currency: "board",
            accountnumber: 9,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "observation",
			currency: "drink",
            accountnumber: 28,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "burst",
			currency: "glove",
            accountnumber: 1,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "acoustics",
			currency: "animal",
            accountnumber: 19,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "beetle",
			currency: "branch",
            accountnumber: 25,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "invention",
			currency: "servant",
            accountnumber: 14,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "letters",
			currency: "driving",
            accountnumber: 12,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "seashore",
			currency: "metal",
            accountnumber: 18,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "cat",
			currency: "stranger",
            accountnumber: 26,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "group",
			currency: "dinner",
            accountnumber: 20,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "mom",
			currency: "pipe",
            accountnumber: 27,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "desk",
			currency: "pail",
            accountnumber: 6,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "oranges",
			currency: "interest",
            accountnumber: 22,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "umbrella",
			currency: "legs",
            accountnumber: 9,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "carpenter",
			currency: "apparel",
            accountnumber: 19,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "seat",
			currency: "wrench",
            accountnumber: 14,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "carpenter",
			currency: "steam",
            accountnumber: 27,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "chess",
			currency: "bread",
            accountnumber: 21,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "men",
			currency: "pie",
            accountnumber: 5,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "group",
			currency: "action",
            accountnumber: 21,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "coil",
			currency: "mine",
            accountnumber: 11,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "care",
			currency: "partner",
            accountnumber: 17,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "queen",
			currency: "cows",
            accountnumber: 20,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "wilderness",
			currency: "cracker",
            accountnumber: 24,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "chair",
			currency: "scarecrow",
            accountnumber: 5,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "cast",
			currency: "nation",
            accountnumber: 16,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "fear",
			currency: "wave",
            accountnumber: 28,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "cook",
			currency: "drug",
            accountnumber: 2,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "thrill",
			currency: "marble",
            accountnumber: 25,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "ship",
			currency: "muscle",
            accountnumber: 29,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "drug",
			currency: "suit",
            accountnumber: 13,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "edge",
			currency: "statement",
            accountnumber: 19,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "chickens",
			currency: "start",
            accountnumber: 20,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "donkey",
			currency: "laugh",
            accountnumber: 14,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "tiger",
			currency: "tendency",
            accountnumber: 27,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "steam",
			currency: "argument",
            accountnumber: 17,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "riddle",
			currency: "adjustment",
            accountnumber: 15,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "silver",
			currency: "women",
            accountnumber: 2,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "month",
			currency: "babies",
            accountnumber: 13,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "van",
			currency: "flowers",
            accountnumber: 29,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "yak",
			currency: "book",
            accountnumber: 5,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "quicksand",
			currency: "fall",
            accountnumber: 11,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "beggar",
			currency: "dinner",
            accountnumber: 4,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		},
		{
			product: "money",
			currency: "mind",
            accountnumber: 0,
            shortname: "abc",
            cutofftime: "11:59 (GMT+0:0)"
		}
	];
}
