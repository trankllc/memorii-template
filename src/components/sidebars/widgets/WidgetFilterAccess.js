import React, {Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const WidgetFilterAccess = () => {
	const dispatch = useDispatch();
	const { accessibility } = useSelector(({search}) => search);

	const Filterstate = {
		title: 'アクセス',
		stitle: '徒歩',
	}
		return (
			<>
				<div className="sidebar-widget">
					<h3 className="widget-title mb-3">
						{Filterstate.title}
					</h3>
					<div className="multi-range">
						<input id="max" type="range" min="5" max="20" step="1" value={accessibility} onChange={(e) => dispatch({ type: "SET_ACCESSIBILITY", payload: e.target.value })} />
					</div>
					<div className="price-slider-amount d-flex">
						<label htmlFor="amount" className="filter__label">
							{Filterstate.stitle}
						</label>
						<div className="price-wrap d-flex">
							<div className="price text-violet">
								<span id="from">0分</span><span> 〜 </span><span id="to">{accessibility}分</span>
							</div>
						</div>
					</div>
				</div>
			</>
		);
}

export default WidgetFilterAccess;