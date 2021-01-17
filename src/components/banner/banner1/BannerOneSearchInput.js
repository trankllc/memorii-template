import React, {Component, useState} from 'react'
import Select from "react-select";
import { useDispatch, useSelector } from 'react-redux';
import { districts, prefectures, trains } from './locations';


const BannerOneSearchInput = () => {

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
        <div className="main-search-input">

          <div className="main-search-input-item">
            {/* <div className="contact-form-action">
              <form action="#">
                <div className="form-group mb-0">
                <span className="form-icon">
                  <FiSearch/>
                </span>
                  <input className="form-control" type="text"
                    placeholder="What are you looking for?"/>
                </div>
              </form>
            </div>
             */}
             <Select
              value={prefecture}
              onChange={handleChangePrefecture}
              placeholder="都道府県"
              options={prefectures}
            />
          </div>

          <div className="main-search-input-item location">
          <Select
              value={district}
              onChange={handleChangeDistrict}
              placeholder="市区町村"
              options={selectDistricts}
            />
          </div>

          <div className="main-search-input-item category">
            <Select
              value={train}
              onChange={handleChangeTrain}
              placeholder="路線"
              options={selectTrains}
            />
          </div>

          <div className="main-search-input-btn">
            <button className="button theme-btn" type="submit">Search</button>
          </div>

        </div>
      </>
    )
}

export default BannerOneSearchInput;