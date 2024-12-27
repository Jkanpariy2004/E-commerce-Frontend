import React from 'react'

function HeroSec({ preHeading, heading, text }) {
    return (
        <section className="section-7">
            <div className="hero d-flex align-items-center">
                <div className="container">
                    <div className="text-start">
                        <span>{preHeading}</span>
                        <h1>{heading}</h1>
                        <p>
                            {text || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ullam <br /> neque adipisci quasi assumenda dolorum iure minus aut commodi quam!'}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSec
