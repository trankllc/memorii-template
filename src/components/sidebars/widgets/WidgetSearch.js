import React, {Component} from 'react';
import { FiSearch } from 'react-icons/fi';
import Select from 'react-select';

const locations = [
	{
		value: '',
		label: 'Select a Location'
	},
	{
		value: 'AF',
		label: 'Afghanistan'
	},
	{
		value: 'AX',
		label: 'Åland Islands'
	},
	{
		value: 'AL',
		label: 'Albania'
	},
	{
		value: 'DZ',
		label: 'Algeria'
	},
	{
		prefix: 'AD',
		label: 'Andorra'
	},
	{
		prefix: 'AO',
		label: 'Angola'
	},
	{
		prefix: 'AI',
		label: 'Anguilla'
	},
	{
		prefix: 'AQ',
		label: 'Antarctica'
	},
]
const categories = [
	{
		value: 0,
		label: 'Select a category'
	},
	{
		value: 1,
		label: 'All Category'
	},
	{
		value: 2,
		label: 'Shops'
	},
	{
		value: 3,
		label: 'Hotels'
	},
	{
		value: 4,
		label: 'Foods & Restaurants'
	},
	{
		value: 5,
		label: 'Fitness'
	},
	{
		value: 6,
		label: 'Travel'
	},
	{
		value: 7,
		label: 'Salons'
	},
	{
		value: 8,
		label: 'Event'
	},
	{
		value: 9,
		label: 'Business'
	},
	{
		value: 10,
		label: 'Jobs'
	}
]

class WidgetSearch extends Component {
	state = {
		selectedOption: null,
		selectedCatOp: null,
	}

	handleChange = () => {
		const { selectedOption } = this.state;
		this.setState(
			{ selectedOption }
		);
	};
	handleChangeCat = () => {
		const { selectedCatOp } = this.state;
		this.setState(
			{ selectedCatOp }
		);
	}
	render() {
		return (
			<>
				<div className="sidebar-widget">
					{/* <div className="contact-form-action">
						<form>
							<div className="form-group">
								<span className="d-inline-block form-icon">
									<FiSearch />
								</span>
								<input className="form-control" type="text" placeholder="県 選択" />
							</div>
						</form>
					</div> */}
					<div className="sidebar-option mb-3">
						<Select
							value={this.selectedOption}
							onChange={this.handleChange}
							placeholder="県 選択"
							options={locations}
						/>
					</div>
					<div className="sidebar-option mb-3">
						<Select
							value={this.selectedOption}
							onChange={this.handleChange}
							placeholder="市 選択"
							options={locations}
						/>
					</div>
					<div className="sidebar-option">
						<Select
							value={this.selectedCatOp}
							onChange={this.handleChangeCat}
							placeholder="路線 選択"
							options={categories}
						/>
					</div>
				</div>
			</>
		);
	}
}

export default WidgetSearch;