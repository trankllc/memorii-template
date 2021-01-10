import React, {Component} from 'react';
import { GiChickenOven, GiWineGlass } from 'react-icons/gi'
import { TiPlane, TiBrush } from 'react-icons/ti'
import { FiMusic, FiShoppingCart } from 'react-icons/fi'
import { RiHotelBedLine } from 'react-icons/ri'
import { IoIosFitness } from 'react-icons/io'
import { FaRegMoneyBillAlt, FaRegHospital } from 'react-icons/fa'
import { BsBriefcase } from 'react-icons/bs'
import {Link} from "react-router-dom";
import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/img3.jpg';
import img4 from '../../../assets/images/img4.jpg';
import img5 from '../../../assets/images/img5.jpg';
import img6 from '../../../assets/images/img6.jpg';
import img7 from '../../../assets/images/img7.jpg';
import img8 from '../../../assets/images/img8.jpg';
import img9 from '../../../assets/images/img9.jpg';
import img10 from '../../../assets/images/img10.jpg';
import img11 from '../../../assets/images/img11.jpg';
import img12 from '../../../assets/images/img12.jpg';

class BrowseCategoriesTwo extends Component {
    state = {
        categories: [
            {
                img: img1,
                icon: <GiChickenOven />,
                title: 'Restaurants',
                cardLink: '#'
            },
            {
                img: img2,
                icon: <TiPlane />,
                title: 'Travels',
                cardLink: '#'
            },
            {
                img: img3,
                icon: <RiHotelBedLine />,
                title: 'Hotels',
                cardLink: '#'
            },
            {
                img: img4,
                icon: <FiMusic />,
                title: 'Events',
                cardLink: '#'
            },
            {
                img: img5,
                icon: <FiShoppingCart />,
                title: 'Shops',
                cardLink: '#'
            },
            {
                img: img6,
                icon: <IoIosFitness />,
                title: 'Fitness',
                cardLink: '#'
            },
            {
                img: img7,
                icon: <GiWineGlass />,
                title: 'Food & Drink',
                cardLink: '#'
            },
            {
                img: img8,
                icon: <TiBrush />,
                title: 'Art & Design',
                cardLink: '#'
            },
            {
                img: img9,
                icon: <TiBrush />,
                title: 'Salons',
                cardLink: '#'
            },
            {
                img: img10,
                icon: <FaRegMoneyBillAlt />,
                title: 'Jobs',
                cardLink: '#'
            },
            {
                img: img11,
                icon: <BsBriefcase />,
                title: 'Businesses',
                cardLink: '#'
            },
            {
                img: img12,
                icon: <FaRegHospital />,
                title: 'Hospital',
                cardLink: '#'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row mt-5">
                    {this.state.categories.map((item,index) => {
                        return (
                            <div className="col-lg-2 column-td-6" key={index}>
                                <div className="category-item mb-4 mt-0 ml-0 mr-0 p-0">
                                    <figure className="category-fig m-0">
                                        <img src={item.img} alt="category" className="cat-img" />
                                        <figcaption className="fig-caption">
                                            <Link to={item.cardLink} className="cat-fig-box">
                                                <div className="icon-element mb-3">
                                                    <span className="d-inline-block">
                                                        {item.icon}
                                                    </span>
                                                </div>
                                                <div className="cat-content">
                                                    <h4 className="cat__title">
                                                        {item.title}
                                                    </h4>
                                                </div>
                                            </Link>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default BrowseCategoriesTwo;