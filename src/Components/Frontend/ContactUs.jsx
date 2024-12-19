import React from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import HeroSec from '../Common/HeroSec'

function ContactUs() {
    return (
        <>
            <Header />
            <main>
                <HeroSec preHeading='Quality. Integrity. Value' heading='Contact Us' />

                <section className='section-9 py-5'>
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>Contact Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum possimus impedit consequatur quidem maiores veritatis, qui, molestiae fuga eligendi excepturi quo reprehenderit nostrum eaque non architecto quasi praesentium doloribus beatae?</p>
                        </div>
                        <div className='row mt-5'>
                            <div className="col-md-3">
                                <div className="card shadow border-0 mb-3">
                                    <div className="card-body p-4">
                                        <h3>Call Us</h3>
                                        <a href="#">(888-000-0000)</a><br />
                                        <a href="#">(232-852-4563)</a>

                                        <h3 className='mt-4'>You Can Write Us</h3>
                                        <a href="#">example@example.com</a><br />
                                        <a href="#">info@example.com</a>

                                        <h3 className='mt-4'>Address</h3>
                                        <div>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.<br /> Ducimus, reiciendis.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="card shadow border-0">
                                    <div className="card-body p-5">
                                        <form action="">
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="" className='form-lable'>Name</label>
                                                    <input type="text" className='form-control form-control-lg' placeholder='Enter Your Name' />
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="" className='form-lable'>Email</label>
                                                    <input type="email" className='form-control form-control-lg' placeholder='Enter Your Email' />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="" className='form-lable'>Phone.</label>
                                                    <input type="number" className='form-control form-control-lg' placeholder='Enter Your Phone No.' />
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="" className='form-lable'>Subject</label>
                                                    <input type="text" className='form-control form-control-lg' placeholder='Enter Subject' />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label htmlFor="" className='form-lable'>Message</label>
                                                    <textarea className='form-control form-control-lg' rows={5} placeholder='Your Message' />
                                                </div>
                                            </div>
                                            <div>
                                                <button className='btn btn-primary large mt-3'>
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
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

export default ContactUs
