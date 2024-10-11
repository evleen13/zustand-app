import logo from './logo.svg';
import './App.css';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

function App() {
  return (
    <div className="main-container">
      <h1>Hello Zustand </h1>
      <h2>My Course</h2>
      <CourseForm/>
      <CourseList/>
    </div>
  );
}

export default App;
