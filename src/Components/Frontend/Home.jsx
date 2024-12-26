import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AboutImg from '../../assets/images/about-us.jpg';
import Footer from '../Layouts/Footer';
import Header from '../Layouts/Header';
import ConstructionImage from '../../assets/images/construction2.jpg'
import BlogImage from '../../assets/images/construction3.jpg'
import Icon1 from '../../assets/images/icon-1.svg'
import Icon2 from '../../assets/images/icon-2.svg'
import Icon3 from '../../assets/images/icon-3.svg'
import AvatarImage from '../../assets/images/author-2.jpg'
import 'swiper/css';
import AboutSec from '../Common/AboutSec';
import { apiUrl, token } from '../Common/Http';
import LatestServices from '../Common/LatestServices';
import LatestProjects from '../Common/LatestProjects';
import LatestBlogs from '../Common/LatestBlogs';
import Testimonials from '../Common/Testimonials';

function Home() {
    

    return (
        <>
            <Header />
            <main>
                <section className='section-1'>
                    <div className="hero d-flex align-items-center">
                        <div className="container-fluid">
                            <div className="text-center">
                                <span>Welcome Amezing E Commerce</span>
                                <h1>Crafting dreams with <br /> precision and excellence</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, perferendis vel voluptatum omnis laborum molestiae reprehenderit suscipit, laudantium <br /> obcaecati totam repellendus eligendi consectetur aliquid facere optio harum, odit quisquam cupiditate.</p>
                                <div className="mt-3">
                                    <a className='btn btn-primary large'>Contact Now</a>
                                    <a className='btn btn-secondary ms-2 large'>View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <AboutSec />

                <LatestServices />

                <section className='section-4 py-5'>
                    <div className="container py-5">
                        <div className="section-header text-center">
                            <span>why choose us</span>
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, velit asperiores perspiciatis labore ab officia quasi dignissimos unde mollitia accusantium.</p>
                        </div>
                        <div className="row pt-4">
                            <div className="col-md-4">
                                <div className="card shadow border-0 p-4">
                                    <div className="card-icon">
                                        <img src={Icon1} alt="" />
                                    </div>
                                    <div className="card-title mt-3">
                                        <h3>Lorem, ipsum dolor.</h3>
                                    </div>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda in perferendis corrupti! Est quaerat, eos exercitationem repellat voluptatibus porro.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow border-0 p-4">
                                    <div className="card-icon">
                                        <img src={Icon2} alt="" />
                                    </div>
                                    <div className="card-title mt-3">
                                        <h3>Lorem, ipsum dolor.</h3>
                                    </div>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda in perferendis corrupti! Est quaerat, eos exercitationem repellat voluptatibus porro.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow border-0 p-4">
                                    <div className="card-icon">
                                        <img src={Icon3} alt="" />
                                    </div>
                                    <div className="card-title mt-3">
                                        <h3>Lorem, ipsum dolor.</h3>
                                    </div>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda in perferendis corrupti! Est quaerat, eos exercitationem repellat voluptatibus porro.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <LatestProjects />

                <Testimonials />

                <LatestBlogs />
            </main>
            <Footer />
        </>
    )
}

export default Home