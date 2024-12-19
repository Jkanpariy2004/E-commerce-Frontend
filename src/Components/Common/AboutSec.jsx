import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg';

function AboutSec() {
    return (
        <section className='section-2 py-5'>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={AboutImg} className='w-100' alt="" />
                    </div>
                    <div className="col-md-6">
                        <span>About Us</span>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea, id ratione laboriosam doloribus autem sit voluptates blanditiis perspiciatis, impedit alias totam architecto. Quod deserunt dolor, optio beatae sunt ex?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quia eaque qui molestias ut soluta ipsam fugiat ea quis quibusdam, magnam rerum, eos perspiciatis explicabo placeat fuga unde quod amet excepturi quos odit?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSec
