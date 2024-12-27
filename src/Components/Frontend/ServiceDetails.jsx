import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import { apiUrl } from '../Common/Http';
import HeroSec from '../Common/HeroSec';

function ServiceDetails() {
    const { slug } = useParams();
    const [services, setServices] = useState([]);
    const [service, setService] = useState(null);

    const fetchAllServices = async () => {
        const response = await fetch(`${apiUrl}get-services`, { method: 'GET' });
        const result = await response.json();
        setServices(result);
    };

    const fetchServiceDetails = async () => {
        const response = await fetch(`${apiUrl}service/${slug}`, { method: 'GET' });
        const result = await response.json();
        setService(result.data);
    };

    useEffect(() => {
        fetchAllServices();
    }, []);

    useEffect(() => {
        fetchServiceDetails();
    }, [slug]);

    return (
        <>
            <Header />

            <HeroSec
                preHeading="Quality. Integrity. Value"
                heading={service ? service.title : "Service Details"}
                text={service ? service.short_desc : "Service details"}
            />

            <main className="service-details-page">
                <div className="container">
                    <div className="row">
                        {/* Sidebar for Service List */}
                        <aside className="col-md-3 service-list">
                            <h2>All Services</h2>
                            <ul>
                                {services.map((item) => (
                                    <li key={item.slug}>
                                        <Link to={`/service/${item.slug}`} className={slug === item.slug ? 'active-service' : ''}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </aside>
                        {/* Service Details */}
                        <section className="col-md-9 service-details">
                            {service ? (
                                <div>
                                    <img src={service.image} alt={service.title} className="w-100" />
                                    <p>{service.content}</p>
                                </div>
                            ) : (
                                <div className="loading">Loading...</div>
                            )}
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default ServiceDetails;
