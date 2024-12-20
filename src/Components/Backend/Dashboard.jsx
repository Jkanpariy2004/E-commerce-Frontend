import React from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import Sidebar from '../Common/Sidebar'

function Dashboard() {
    return (
        <div>
            <Header />
            <main>
                <div className="container-fluid my-5">
                    <div className="row">
                        <div className='col-md-2'>
                            <Sidebar />
                        </div>
                        <div className='col-md-10 dashboard'>
                            <div className="card border-0 shadow">
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <h4>Welcome to Admin Dashboard</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard
