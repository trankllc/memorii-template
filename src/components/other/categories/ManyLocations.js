import React, {Component} from 'react';
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

class ManyLocations extends Component {
    state = {
        locations: [
            {
                img: flag1,
                country: 'United States (2)',
                countryUrl: '#',
            },
            {
                img: flag2,
                country: 'London (4)',
                countryUrl: '#',
            },
            {
                img: flag3,
                country: 'Australia (7)',
                countryUrl: '#',
            },
            {
                img: flag4,
                country: 'Japan (9)',
                countryUrl: '#',
            },
            {
                img: flag5,
                country: 'France (12)',
                countryUrl: '#',
            },
            {
                img: flag6,
                country: 'Russia (14)',
                countryUrl: '#',
            },
            {
                img: flag7,
                country: 'New Zealand (17)',
                countryUrl: '#',
            },
            {
                img: flag8,
                country: 'India (19)',
                countryUrl: '#',
            },
            {
                img: flag9,
                country: 'Netherlands (15)',
                countryUrl: '#',
            },
            {
                img: flag10,
                country: 'Sweden (17)',
                countryUrl: '#',
            },
            {
                img: flag11,
                country: 'Saudi Arabia (29)',
                countryUrl: '#',
            },
            {
                img: flag12,
                country: 'Scotland (10)',
                countryUrl: '#',
            },
            {
                img: flag13,
                country: 'Canada (43)',
                countryUrl: '#',
            },
            {
                img: flag14,
                country: 'Mexico (45)',
                countryUrl: '#',
            },
            {
                img: flag15,
                country: 'Bangladesh (50)',
                countryUrl: '#',
            },
            {
                img: flag16,
                country: 'South Africa (60)',
                countryUrl: '#',
            },
            {
                img: flag17,
                country: 'Pakistan (48)',
                countryUrl: '#',
            },
            {
                img: flag18,
                country: 'Costa Rica (33)',
                countryUrl: '#',
            },
            {
                img: flag19,
                country: 'Italy (44)',
                countryUrl: '#',
            },
            {
                img: flag20,
                country: 'Thailand (55)',
                countryUrl: '#',
            }
        ]
    }
    render() {
        return (
            <>
                <div className="col-lg-3 column-td-6">
                    <div className="location-item">
                        <div className="loc-img">
                            <img src="images/flag1.jpg" alt="flag" />
                        </div>
                        <a href="#" className="loc-name">United states (2)</a>
                    </div>
                </div>
            </>
        );
    }
}

export default ManyLocations;