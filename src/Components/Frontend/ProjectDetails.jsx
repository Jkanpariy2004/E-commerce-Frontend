import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import { apiUrl } from '../Common/Http';
import HeroSec from '../Common/HeroSec';

function ProjectDetails() {
    const { slug } = useParams();
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProjectDetails = async () => {
        try {
            const response = await fetch(`${apiUrl}project/${slug}`, { method: 'GET' });
            if (!response.ok) throw new Error('Failed to fetch project details');
            const result = await response.json();
            if (result.data) {
                setProjects(result.data);
            } else {
                setError('Project not found');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjectDetails();
    }, [slug]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <>
            <Header />
            <HeroSec
                preHeading="Quality. Integrity. Value"
                heading={projects ? projects.title : "Project Details"}
                text={projects ? projects.short_desc : "Project details"}
            />
            <main className="service-details-page">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-3">
                            <h3 className='fs-2'>Insights</h3>
                            <ul>
                                <li className='mt-3'><strong>Location:</strong> <br />{projects.location}</li>
                                <li className='mt-3'><strong>Construction Type:</strong><br /> {projects.construction_type}</li>
                                <li className='mt-3'><strong>Sector:</strong><br /> {projects.sector}</li>
                            </ul>
                        </aside>
                        <section className="col-md-9 service-details">
                            <div>
                                <img src={projects.image} alt={projects.title} className="w-100" />
                                <p>{projects.content}</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default ProjectDetails;
