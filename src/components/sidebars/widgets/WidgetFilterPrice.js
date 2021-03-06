import React, {Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const WidgetFilterPrice = () => {
	const dispatch = useDispatch();
	const { price, accessibility } = useSelector(({search}) => search);

	const Filterstate = {
		title: '給料',
		stitle: '月々',
	}
		return (
			<>
				<div className="sidebar-widget">
					<h3 className="widget-title mb-3">
						{Filterstate.title}
					</h3>
					<div className="multi-range">
						<input id="max" type="range" min="15" max="25" step="1" value={price} onChange={(e) => dispatch({ type: "SET_PRICE", payload: e.target.value })} />
					</div>
					<div className="price-slider-amount d-flex">
						<label htmlFor="amount" className="filter__label">
							{Filterstate.stitle}
						</label>
						<div className="price-wrap d-flex">
							<div className="price text-violet">
								<span id="from">{price}万円</span><span> 〜 </span><span id="to">30万円</span>
							</div>
						</div>
					</div>
				</div>
			</>
		);
}

export default WidgetFilterPrice;