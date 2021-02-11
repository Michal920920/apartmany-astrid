import React, { Component } from 'react';
import {Link} from "gatsby"
import Slider from 'react-slick';

import img1 from '../../assets/img/latest-post/01.jpg';
import img2 from '../../assets/img/latest-post/02.jpg';
import img3 from '../../assets/img/latest-post/03.jpg';

const blogpost = [
    { img: img1, title: 'Each of our 4 double rooms has its own distinct.', postdate: '28th Aug 2020', author: 'Admin', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { img: img2, title: 'Each of our 6 double rooms has its own distinct.', postdate: '28th Aug 2020', author: 'Admin', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { img: img3, title: 'Each of our 8 double rooms has its own distinct.', postdate: '28th Aug 2020', author: 'Admin', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { img: img1, title: 'Each of our 2 double rooms has its own distinct.', postdate: '28th Aug 2020', author: 'Admin', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { img: img2, title: 'Each of our 3 double rooms has its own distinct.', postdate: '28th Aug 2020', author: 'Admin', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { img: img3, title: 'Each of our 5 double rooms has its own distinct.', postdate: '28th Aug 2020', author: 'Admin', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
];

class Blogpost extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            fade: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: true,
            dots: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        }
        return (
            <section className="latest-news pt-115 pb-115">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8 col-sm-7">
                            <div className="section-title">
                                <span className="title-tag">Blog</span>
                                <h2>News Feeds</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-5 d-none d-sm-block">
                            <div className="latest-post-arrow arrow-style text-right">
	                            {/*<div className="slick-arrow prev-arrow" onClick={this.previous}><i className="fal fa-arrow-left" /></div>*/}
	                            {/*<div className="slick-arrow next-arrow" onClick={this.next}><i className="fal fa-arrow-right" /></div>*/}
                            </div>
                        </div>
                    </div>
                    {/* Latest post loop */}
                    <Slider className="row latest-post-slider mt-80" ref={c => (this.slider = c)} {...settings}>
                        {blogpost.map((item, i) => (
                            <div key={i} className="col-lg-12">
                                <div className="latest-post-box">
                                    <div className="post-img" style={{ backgroundImage: "url(" + item.img + ")" }} />
                                    <div className="post-desc">
                                        <ul className="post-meta">
                                            <li>
                                                <Link to="/news-details"><i className="fal fa-calendar-alt" />{item.postdate}</Link>
                                            </li>
                                            <li>
                                                <Link to="/news-details"><i className="fal fa-user" />By {item.author}</Link>
                                            </li>
                                        </ul>
                                        <h4><Link to="/news-details">{item.title}</Link></h4>
                                        <p>
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Blogpost;
