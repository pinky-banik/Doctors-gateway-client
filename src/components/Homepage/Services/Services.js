import React from 'react';
import { serviceData } from '../../../Data/Data';

import Service from '../Service/Service';

const Services = () => {
    return (
        <section className="services mb-5">
            <div className="container my-5 py-5">
                <div className="section-header text-center">
                    <h5 style={{color:"#19D3AE"}} className="text-uppercase fw-bold">Our services</h5>
                    <h1>Service We Provide</h1>
                </div>
                <div className="row mt-5 pt-5">
                    {
                        serviceData.map(service => <Service 
                            key={service.id} service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;