import React, { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import { bake_cookie, read_cookie } from 'sfcookies';
class App extends Component {
   state = {
      courses: read_cookie('courses'),
      current: '',
   };

   // updatecurse in current value
   updateCourse = (e) => {
      this.setState({
         current: e.target.value,
      });
      bake_cookie('courses', this.state.courses);
   };

   // add course
   addCourse = (e) => {
      e.preventDefault();
      let { courses } = this.state;
      let { current } = this.state;
      if (current.length > 0) {
         courses.push({ name: current });
         this.setState({
            courses,
            current: '',
         });
         bake_cookie('courses', this.state.courses);
      } else {
         return null;
      }
   };

   deleteCourse = (index) => {
      let { courses } = this.state;
      courses.splice(index, 1);
      this.setState({ courses });
      bake_cookie('courses', this.state.courses);
   };

   editCourse = (index, value) => {
      let { courses } = this.state;
      let course = courses[index];
      course['name'] = value;
      bake_cookie('courses', this.state.courses);
   };

   render() {
      const { courses } = this.state;
      const courseList =
         this.state.courses.length === 0 ? (
            <p>courses list empty</p>
         ) : (
            courses.map((course, index) => {
               return <CourseList index={index} deleteCourse={this.deleteCourse} details={course} key={index} editCourse={this.editCourse} />;
            })
         );

      return (
         <section className="App">
            <h2>Add Course</h2>
            <CourseForm addCourse={this.addCourse} updateCourse={this.updateCourse} current={this.state.current} />
            <ul>{courseList}</ul>
            {/* form */}
            {/* list */}
         </section>
      );
   }
}

export default App;
