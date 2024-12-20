import React, { useEffect, useState } from 'react'
import ServiceImage from '../../assets/images/construction1.jpg';
import { apiUrl } from './Http';

function LatestServices() {
    const [services, setServices] = useState([]);

    const fetchLatestServices = async () => {
        const response = await fetch(apiUrl + 'get-latest-services?limit=4', {
            method: 'GET',
        });

        const result = await response.json();

        setServices(result);
    }

    useEffect(() => {
        fetchLatestServices()
    }, []);

    return (
        <section className='section-3 bg-light py-5'>
            <div className="container-fluid py-5">
                <div className="section-header text-center">
                    <span>our services</span>
                    <h2>Our Best Services</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nam nesciunt quas voluptate error rerum!</p>
                </div>
                <div className="row pt-4">
                    {
                        services && services.map(services => {
                            return (
                                <div className="col-md-3 col-lg-3" key={services.id}>
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
            </div >
        </section>
    )
}

export default LatestServices
