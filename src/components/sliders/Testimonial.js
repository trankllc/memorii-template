import React, {Component} from 'react';
import { FaQuoteLeft } from 'react-icons/fa'
import Slider from "react-slick";
import img1 from '../../assets/images/team8.jpg';
import img2 from '../../assets/images/team9.jpg';
import img3 from '../../assets/images/team10.jpg';

class Testimonial extends Component {
    testimonialState = {
        sliders: [
            {
                id: 1,
                img: img1,
                title: 'Richard Doe',
                designation: 'united states',
                content: 'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des culpa officia deserunt mollit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?'
            },
            {
                id: 2,
                img: img2,
                title: 'Denwen Evil',
                designation: 'united kingdom',
                content: 'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des culpa officia deserunt mollit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?'
            },
            {
                id: 3,
                img: img3,
                title: 'Collis Pong',
                designation: 'melbourne, australia',
                content: 'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des culpa officia deserunt mollit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?'
            }
        ]
    }
    render() {
        return (
            <>
                <Slider className="places-carousel testimonial-carousel" dots={true} infinite={true} slidesToScroll={1} slidesToShow={1} centerMode={false} centerPadding="50px" arrows={true}>
                    {this.testimonialState.sliders.map(slider => {
                        return (
                            <div className="testimonial-item" key={slider.id}>
                                <div className="testi-comment">
                                    <span className="testi_quote">
                                        <FaQuoteLeft />
                                    </span>
                                    <p className="testi__desc">
                                        {slider.content}
                                    </p>
                                </div>
                                <div className="testi-content">
                                    <img src={slider.img} className="testi__img" alt="testimonial" />
                                    <h4 className="tesi__title">{slider.title}</h4>
                                    <span className="testi__meta">{slider.designation}</span>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </>
        );
    }
}

export default Testimonial;