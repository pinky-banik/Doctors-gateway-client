import React from 'react';
import testimonials from '../../../Data/Data';
import Testimonial from './Testimonial/Testimonial';
import "./Testimonials.css" ;

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 style={{color:"#19D3AE"}} className=" text-uppercase">Testimonial</h5>
                   <h1>What Our Patients <br/> Says </h1>
               </div>
               <div className="card-deck mt-5 d-lg-flex">
                    {
                        testimonials.map(testimonial => <Testimonial testimonial={testimonial}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;