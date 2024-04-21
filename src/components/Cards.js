import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  let category=props.category;

  const [likedCourses, setLikedCourses] = useState([]);
  function getCourse() {
    if(category==="All"){
      let arr = [];
      Object.values(courses).forEach((c) => {
        c.forEach((obj) => {
          arr.push(obj);
        });
      });
      return arr;
    }
    else{
     return courses[category];
    }
    
  }
  return (
    <div className="flex flex-wrap w-11/12 gap-6 ml-[15%]">
      {getCourse().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
