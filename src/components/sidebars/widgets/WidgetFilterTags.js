import React, {Component} from 'react';

class WidgetFilterTags extends Component {
	state = {
		title: '保険',
		tags: [
			{
				path: '#',
				title: '社会保険'
			},
			{
				path: '#',
				title: '交通費'
			},
			{
				path: '#',
				title: '住宅手当'
			},
			{
				path: '#',
				title: '子供手当'
			},
			{
				path: '#',
				title: '社員旅行'
			},
		]
	}


	render() {
		return (
			<>
				<div className="sidebar-widget tag-widget">
					<h3 className="widget-title">
						{this.state.title}
					</h3>
					<div className="title-shape"></div>
					<ul className="tag-list mt-4">
						{this.state.tags.map((item, index) => {
							return (
								<li key={index}>
									<a href={item.path}>
										{item.title}
									</a>
								</li>
							)
						})}
					</ul>
				</div>
			</>
		);
	}
}

export default WidgetFilterTags;