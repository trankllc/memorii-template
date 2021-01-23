import React, {Component} from 'react';
import {IoIosCheckmarkCircle, IoIosLink, IoMdStar, IoMdStarHalf} from "react-icons/io";
import {GiChickenOven} from "react-icons/gi";
import {RiHotelBedLine, RiPlaneLine} from "react-icons/ri";
import {FiHeart, FiPhone} from "react-icons/fi";
import {FaRegCalendarCheck} from "react-icons/fa";
import {AiOutlineEye} from "react-icons/ai";
import {Link} from "react-router-dom";
import img1 from '../../assets/images/img25.jpg';
import img2 from '../../assets/images/img26.jpg';
import img3 from '../../assets/images/img27.jpg';
import img4 from '../../assets/images/img28.jpg';
import img5 from '../../assets/images/img29.jpg';
import img6 from '../../assets/images/img30.jpg';
import img7 from '../../assets/images/img29.jpg';
import img8 from '../../assets/images/img30.jpg';
import authorimg from '../../assets/images/small-team1.jpg';


const state = {
	items: [
		{
			// bedge: 'New Open',
			title: '店舗名',
			// titleIcon: <IoIosCheckmarkCircle />,
			titleUrl: '/listing-details',
			stitle: '住所',
			image:img1,
			cardType: 'Restaurant',
			cardTypeIcon: <GiChickenOven />,
			author: authorimg,
			authorUrl: '#',
			number: 'アクセス',
			website: '給料',
			date: 'www.mysitelink.com',
			view: '204',
			ratings: [
				<IoMdStar />,
				<IoMdStar />,
				<IoMdStar />,
				<IoMdStarHalf />,
				<IoMdStar className="last-star" />,
			],
			ratingNum: '4.5'
		},
		{
			// bedge: 'Closed',
			title: '店舗名',
			titleIcon: '',
			titleUrl: '/listing-details',
			stitle: '住所',
			image: img2,
			cardType: 'Travel',
			cardTypeIcon: <RiPlaneLine />,
			author: authorimg,
			authorUrl: '#',
			number: 'アクセス',
			website: '給料',
			date: 'www.mysitelink.com',
			view: '248',
			ratings: [
				<IoMdStar />,
				<IoMdStar />,
				<IoMdStar />,
				<IoMdStarHalf />,
				<IoMdStar className="last-star" />,
			],
			ratingNum: '4.6'
		},
		{
			// bedge: 'New Open',
			title: '店舗名',
			// titleIcon: <IoIosCheckmarkCircle />,
			titleUrl: '/listing-details',
			stitle: '住所',
			image: img3,
			cardType: 'Hotel',
			cardTypeIcon: <RiHotelBedLine />,
			author: authorimg,
			authorUrl: '#',
			number: 'アクセス',
			website: '給料',
			date: 'www.mysitelink.com',
			view: '248',
			ratings: [
				<IoMdStar />,
				<IoMdStar />,
				<IoMdStar />,
				<IoMdStarHalf />,
				<IoMdStar className="last-star" />,
			],
			ratingNum: '4.6'
		},
		{
			// bedge: 'New Open',
			title: '店舗名',
			// titleIcon: <IoIosCheckmarkCircle />,
			titleUrl: '/listing-details',
			stitle: '住所',
			image: img4,
			cardType: 'Restaurant',
			cardTypeIcon: <GiChickenOven />,
			author: authorimg,
			authorUrl: '#',
			number: 'アクセス',
			website: '給料',
			date: 'www.mysitelink.com',
			view: '204',
			ratings: [
				<IoMdStar />,
				<IoMdStar />,
				<IoMdStar />,
				<IoMdStarHalf />,
				<IoMdStar className="last-star" />,
			],
			ratingNum: '4.5'
		},
		{
			// bedge: 'Closed',
			title: '店舗名',
			titleIcon: '',
			titleUrl: '/listing-details',
			stitle: '住所',
			image: img5,
			cardType: 'Travel',
			cardTypeIcon: <RiPlaneLine />,
			author: authorimg,
			authorUrl: '#',
			number: 'アクセス',
			website: '給料',
			date: 'www.mysitelink.com',
			view: '248',
			ratings: [
				<IoMdStar />,
				<IoMdStar />,
				<IoMdStar />,
				<IoMdStarHalf />,
				<IoMdStar className="last-star" />,
			],
			ratingNum: '4.6'
		},
		{
			// bedge: 'New Open',
			title: '店舗名',
			// titleIcon: <IoIosCheckmarkCircle />,
			titleUrl: '/listing-details',
			stitle: '住所',
			image: img6,
			cardType: 'Hotel',
			cardTypeIcon: <RiHotelBedLine />,
			author: authorimg,
			authorUrl: '#',
			number: 'アクセス',
			website: '給料',
			date: 'www.mysitelink.com',
			view: '248',
			ratings: [
				<IoMdStar />,
				<IoMdStar />,
				<IoMdStar />,
				<IoMdStarHalf />,
				<IoMdStar className="last-star" />,
			],
			ratingNum: '4.6'
		},
		{
			// bedge: 'Closed',
			title: '店舗名',
			titleIcon: '',
			titleUrl: '/listing-details',
			stitle: '住所',
			image: img7,
			cardType: 'Travel',
			cardTypeIcon: <RiPlaneLine />,
			author: authorimg,
			authorUrl: '#',
			number: 'アクセス',
			website: '給料',
			date: 'www.mysitelink.com',
			view: '248',
			ratings: [
				<IoMdStar />,
				<IoMdStar />,
				<IoMdStar />,
				<IoMdStarHalf />,
				<IoMdStar className="last-star" />,
			],
			ratingNum: '4.6'
		},
		{
			// bedge: 'New Open',
			title: '店舗名',
			// titleIcon: <IoIosCheckmarkCircle />,
			titleUrl: '/listing-details',
			stitle: '住所',
			image: img8,
			cardType: 'Hotel',
			cardTypeIcon: <RiHotelBedLine />,
			author: authorimg,
			authorUrl: '#',
			number: 'アクセス',
			website: '給料',
			date: 'www.mysitelink.com',
			view: '248',
			ratings: [
				<IoMdStar />,
				<IoMdStar />,
				<IoMdStar />,
				<IoMdStarHalf />,
				<IoMdStar className="last-star" />,
			],
			ratingNum: '4.6'
		},
	]
}

