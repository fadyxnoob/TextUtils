import React, { useState } from "react";

export default function About(props) {
    return (
        <div className="container-fluid p-3 rounded border">
            <h1 className={`text-center text-${props.mode === 'black' ? 'white' : 'black'}`}>About Us</h1>
            <div className={`accordion text-${props.mode === 'black' ? 'white' : 'black'}`} id="accordionExample">
                <div className={`accordion-item bg-${props.mode} text-${props.mode === 'black' ? 'white' : 'black'}`}>
                    <h2 className={`accordion-header bg-${props.mode} text-${props.mode === 'black' ? 'white' : 'black'}`}>
                        <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'black' ? 'white' : 'black'}`} type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                            Discover Our Vision
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample"
                    >
                        <div className={`accordion-body bg-${props.mode} text-${props.mode==='black'?'white':'black'}`} >
                            Embark on a journey with us as we share our visionary insights and goals. In this section, we illuminate our aspirations, guiding principles, and the path we envision for the future. Uncover the essence of our mission and how it shapes every aspect of our endeavors.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode} text-${props.mode === 'black' ? 'white' : 'black'}`}>
                    <h2 className={`accordion-header bg-${props.mode} text-${props.mode === 'black' ? 'white' : 'black'}`}>
                        <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'black' ? 'white' : 'black'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Unveiling Innovation
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" >
                            Dive into the realm of innovation and creativity within our organization. Here, we unravel the cutting-edge solutions, groundbreaking ideas, and inventive projects that define us. Explore the exciting initiatives we've undertaken to push boundaries and stay at the forefront of progress.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode} text-${props.mode === 'black' ? 'white' : 'black'}`}>
                    <h2 className={`accordion-header bg-${props.mode} text-${props.mode === 'black' ? 'white' : 'black'}`}>
                        <button
                            className={`accordion-button bg-${props.mode} text-${props.mode === 'black' ? 'white' : 'black'} collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Our Commitment to Excellence
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" >
                            At the heart of everything we do lies a commitment to excellence. In this section, we illuminate our unwavering dedication to delivering quality, reliability, and exceptional experiences. Discover the principles that drive our commitment to providing top-tier services and products.

                            Feel free to customize these descriptions to align with the specific content and goals of your website.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
