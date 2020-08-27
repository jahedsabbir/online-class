import React from 'react';
import courses from '../../fakeData/Courses';
import { useState } from 'react';
import Class from '../Class/Class';
import Cart from '../Cart/Cart';

const Course = () => {
    const [course, setCourse] = useState(courses);
    const [cart, setCart] = useState([]);
    const addCourse = (courses) => {
        console.log('course addddeed', courses);
        const newCart = [...cart, courses]
        setCart(newCart);
    }
   const mainDiv = {
       display:'flex'
   }
    return (
        <div style={mainDiv}>
            <div>
            {
               course.map(course => <Class 
                courses ={course}
                addCourse ={addCourse}
                ></Class>)
           }
            </div>
           
        <div>
            <Cart cart = {cart}></Cart>
        </div>
     </div>
        
    );
};

export default Course;