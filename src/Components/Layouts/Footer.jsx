import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3">
                        <h3>E Commerce</h3>
                        <div className="pe-5">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure perferendis in illum eaque autem doloribus quisquam aliquam? Vitae, tempora fugit.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3>Our Services</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><a href="#">(888-000-000)</a></li>
                            <li><a href="#">info@example.com</a></li>
                            <p>Lorem ipsum dolor <br /> sit amet consectetur <br /> elit. Dolorum, a.</p>
                        </ul>
                    </div>
                    <hr />
                    <div className='text-center pt-4'>Copyright &copy; E Commerce. All Right Reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
