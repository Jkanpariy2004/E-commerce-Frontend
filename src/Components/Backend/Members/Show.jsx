import React, { useEffect, useState } from 'react';
import Header from '../../Layouts/Header';
import Footer from '../../Layouts/Footer';
import Sidebar from '../../Common/Sidebar';
import { apiUrl } from '../../Common/Http';
import { token } from '../../Common/Http';
import { Link } from 'react-router-dom';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import $ from 'jquery';
import dt from 'datatables.net-bs5';
import { toast } from 'react-toastify';


function Show() {
    const [members, setMembers] = useState([]);

    const fetchMembers = async () => {
        const response = await fetch(apiUrl + 'members/get', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token()}`
            }
        });

        const result = await response.json();
        setMembers(result.data);

        setTimeout(() => {
            $('#membersTable').DataTable();
        }, 0);
    };

    const deleteMember = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            try {
                const response = await fetch(`${apiUrl}members/delete/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${token()}`,
                    },
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    setMembers((prevMembers) => prevMembers.filter((member) => member.id !== id));
                    toast.success(result.message);
                } else {
                    toast.error(result.message || "Failed to delete the member.");
                }
            } catch (error) {
                console.error("Error deleting member:", error);
                toast.error("An error occurred while trying to delete the member.");
            }
        }
    };


    useEffect(() => {
        fetchMembers();
    }, []);

    return (
        <>
            <Header />
            <main>
                <div className="container-fluid my-5">
                    <div className="row">
                        <div className="col-md-2">
                            <Sidebar />
                        </div>
                        <div className="col-md-10">
                            <div className="card border-0 shadow">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between">
                                        <h4 className="h5">Members</h4>
                                        <Link to="/admin/members/create" className="btn btn-primary">Create</Link>
                                    </div>
                                    <hr />
                                    <table id="membersTable" className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th className='text-center'>ID</th>
                                                <th className='text-center'>Name</th>
                                                <th className='text-center'>Image</th>
                                                <th className='text-center'>Job Title</th>
                                                <th className='text-center'>LinkedIn URL</th>
                                                <th className='text-center'>Status</th>
                                                <th className='text-center'>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {members && members.map(member => (
                                                <tr key={member.id}>
                                                    <td className='text-center'>{member.id}</td>
                                                    <td className='text-center'>{member.name}</td>
                                                    <td className='text-center'><img src={member.image} alt="" width={50} height={50} /></td>
                                                    <td className='text-center'>{member.job_title}</td>
                                                    <td className='text-center'>{member.linkedin_url}</td>
                                                    <td className='text-center'>{member.status == 1 ? 'Active' : 'Inactive'}</td>
                                                    <td className='text-center'>
                                                        <Link to={`/admin/members/edit/${member.id}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                            </svg>
                                                        </Link>&nbsp;&nbsp;
                                                        <Link to="#" onClick={() => deleteMember(member.id)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                                            </svg>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Show;
