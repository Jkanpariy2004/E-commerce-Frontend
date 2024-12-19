import React, { useContext } from 'react'
import { AuthContext } from '../Backend/Context/Auth'

function Sidebar() {
    const { logout } = useContext(AuthContext)

    return (
        <div className="card border-0 shadow">
            <div className="card-body p-4 sidebar">
                <h4>Sidebar</h4>
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Members</a></li>
                    <li>
                        <button className='btn btn-primary mt-4' onClick={logout}>Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
