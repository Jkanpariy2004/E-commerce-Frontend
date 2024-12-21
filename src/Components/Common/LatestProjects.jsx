import React, { useEffect, useState } from 'react'
import { apiUrl } from './Http';

function LatestProjects() {
    const [projects, setProjects] = useState([]);

    const fetchLatestProjects = async () => {
        const response = await fetch(apiUrl + 'get-latest-projects?limit=4', {
            method: 'GET',
        });

        const result = await response.json();

        setProjects(result);
    }

    useEffect(() => {
        fetchLatestProjects()
    }, []);
    return (
        <section className='section-3 bg-light py-5'>
            <div className="container-fluid py-5">
                <div className="section-header text-center">
                    <span>our projects</span>
                    <h2>Our Best Projects</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nam nesciunt quas voluptate error rerum!</p>
                </div>
                <div className="row pt-4">
                    {
                        projects && projects.map(projects => {
                            return (
                                <div className="col-md-3 col-lg-3" key={projects.id}>
                                    <div className="item">
                                        <div className="service-image">
                                            <img src={projects.image} className='w-100' alt="" />
                                        </div>
                                        <div className="service-body">
                                            <div className="service-title">
                                                <h3>{projects.title}</h3>
                                            </div>
                                            <div className="service-content">
                                                <p>{projects.short_desc}</p>
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
    )
}

export default LatestProjects
