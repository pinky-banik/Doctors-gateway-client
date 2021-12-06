import React from 'react';
import featuredImg from '../../../images/featured.png'
import MuiButton from '../../Shared/StyledComponent/MuiButton';
const Exceptional = () => {
    return (
        <section className="features-service mt-5 pb-lg-5 ">
            <div className="container-fluid mx-auto pt-5"  style={{width:"90%"}}>
                <div className="row mb-5">
                    <div className="col-lg-5 mb-4 m-md-0">
                        <img className="img-fluid w-75 text-center" src={featuredImg} alt=""/>
                    </div>
                    <div className="col-lg-7 align-self-center my-5">
                        <h1>Exponetional Dental Care, on your Term</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia magnam possimus id cumque velit ullam, sequi quo illo, tempora optio repellat natus quos corporis, earum molestiae qui quibusdam neque maxime repudiandae? Fuga, vero enim voluptatibus expedita quidem necessitatibus fugiat! Aliquid eius architecto iusto minima itaque dolore expedita! Eaque, molestias!
                        </p>
                        <MuiButton>Learn More</MuiButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Exceptional;