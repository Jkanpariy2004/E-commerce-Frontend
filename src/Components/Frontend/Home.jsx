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
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import AboutSec from '../Common/AboutSec';
import { apiUrl, token } from '../Common/Http';
import LatestServices from '../Common/LatestServices';

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

                <section className='section-3 bg-light py-5'>
                    <div className="container-fluid py-5">
                        <div className="section-header text-center">
                            <span>our projects</span>
                            <h2>Our Best Projects</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nam nesciunt quas voluptate error rerum!</p>
                        </div>
                        <div className="row pt-4">
                            <div className="col-md-3 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ConstructionImage} className='w-100' alt="" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Kolkata Project</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a culpa, molestiae assumenda asperiores error.</p>
                                        </div>
                                        <a className='btn btn-primary small'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ConstructionImage} className='w-100' alt="" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Kolkata Project</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a culpa, molestiae assumenda asperiores error.</p>
                                        </div>
                                        <a className='btn btn-primary small'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ConstructionImage} className='w-100' alt="" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Kolkata Project</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a culpa, molestiae assumenda asperiores error.</p>
                                        </div>
                                        <a className='btn btn-primary small'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ConstructionImage} className='w-100' alt="" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Kolkata Project</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a culpa, molestiae assumenda asperiores error.</p>
                                        </div>
                                        <a className='btn btn-primary small'>Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section-5 py-5'>
                    <div className="container py-5">
                        <div className="section-header text-center">
                            <span>testimonials</span>
                            <h2>What People are saying about us</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nam nesciunt quas voluptate error rerum!</p>
                        </div>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={50}
                            slidesPerView={3}
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <div className="card shadow border-0">
                                    <div className='card-body p-5'>
                                        <div className="rating tracking-wide">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                        <div className='content pt-3 pb-2'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi numquam, esse, corrupti dolores incidunt iure placeat quidem temporibus neque dicta maxime provident. Commodi sapiente sed eligendi id porro dolores debitis.</p>
                                        </div>
                                        <hr />
                                        <div className='d-flex meta'>
                                            <div>
                                                <img src={AvatarImage} alt="" width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow border-0">
                                    <div className='card-body p-5'>
                                        <div className="rating tracking-wide">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                        <div className='content pt-3 pb-2'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi numquam, esse, corrupti dolores incidunt iure placeat quidem temporibus neque dicta maxime provident. Commodi sapiente sed eligendi id porro dolores debitis.</p>
                                        </div>
                                        <hr />
                                        <div className='d-flex meta'>
                                            <div>
                                                <img src={AvatarImage} alt="" width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow border-0">
                                    <div className='card-body p-5'>
                                        <div className="rating tracking-wide">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                        <div className='content pt-3 pb-2'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi numquam, esse, corrupti dolores incidunt iure placeat quidem temporibus neque dicta maxime provident. Commodi sapiente sed eligendi id porro dolores debitis.</p>
                                        </div>
                                        <hr />
                                        <div className='d-flex meta'>
                                            <div>
                                                <img src={AvatarImage} alt="" width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow border-0">
                                    <div className='card-body p-5'>
                                        <div className="rating tracking-wide">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                        <div className='content pt-3 pb-2'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi numquam, esse, corrupti dolores incidunt iure placeat quidem temporibus neque dicta maxime provident. Commodi sapiente sed eligendi id porro dolores debitis.</p>
                                        </div>
                                        <hr />
                                        <div className='d-flex meta'>
                                            <div>
                                                <img src={AvatarImage} alt="" width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow border-0">
                                    <div className='card-body p-5'>
                                        <div className="rating tracking-wide">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                        <div className='content pt-3 pb-2'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi numquam, esse, corrupti dolores incidunt iure placeat quidem temporibus neque dicta maxime provident. Commodi sapiente sed eligendi id porro dolores debitis.</p>
                                        </div>
                                        <hr />
                                        <div className='d-flex meta'>
                                            <div>
                                                <img src={AvatarImage} alt="" width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>

                <section className='section-6 bg-light py-5'>
                    <div className="container">
                        <div className="section-header text-center">
                            <span>Blog & News</span>
                            <h2>Articles & blog posts</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nam nesciunt quas voluptate error rerum!</p>
                        </div>
                        <div className="row pt-3">
                            <div className="col-md-4">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={BlogImage} alt="" className='w-100' />
                                    </div>
                                    <div className="card-body p-3">
                                        <div className='mb-3'>
                                            <a className='title'>Dummy Blog Title</a>
                                        </div>
                                        <a className='btn btn-primary small'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={BlogImage} alt="" className='w-100' />
                                    </div>
                                    <div className="card-body p-3">
                                        <div className='mb-3'>
                                            <a className='title'>Dummy Blog Title</a>
                                        </div>
                                        <a className='btn btn-primary small'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={BlogImage} alt="" className='w-100' />
                                    </div>
                                    <div className="card-body p-3">
                                        <div className='mb-3'>
                                            <a className='title'>Dummy Blog Title</a>
                                        </div>
                                        <a className='btn btn-primary small'>Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home