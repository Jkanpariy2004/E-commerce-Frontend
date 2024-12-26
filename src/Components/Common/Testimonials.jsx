import React, { useEffect, useState } from 'react'
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { apiUrl } from './Http';

function Testimonials() {
    const [testimonials, setTestimonials] = useState();

    const fetchTestimonials = async () => {
        const response = await fetch(apiUrl + 'get-testimonials', {
            method: 'GET',
        });

        const result = await response.json();
        setTestimonials(result);
    }

    useEffect(() => {
        fetchTestimonials()
    }, []);


    return (
        <section className='section-5 py-5'>
            <div className="container py-5">
                <div className="section-header text-center">
                    <span>testimonials</span>
                    <h2>What People are saying about us</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nam nesciunt quas voluptate error rerum!</p>
                </div>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                >
                    {
                        testimonials && testimonials.map(testimonials => {
                            return (
                                <SwiperSlide>
                                    <div className="card shadow border-0">
                                        <div className='card-body p-5'>
                                            <div className="rating tracking-wide">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                            </div>
                                            <div className='content pt-3 pb-2'>
                                                <p>{testimonials.testimonial}</p>
                                            </div>
                                            <hr />
                                            <div className='d-flex meta'>
                                                <div>
                                                    <img src={testimonials.image} alt="" width={50} />
                                                </div>
                                                <div className='ps-3'>
                                                    <div className='name'>{testimonials.citation}</div>
                                                    <div>{testimonials.designations}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials
