import React from 'react';
import img from '../../../../images/smallDoctor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = () => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3 w-75 " src={img} alt=""/>
            <h4 style={{color:"#19D3AE"}}>Dr. Coudi</h4>
            <p> <FontAwesomeIcon  icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;