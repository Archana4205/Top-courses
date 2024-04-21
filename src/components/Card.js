import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid != course.id));
      toast.warning("Removed liked");
    } else {
      // insert the course
      if (likedCourses.length == 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className="w-[300px] bg-opacity-80 bg-bgDark rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url}></img>
        <div className=" bg-white rounded-full w-[40px] h-[40px] absolute right-2 bottom-[1px] right-70 grid place-items-center ">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.7rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.7rem" />
            )}
          </button>
        </div>
      </div>

      <div>
        <p className="text-white font-bold text-md py-1 px-2 w-[60%] text-wrap max-w-max">
          {course.title}
        </p>
        <p className="text-white py-1 px-2 w-[100%]">
          {course.description.length > 100
            ? course.description.substr(0, 100)+"..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
