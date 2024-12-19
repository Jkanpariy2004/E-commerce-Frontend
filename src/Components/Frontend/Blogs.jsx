import React from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import HeroSec from '../Common/HeroSec'
import BlogImage from '../../assets/images/construction3.jpg'

function Blogs() {
    return (
        <>
            <Header />
            <main>
                <HeroSec preHeading='Quality. Integrity. Value' heading='Blogs' />

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

export default Blogs
