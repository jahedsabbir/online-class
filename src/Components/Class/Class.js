import React from 'react';
import './Class.css'

const Class = (props) => {
    console.log(props);
    const {title, price, img} = props.courses;

      
    return (
        <div className="course-style">
            <img src={img} alt=""/>
            <h2>{title}</h2>
            <h3>Price : {price}</h3>
            <button  onClick ={() => props.addCourse(props.courses)}>Enroll Now</button>
            
        </div>
    );
};

export default Class;