import React, {Component} from 'react';

class WidgetOpenHours extends Component {
    state = {
        title: '営業時間',
        items: [
            {
                day: '日曜日',
                time: '定休日',
                close: true,
            },
            {
                day: '月曜日',
                time: '09:00 - 17:00',
                close: false,
            },
            {
                day: '火曜日',
                time: '09:00 - 17:00',
                close: false,
            },
            {
                day: '水曜日',
                time: '09:00 - 17:00',
                close: false,
            },
            {
                day: '木曜日',
                time: '09:00 - 17:00',
                close: false,
            },
            {
                day: '金曜日',
                time: '09:00 - 17:00',
                close: false,
            },
            {
                day: '土曜日',
                time: '定休日',
                close: true,
            }            
        ]
    }
    render() {
        return (
            <>
                <div className="sidebar-widget">
                    <div className="opening-hours">
                        <div className="listing-badge d-flex justify-content-between align-items-center">
                            <div>
                                <h3 className="widget-title">
                                    {this.state.title}
                                </h3>
                                <div className="title-shape"></div>
                            </div>
                        </div>
                        <ul className="list-items padding-top-30px">
                            {this.state.items.map((item, i) => {
                                return (
                                    <li key={i} className="d-flex justify-content-between">
                                        {item.day} <strong className={item.close ? 'color-text' : 'font-weight-medium'}>{item.time}</strong>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default WidgetOpenHours;