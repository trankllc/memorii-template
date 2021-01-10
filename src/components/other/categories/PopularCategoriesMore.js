import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {GiPineTree} from 'react-icons/gi'
import {BsBriefcase} from 'react-icons/bs'
import {TiBrush} from 'react-icons/ti'
import {AiOutlineCar} from 'react-icons/ai'
import {FiBookOpen} from 'react-icons/fi'
import {FaRegHospital, FaRegMoneyBillAlt} from 'react-icons/fa'
import img1 from '../../../assets/images/img9.jpg';
import img2 from '../../../assets/images/img10.jpg';
import img3 from '../../../assets/images/img11.jpg';
import img4 from '../../../assets/images/img12.jpg';
import img5 from '../../../assets/images/img13.jpg';
import img6 from '../../../assets/images/img14.jpg';
import img7 from '../../../assets/images/img15.jpg';
import img8 from '../../../assets/images/img16.jpg';

export default class PopularCategoriesMore extends Component {
    states = {
        items: [
            {
                icon: <TiBrush />,
                title: 'outdo0rs',
                stitle: '20 Listings',
                url: '#',
                img: img1
            },
            {
                icon: <TiBrush />,
                title: 'nightlife',
                stitle: '20 Listings',
                url: '#',
                img: img2
            },
            {
                icon: <FaRegHospital />,
                title: 'hospitals',
                stitle: '20 Listings',
                url: '#',
                img: img3
            },
            {
                icon: <GiPineTree />,
                title: 'adventure',
                stitle: '23 Listings',
                url: '#',
                img: img4
            },
            {
                icon: <FiBookOpen />,
                title: 'educations',
                stitle: '40 Listings',
                url: '#',
                img: img5
            },
            {
                icon: <AiOutlineCar />,
                title: 'cars',
                stitle: '33 Listings',
                url: '#',
                img: img6
            },
            {
                icon: <BsBriefcase />,
                title: 'jobs',
                stitle: '20 Listings',
                url: '#',
                img: img7
            },
            {
                icon: <FaRegMoneyBillAlt />,
                title: 'business',
                stitle: '20 Listings',
                url: '#',
                img: img8
            }
        ]
    }
    render() {
        return (
            <>
                {this.states.items.map((item, index) => {
                    return (
                        <div className="col-lg-3 column-td-6" key={index}>
                            <div className="category-item mb-4 mt-0 ml-0 mr-0 p-0">
                                <figure className="category-fig m-0">
                                    <img src={item.img} alt="category" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <Link to={item.url} className="cat-fig-box">
                                            <div className="icon-element mb-3">
                                                {item.icon}
                                            </div>
                                            <div className="cat-content">
                                                <h4 className="cat__title mb-3">{item.title}</h4>
                                                <span className="badge">{item.stitle}</span>
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