import React, { Component } from 'react';

class CourseList extends Component {
   state = {
      isEdit: true,
      // solution 1 part 1 get input value and pass it to editcourse
      // liveValue: '',
   };

   toggleState = () => {
      let { isEdit } = this.state;
      this.setState({
         isEdit: !isEdit,
      });
   };

   renderCourse = () => {
      return (
         <li>
            <span>{this.props.details.name}</span>
            <button
               onClick={() => {
                  this.toggleState();
               }}
            >
               edit
            </button>
            <button
               onClick={() => {
                  this.props.deleteCourse(this.props.index);
               }}
            >
               delete
            </button>
         </li>
      );
   };

   updateCourse = (e) => {
      e.preventDefault();
      // solution 1 part 4 get input value and pass it to editcourse
      // this.props.editCourse(this.props.index, this.state.liveValue);
      // solution 2 part 2 get input value and pass it to editcourse
      this.props.editCourse(this.props.index, this.myinput.value);
      this.toggleState();
   };

   // solution 1 part 2 get input value and pass it to editcourse
   // handelChange = (e) => {
   //    this.setState({
   //       ...this.state,
   //       liveValue: e.target.value,
   //    });
   // };

   renderForm = () => {
      return (
         <form onSubmit={this.updateCourse}>
            {/* solution 1 part 3 get input value and pass it to editcourse  */}
            {/* <input type="text" defaultValue={this.props.details.name} onChange={this.handelChange} /> */}
            {/* solution 2 part 1 get input value and pass it to editcourse */}
            <input
               type="text"
               defaultValue={this.props.details.name}
               ref={(v) => {
                  this.myinput = v;
               }}
            />
            <button type="submit">update</button>
         </form>
      );
   };

   render() {
      return <React.Fragment>{this.state.isEdit ? this.renderCourse() : this.renderForm()}</React.Fragment>;
   }
}

export default CourseList;
