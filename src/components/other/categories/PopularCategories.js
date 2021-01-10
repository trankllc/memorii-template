import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {GiChickenOven, GiWineGlass} from 'react-icons/gi'
import {TiPlane, TiBrush} from 'react-icons/ti'
import {RiHotelBedLine} from 'react-icons/ri'
import {IoMdMusicalNotes, IoIosFitness} from 'react-icons/io'
import {FiShoppingCart} from 'react-icons/fi'
import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/img3.jpg';
import img4 from '../../../assets/images/img4.jpg';
import img5 from '../../../assets/images/img5.jpg';
import img6 from '../../../assets/images/img6.jpg';
import img7 from '../../../assets/images/img7.jpg';
import img8 from '../../../assets/images/img8.jpg';

class PopularCategories extends Component {
    states = {
        items: [
            {
                icon: <GiChickenOven />,
                title: 'Restaurants',
                stitle: '12 Listings',
                url: '#',
                img: img1
            },
            {
                icon: <TiPlane />,
                title: 'Travels',
                stitle: '22 Listings',
                url: '#',
                img: img2
            },
            {
                icon: <RiHotelBedLine />,
                title: 'Hotels',
                stitle: '33 Listings',
                url: '#',
                img: img3
            },
            {
                icon: <IoMdMusicalNotes />,
                title: 'Events',
                stitle: '44 Listings',
                url: '#',
                img: img4
            },
            {
                icon: <FiShoppingCart />,
                title: 'Shops',
                stitle: '48 Listings',
                url: '#',
                img: img5
            },
            {
                icon: <IoIosFitness />,
                title: 'Fitness',
                stitle: '50 Listings',
                url: '#',
                img: img6
            },
            {
                icon: <GiWineGlass />,
                title: 'Food & Drink',
                stitle: '14 Listings',
                url: '#',
                img: img7
            },
            {
                icon: <TiBrush />,
                title: 'Art & Design',
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

export default PopularCategories;