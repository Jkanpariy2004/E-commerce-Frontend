import React, { useContext } from "react";
import { AuthContext } from "../Backend/Context/Auth";
import { Link } from "react-router-dom";

function Sidebar() {
    const { logout } = useContext(AuthContext);

    return (
        <div className="card border-0 shadow">
            <div className="card-body p-4 sidebar">
                <h4 className="text-center">Sidebar</h4>
                <ul className="text-center">
                    <li>
                        <Link
                            className={
                                location.pathname === "/admin/dashboard" ? "active" : ""
                            }
                            to="/admin/dashboard"
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={
                                location.pathname === "/admin/articles" || location.pathname === "/admin/articles/create" || location.pathname === "/admin/articles/edit/:id" ? "active" : ""
                            }
                            to="/admin/articles"
                        >
                            Articles
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={
                                location.pathname === "/admin/services" || location.pathname === "/admin/services/create" || location.pathname === "/admin/services/edit/:id" ? "active" : ""
                            }
                            to="/admin/services"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={
                                location.pathname === "/admin/projects" || location.pathname === "/admin/projects/create" || location.pathname === "/admin/projects/edit/:id" ? "active" : ""
                            }
                            to="/admin/projects"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="#">Testimonials</Link>
                    </li>
                    <li>
                        <Link to="#">Members</Link>
                    </li>
                    <li>
                        <button className="btn btn-primary mt-4" onClick={logout}>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
