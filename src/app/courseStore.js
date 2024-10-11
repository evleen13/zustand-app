import { create } from "zustand";
// persist stores all the store info into local storage of browser
import { devtools, persist } from "zustand/middleware";

const courseStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [...state.courses, course],
    }));
  },
  removeCourse: (courseId) =>
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    })),
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((c) =>
        c.id === courseId ? { ...c, completed: !c.completed } : c
      ),
    }));
  },
});

const useCourseStore = create(
  devtools(
    persist(courseStore, {
      name: "courses",
    })
  )
);

export default useCourseStore;