const PlaceTwoColumn = () => {
		return (
			<>
				{state.items.map((item, index) => {
					return (
						<div className="col-lg-6 column-td-6" key={index}>
							<div className="card-item">
									<Link to={item.titleUrl} className="card-image-wrap">
										<div className="card-image">
											<img src={item.image} className="card__img" alt="Place" />
											<span className={item.titleIcon ? 'badge': 'badge badge-closed' }>{item.bedge}</span>
											{/* <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
												<FiHeart />
											</span> */}
										</div>
									</Link>
								<div className="card-content-wrap">
									<div className="card-content">
										<Link to={item.titleUrl}>
											<h5 className="card-meta">
												<span>{item.cardTypeIcon}</span> {item.cardType}
											</h5>
											<h4 className="card-title">{item.title}
												<i>{item.titleIcon}</i>
											</h4>
											<p className="card-sub">
												{item.stitle}
											</p>
										</Link>
										<a href={item.authorUrl} className="author-img">
											<img src={item.author} alt="author-img" />
										</a>
										<ul className="info-list padding-top-20px">
											<li><span className="la d-inline-block"><FiPhone /></span> {item.number}</li>
											<li><span className="la d-inline-block"><IoIosLink /></span>  <a href={item.websiteUrl}>
												{item.website}
											</a>
											</li>
											<li>
												<span className="la d-inline-block"><FaRegCalendarCheck /></span> {item.date}
											</li>
										</ul>
									</div>
									<div className="rating-row">
										<div className="rating-rating">
											{item.ratings.map((rating, index) => {
												return (
													<span key={index}>{rating}</span>
												)
											})}
												<span className="rating-count">{item.ratingNum}</span>
										</div>
										<div className="listing-info">
											<ul>
												<li><span className="info__count"><AiOutlineEye /></span> {item.view}</li>
												<li>
													<span className="info__save" data-toggle="tooltip" data-placement="top" title="Bookmark">
														<FiHeart />
													</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</>
		);
}

export default PlaceTwoColumn;