import React from "react";
import useCentralStore from "../app/centralStore";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCentralStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );

  return (
    <ul>
      {courses.map((course, index) => {
        return (
          <li
            className="course-item"
            key={`${index}_${course.title}`}
            style={{
              backgroundColor: course.completed ? "#403939" : "#eda4a4",
            }}
          >
            <span className="course-item-col-1">
              <input
                type="checkbox"
                checked={course.completed}
                onChange={() => toggleCourseStatus(course.id)}
              />
            </span>
            <span>{course.title}</span>
            <button
              className="delete-btn"
              onClick={() => removeCourse(course.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default CourseList;
