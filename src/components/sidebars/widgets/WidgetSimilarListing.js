import React, {Component} from 'react';
import { BsEye } from 'react-icons/bs'
import { MdStar, MdStarHalf } from 'react-icons/md'
import Button from "../../common/Button";
import {Link} from "react-router-dom";
import hairColorIcon from '../../../assets/images/hair-color.png';
import img2 from '../../../assets/images/img35.jpg';
import img3 from '../../../assets/images/img36.jpg';
import img4 from '../../../assets/images/img37.jpg';
import { FaCut } from 'react-icons/fa';

class WidgetSimilarListing extends Component {
    state = {
        title: 'メニュー',
        items: [
            {
                img: <FaCut fontSize={50} color="" />,
                title: 'カラー&トリートメント',
                titleUrl: '/blog-single',
                price: '$19.00',
                cat: '',
                catUrl: '#',
                stars: [
                    // <MdStar />,
                    // <MdStar />,
                    // <MdStar />,
                    // <MdStar />,
                    // <MdStarHalf />,
                ]
            },
            {
                img: <img src={hairColorIcon} alt="" />,
                title: 'カラー',
                titleUrl: '/blog-single',
                price: '$20.00',
                cat: '',
                catUrl: '#',
                stars: [

                ]
            },
            // {
            //     img: img3,
            //     title: 'カラー',
            //     titleUrl: '/blog-single',
            //     price: '$19.00',
            //     cat: '',
            //     catUrl: '#',
            //     stars: [

            //     ]
            // },
            // {
            //     img: img4,
            //     title: 'カラー',
            //     titleUrl: '/blog-single',
            //     price: '$19.00',
            //     cat: '',
            //     catUrl: '#',
            //     stars: [

            //     ]
            // },
        ]
    }
    render() {
        return (
            <>
                <div className="sidebar-widget similar-widget">
                    <h3 className="widget-title">
                        {this.state.title}
                    </h3>
                    <div className="title-shape"></div>
                    <div className="similar-list padding-top-30px">

                        {this.state.items.map((item, i) => {
                            return (
                                <div className="recent-item" key={i}>
                                    <div className="recent-img">
                                        <Link to={item.titleUrl}>
                                            {item.img}
                                        </Link>
                                    </div>
                                    <div className="recentpost-body">
                                        <h4 className="recent__link">
                                            <Link to={item.titleUrl}>
                                                {item.title}
                                            </Link>
                                        </h4>
                                        <div className="rating-rating">

                                            {item.stars.map((icon, i) => {
                                                return <span key={i} className="la la-star">{icon}</span>
                                            })}

                                        </div>
                                        <p className="recent__meta">
                                            <span className="color-text font-weight-bold">{item.price}</span> <Link to={item.catUrl}>{item.cat}</Link>
                                        </p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    {/* <div className="btn-box text-center padding-top-30px">
                        <Button text="see all listings" url="/listing-grid" className="d-block">
                            <BsEye />
                        </Button>
                    </div> */}
                </div>
            </>
        );
    }
}

export default WidgetSimilarListing;