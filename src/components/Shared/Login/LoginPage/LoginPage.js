import React from 'react';
import { Link } from 'react-router-dom';
import login from "../../../../images/login.png"
import useAuth from '../../../Hooks/useAuth';
import MuiButton from '../../StyledComponent/MuiButton';
const LoginPage = () => {
    const {signInWithGoogle}= useAuth();
    const handlesubmit=e=>{
        e.preventDefault()
    }
    return (
        <div>
            <div className='row d-flex w-100 '>
            <div className='col-md-12 col-lg-6 d-flex align-items-center justify-content-center p-5' style={{boxShadow:"2px gray"}} >
            <form onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label text-danger" htmlFor="exampleCheck1">Forget password?</label>
                </div>
                <MuiButton type="submit"  fullWidth>Submit</MuiButton>

                <div>
                
                <button onClick={signInWithGoogle} className='btn btn-primary my-2 w-100'> google</button>
                
                
                <Link to="/signup">
                    <h6 className='text-secondary'>Don't have any acount? sign up</h6></Link>
                </div>
            </form>
            </div>
            <div className='col-md-12 col-lg-6 d-flex align-items-end justify-content-end'>
                <img src={login} alt="" className="img-fluid w-75" />
            </div>
            
            
        </div>
        </div>
    );
};

export default LoginPage;