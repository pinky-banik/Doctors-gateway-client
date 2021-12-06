import React from 'react';
import { blogsData } from '../../../Data/Data';
import BlogPost from './Blogpost/Blogpost';
import './Blog.css'

const Blogs = () => {
    return (
       <section className="blogs">
           <div className="container ">
               <div  className="section-header">
                    <h5 style={{color:"#19D3AE"}} className="fw-bold text-uppercase">our blog</h5>
                    <h1 className="fw-bold">From Our Blog News</h1>
               </div>
               <div className="card-deck mt-5 d-lg-flex ">
                    {
                        blogsData.map(blog => <BlogPost blog={blog}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;