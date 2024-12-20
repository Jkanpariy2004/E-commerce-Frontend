import React, { useEffect, useState } from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import HeroSec from '../Common/HeroSec'
import ServiceImage from '../../assets/images/construction1.jpg';
import { apiUrl } from '../Common/Http';

function Services() {
    const [services, setServices] = useState([]);

    const fetchLatestServices = async () => {
        const response = await fetch(apiUrl + 'get-services', {
            method: 'GET',
        });

        const result = await response.json();

        setServices(result);
    }

    useEffect(() => {
        fetchLatestServices()
    }, []);
    return (
        <>
            <Header />
            <main>
                <HeroSec preHeading='Quality. Integrity. Value' heading='Services' />

                <section className='section-3 bg-light py-5'>
                    <div className="container py-5">
                        <div className="section-header text-center">
                            <span>our services</span>
                            <h2>Our Best Services</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nam nesciunt quas voluptate error rerum!</p>
                        </div>
                        <div className="row pt-4">
                            {
                                services && services.map(services => {
                                    return (
                                        <div className="col-md-4 col-lg-4" key={services.id}>
                                            <div className="item">
                                                <div className="service-image">
                                                    <img src={services.image} className='w-100' alt="" />
                                                </div>
                                                <div className="service-body">
                                                    <div className="service-title">
                                                        <h3>{services.title}</h3>
                                                    </div>
                                                    <div className="service-content">
                                                        <p>{services.short_desc}</p>
                                                    </div>
                                                    <a className='btn btn-primary small'>Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Services
