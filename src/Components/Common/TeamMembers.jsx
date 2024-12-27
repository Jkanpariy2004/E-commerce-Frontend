import React, { useEffect, useState } from 'react'
import { apiUrl } from './Http';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";

function TeamMembers() {
    const [members, setMembers] = useState([]);

    const fetchMembers = async () => {
        const response = await fetch(apiUrl + 'get-members', {
            method: 'GET',
        });

        const result = await response.json();

        setMembers(result);
    }

    useEffect(() => {
        fetchMembers()
    }, []);

    return (
        <section className="section-8 bg-light py-5">
            <div className="container">
                <div className="section-header text-center">
                    <span>Team</span>
                    <h2>Our Team</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nam nesciunt quas voluptate error rerum!</p>
                </div>
                <div className="row pt-3">
                    {
                        members && members.map(members => {
                            return (
                                <div className="col-md-6 col-lg-3 mb-3">
                                    <div className="card shadow border-0">
                                        <div className="card-img-top">
                                            <img src={members.image} alt="" className='w-100 members-img' />
                                        </div>
                                        <div className="card-body p-3">
                                            <div className="card-title pb-0 mb-0">
                                                {members.name}
                                            </div>
                                            <div className="card-sub-title">
                                                {members.designation}
                                            </div>
                                            <Link to={members.linkedin_url}>
                                                <FaLinkedin className='linkedin-icon' />
                                            </Link>
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

export default TeamMembers
