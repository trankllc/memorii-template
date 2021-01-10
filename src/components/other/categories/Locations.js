import React, {Component} from 'react';
import {Link} from "react-router-dom";
import flag1 from '../../../assets/images/flag1.jpg';
import flag2 from '../../../assets/images/flag2.jpg';
import flag3 from '../../../assets/images/flag3.jpg';
import flag4 from '../../../assets/images/flag4.jpg';
import flag5 from '../../../assets/images/flag5.png';
import flag6 from '../../../assets/images/flag6.png';
import flag7 from '../../../assets/images/flag7.jpg';
import flag8 from '../../../assets/images/flag8.jpg';
import flag9 from '../../../assets/images/flag9.png';
import flag10 from '../../../assets/images/flag10.png';
import flag11 from '../../../assets/images/flag11.png';
import flag12 from '../../../assets/images/flag12.jpg';
import flag13 from '../../../assets/images/flag13.jpg';
import flag14 from '../../../assets/images/flag14.png';
import flag15 from '../../../assets/images/flag15.jpg';
import flag16 from '../../../assets/images/flag16.jpg';
import flag17 from '../../../assets/images/flag17.jpg';
import flag18 from '../../../assets/images/flag18.jpg';
import flag19 from '../../../assets/images/flag19.svg';
import flag20 from '../../../assets/images/flag20.png';

class Locations extends Component {
    state = {
        locations: [
            {
                img: flag1,
                title: 'United states (2)',
                titleUrl: '#'
            },
            {
                img: flag2,
                title: 'London (4)',
                titleUrl: '#'
            },
            {
                img: flag3,
                title: 'Australia (7)',
                titleUrl: '#'
            },
            {
                img: flag4,
                title: 'Japan (9)',
                titleUrl: '#'
            },
            {
                img: flag5,
                title: 'France (12)',
                titleUrl: '#'
            },
            {
                img: flag6,
                title: 'Russia (14)',
                titleUrl: '#'
            },
            {
                img: flag7,
                title: 'New Zealand (17)',
                titleUrl: '#'
            },
            {
                img: flag8,
                title: 'India (19)',
                titleUrl: '#'
            },
            {
                img: flag9,
                title: 'Netherlands (15)',
                titleUrl: '#'
            },
            {
                img: flag10,
                title: 'Sweden (17)',
                titleUrl: '#'
            },
            {
                img: flag11,
                title: 'Saudi Arabia (29)',
                titleUrl: '#'
            },
            {
                img: flag12,
                title: 'Scotland (10)',
                titleUrl: '#'
            },
            {
                img: flag13,
                title: 'Canada (43)',
                titleUrl: '#'
            },
            {
                img: flag14,
                title: 'Mexico (45)',
                titleUrl: '#'
            },
            {
                img: flag15,
                title: 'Bangladesh (50)',
                titleUrl: '#'
            },
            {
                img: flag16,
                title: 'South Africa (60)',
                titleUrl: '#'
            },
            {
                img: flag17,
                title: 'Pakistan (48)',
                titleUrl: '#'
            },
            {
                img: flag18,
                title: 'Costa Rica (33)',
                titleUrl: '#'
            },
            {
                img: flag19,
                title: 'Italy (44)',
                titleUrl: '#'
            },
            {
                img: flag20,
                title: 'Thailand (55)',
                titleUrl: '#'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row">
                    {this.state.locations.map((item, index) => {
                        return (
                            <div className="col-lg-3 column-td-6" key={index}>
                                <div className="location-item">
                                    <div className="loc-img">
                                        <img src={item.img} alt="flag" />
                                    </div>
                                    <Link to={item.titleUrl} className="loc-name">
                                        {item.title}
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default Locations;