import React from 'react';
import "./Blogpost.css";

const BlogPost = (props) => {
    const {title, description, author, authorImg , date} = props.blog;
    return (
        <div className="card  shadow-sm m-5 ">
            <div className="card-header d-flex">
                <img className="mx-3" src={authorImg} alt="" width="60"/>
                <div>
                    <h6 style={{color:"#19D3AE"}} >{author}</h6>
                    <h6>{date}</h6>
                </div>
            </div>
            <div className="card-body ">
                <h5>{title}</h5>
                <p className=" text-secondary ">{description}</p>
            </div>
            
       </div>
    );
};

export default BlogPost;