import React, {Component} from 'react';
import {Link} from "react-router-dom";
import img1 from '../../assets/images/img23.jpg';
import img2 from '../../assets/images/img24.jpg';
import img3 from '../../assets/images/img25.jpg';
import img4 from '../../assets/images/img26.jpg';
import img5 from '../../assets/images/img27.jpg';
import img6 from '../../assets/images/img28.jpg';
import img7 from '../../assets/images/img29.jpg';
import img8 from '../../assets/images/img30.jpg';
import img9 from '../../assets/images/img31.jpg';

import flag1 from '../../assets/images/flag21.png';
import flag2 from '../../assets/images/flag1.jpg';
import flag3 from '../../assets/images/flag2.jpg';
import flag4 from '../../assets/images/flag22.png';
import flag5 from '../../assets/images/flag18.jpg';
import flag6 from '../../assets/images/flag3.jpg';
import flag7 from '../../assets/images/flag7.jpg';
import flag8 from '../../assets/images/flag5.png';
import flag9 from '../../assets/images/flag19.svg';

class PopularDestination extends Component {
    state = {
        destinations: [
            {
                img: img1,
                cityFlag: flag1,
                cityName: 'Canada',
                listingTxt: '12 listings',
                boxCol: '4',
                cardUrl: '#'
            },
            {
                img: img2,
                cityFlag: flag2,
                cityName: 'United States',
                listingTxt: '22 listings',
                boxCol: '4',
                cardUrl: '#'
            },
            {
                img: img3,
                cityFlag: flag3,
                cityName: 'United Kingdom',
                listingTxt: '32 listings',
                boxCol: '4',
                cardUrl: '#'
            },
            {
                img: img4,
                cityFlag: flag4,
                cityName: 'Mexico',
                listingTxt: '44 listings',
                boxCol: '3',
                cardUrl: '#'
            },
            {
                img: img5,
                cityFlag: flag5,
                cityName: 'Costa Rica',
                listingTxt: '48 listings',
                boxCol: '3',
                cardUrl: '#'
            },
            {
                img: img6,
                cityFlag: flag6,
                cityName: 'Australia',
                listingTxt: '50 listings',
                boxCol: '3',
                cardUrl: '#'
            },
            {
                img: img7,
                cityFlag: flag7,
                cityName: 'New Zealand ',
                listingTxt: '14 listings',
                boxCol: '3',
                cardUrl: '#'
            },
            {
                img: img8,
                cityFlag: flag8,
                cityName: 'France',
                listingTxt: '20 listings',
                boxCol: '6',
                cardUrl: '#'
            },
            {
                img: img9,
                cityFlag: flag9,
                cityName: 'Italy',
                listingTxt: '14 listings',
                boxCol: '6',
                cardUrl: '#'
            }
        ]
    }
    render() {
        return (
            <>
                {this.state.destinations.map((item, index) =>{
                    return (
                        <div className={'column-td-6 col-lg-'+item.boxCol} key={index}>
                            <div className="category-item mb-4 mt-0 ml-0 mr-0 p-0">
                                <figure className="category-fig mb-0">
                                    <img src={item.img} alt="category" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <Link to={item.cardUrl}
                                           className="cat-fig-box d-flex justify-content-between align-items-center">
                                            <div className="cat-content">
                                                <h4 className="cat__title mb-2">
                                                    {item.cityName}
                                                </h4>
                                                <span className="badge">
                                                    {item.listingTxt}
                                                </span>
                                            </div>
                                            <div className="loc-img">
                                                <img src={item.cityFlag} alt={item.cityName} />
                                            </div>
                                        </Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default PopularDestination;