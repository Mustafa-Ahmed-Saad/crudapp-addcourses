(this.webpackJsonpcrud=this.webpackJsonpcrud||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var s=r(1),n=r.n(s),c=r(8),u=r.n(c),o=(r(13),r(3)),i=r(4),a=r(6),d=r(5),l=r(0),j=function(e){return Object(l.jsxs)("form",{onSubmit:e.addCourse,children:[Object(l.jsx)("input",{type:"text",value:e.current,onChange:e.updateCourse}),Object(l.jsx)("button",{type:"submit",children:"Add"})]})},p=function(e){Object(a.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(o.a)(this,r);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isEdit:!0},e.toggleState=function(){var t=e.state.isEdit;e.setState({isEdit:!t})},e.renderCourse=function(){return Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:e.props.details.name}),Object(l.jsx)("button",{onClick:function(){e.toggleState()},children:"edit"}),Object(l.jsx)("button",{onClick:function(){e.props.deleteCourse(e.props.index)},children:"delete"})]})},e.updateCourse=function(t){t.preventDefault(),e.props.editCourse(e.props.index,e.myinput.value),e.toggleState()},e.renderForm=function(){return Object(l.jsxs)("form",{onSubmit:e.updateCourse,children:[Object(l.jsx)("input",{type:"text",defaultValue:e.props.details.name,ref:function(t){e.myinput=t}}),Object(l.jsx)("button",{type:"submit",children:"update"})]})},e}return Object(i.a)(r,[{key:"render",value:function(){return Object(l.jsx)(n.a.Fragment,{children:this.state.isEdit?this.renderCourse():this.renderForm()})}}]),r}(s.Component),b=r(2),h=function(e){Object(a.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(o.a)(this,r);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={courses:Object(b.read_cookie)("courses"),current:""},e.updateCourse=function(t){e.setState({current:t.target.value}),Object(b.bake_cookie)("courses",e.state.courses)},e.addCourse=function(t){t.preventDefault();var r=e.state.courses,s=e.state.current;if(!(s.length>0))return null;r.push({name:s}),e.setState({courses:r,current:""}),Object(b.bake_cookie)("courses",e.state.courses)},e.deleteCourse=function(t){var r=e.state.courses;r.splice(t,1),e.setState({courses:r}),Object(b.bake_cookie)("courses",e.state.courses)},e.editCourse=function(t,r){e.state.courses[t].name=r,Object(b.bake_cookie)("courses",e.state.courses)},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=this.state.courses,r=0===this.state.courses.length?Object(l.jsx)("p",{children:"courses list empty"}):t.map((function(t,r){return Object(l.jsx)(p,{index:r,deleteCourse:e.deleteCourse,details:t,editCourse:e.editCourse},r)}));return Object(l.jsxs)("section",{className:"App",children:[Object(l.jsx)("h2",{children:"Add Course"}),Object(l.jsx)(j,{addCourse:this.addCourse,updateCourse:this.updateCourse,current:this.state.current}),Object(l.jsx)("ul",{children:r})]})}}]),r}(s.Component),f=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,16)).then((function(t){var r=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,u=t.getTTFB;r(e),s(e),n(e),c(e),u(e)}))};u.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.282a796f.chunk.js.map