import React, {Component, useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { districts, prefectures, trains } from '../../banner/banner1/locations';

const WidgetSearch = () => {

	const { prefecture,
		district,
		train } = useSelector(({ search }) => search);
		const dispatch = useDispatch();
	
		const [selectDistricts, setSelectDistricts] = useState(districts);
		const [selectTrains, setSelectTrains] = useState(trains);
	
	  const handleChangePrefecture = (e) => {
		dispatch({ type: "SELECT_PREFECTURE", payload: e });
		setSelectDistricts(districts.filter(d => !d.prefecture || d.prefecture === e.value || e.value === 1));
		setSelectTrains(trains.filter(d => !d.prefecture || d.prefecture === e.value || e.value === 1));
	  }
	
	  const handleChangeDistrict = (e) => {
		dispatch({ type: "SELECT_DISTRICT", payload: e });
	  }
	
	  const handleChangeTrain = (e) => {
		dispatch({ type: "SELECT_TRAIN", payload: e });
	  }

	return (
		<>
			<div className="sidebar-widget">
				<div className="sidebar-option mb-3">
					<Select
						value={prefecture}
						onChange={handleChangePrefecture}
						placeholder="県 選択"
						options={prefectures}
					/>
				</div>
				<div className="sidebar-option mb-3">
					<Select
						value={district}
						onChange={handleChangeDistrict}
						placeholder="市 選択"
						options={districts}
					/>
				</div>
				<div className="sidebar-option">
					<Select
						value={train}
						onChange={handleChangeTrain}
						placeholder="路線 選択"
						options={trains}
					/>
				</div>
			</div>
		</>
	);
}

export default WidgetSearch;