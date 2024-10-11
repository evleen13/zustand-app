const courseSlice = (set) => ({
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
export default courseSlice;
