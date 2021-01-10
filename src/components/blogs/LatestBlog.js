import React, {Component} from 'react';
import {Link} from "react-router-dom";
import img1 from '../../assets/images/img31.jpg';
import img2 from '../../assets/images/img32.jpg';
import img3 from '../../assets/images/img30.jpg';
import authorImg from '../../assets/images/testi-img7.jpg';

class LatestBlog extends Component {
    cardState = {
        cards: [
            {
                img: img1,
                title: '50 Greatest Event Places in United Kingdom',
                date: '25 Dec,  2020',
                description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                author: 'David Wise',
                authorImg: authorImg,
                likeNum: '244',
                cardUrl: '/blog-single'
            },
            {
                img: img2,
                title: 'Top 10 Best Clothing Shops In Sydney',
                date: '26 Dec,  2020',
                description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                author: 'Mark Wins',
                authorImg: authorImg,
                likeNum: '535',
                cardUrl: '/blog-single'
            },
            {
                img: img3,
                title: 'Top 15 Greatest Hotels In United States',
                date: '27 Dec,  2020',
                description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                author: 'Matt Derry',
                authorImg: authorImg,
                likeNum: '294',
                cardUrl: '/blog-single'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row mt-5">
                    {this.cardState.cards.map((item, index) => {
                        return (
                            <div className="col-lg-4 column-td-6" key={index}>
                                <div className="card-item blog-card">
                                    <Link to={item.cardUrl} className="card-image-wrap">
                                        <div className="card-image">
                                            <img src={item.img} alt="Blog" className="card__img" />
                                        </div>
                                    </Link>
                                    <div className="card-content pl-0 pr-0">
                                        <Link to={item.cardUrl} className="card-title">
                                            {item.title}
                                        </Link>
                                        <ul className="card-meta pl-0 d-flex justify-content-between align-items-center mt-2">
                                            <li>{item.date} - <Link to={item.cardUrl} className="tag__text">Tips & Tricks</Link></li>
                                            <li><Link to="#" >{item.likeNum} Likes</Link></li>
                                        </ul>
                                        <p className="card-sub mt-3">
                                            {item.description}
                                        </p>
                                        <ul className="post-author d-flex align-items-center justify-content-between mt-3">
                                            <li>
                                                <img src={item.authorImg} alt="Author" />
                                                <span className="by__text">By</span>
                                                <span>{item.author}</span>
                                            </li>
                                            <li>
                                                <Link to={item.cardUrl} className="blog__btn">
                                                    read more
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default LatestBlog;