import React from "react";
import fall1 from "../txt/fall1.json";
import fall2 from "../txt/fall2.json";
import spring1 from "../txt/spring1.json";
import spring2 from "../txt/spring2.json";
import summer1 from "../txt/summer1.json";
import summer2 from "../txt/summer2.json";
import Common from "./common.js";
//import TermSequence from "./TermSequence.js";
var ct=Common.curTerm;
Common.cc=0;
var terms = ["Fall 1","Fall 2","Spring 1","Spring 2","Summer 1","Summer 2"];

const CourseListing = props => (<div>
    <span onClick={() => props.changeCourse(2)} className="remove">
      𝘅
    </span>


</div>)
// class CourseListing extends React.Component {
//     state = {
//         currentCourse: 0,
//         curTerm: 0,
//         curID: null
//       };
//       changeTerm = () => {
//         if(this.state.curTerm<terms.length)
//            { 
//                this.setState({ curTerm: this.state.curTerm + 1 });
//             }
//         else {
//             this.setState({ curTerm: 0})
//         }
//       };
//     //   changeCourse = (id) => {
//     //       this.setState({curID: id})
//     //   };
//       render(){
//           return (<div>
//             <h3>{terms[this.state.curTerm]} Courses</h3>
//             {fall1.map(fall1 =>(<div id={fall1.id}
//                             ><label className="btn" onClick={()=>this.state.props.changeCourse(fall1.id)}>
//                             {fall1.name}: {fall1.title}
//                             </label>
//                             {/* <span onClick={() => props.removeFriend(props.id)} className="remove "></span> */}
//                             </div>))}
//             {/* {this.state.curTerm===1 && fall2.map(fall2 =>(<div id={fall2.id}
//                             ><label className="btn" onClick={()=>this.changeCourse}>
//                             {fall2.name}: {fall2.title}</label></div>))}
            
//             {this.state.curTerm===2 && spring1.map(spring1 =>(<div id={spring1.id}
//                                             >{spring1.name}: {spring1.title}</div>))}
//             {this.state.curTerm===3 && spring2.map(spring2 =>(<div id={spring2.id}
//                                             >{spring2.name}: {spring2.title}</div>))}
              
//             {this.state.curTerm===4 && summer1.map(summer1 =>(<div id={summer1.id}
//                                             >{summer1.name}: {summer1.title}</div>))}
//             {this.state.curTerm===5 && summer2.map(summer2 =>(<div id={summer2.id}
//                                             >{summer2.name}: {summer2.title}</div>))} */}
                        
//         </div>);
//       }
// }
// const CourseListings = props => (<div>
//     <h3>{terms[ct]} Courses</h3>
//     {ct===0 && fall1.map(fall1 =>(<div id={fall1.id}
//                     ><label className="btn" onClick={myFunction}>
//                     {fall1.name}: {fall1.title}
//                     </label>
//                     {/* <span onClick={() => props.removeFriend(props.id)} className="remove "></span> */}
//                     </div>))}
//     {ct===1 && fall2.map(fall2 =>(<div id={fall2.id}
//                     >{fall2.name}: {fall2.title}</div>))}
    
//     {ct===2 && spring1.map(spring1 =>(<div id={spring1.id}
//                                     >{spring1.name}: {spring1.title}</div>))}
//     {ct===3 && spring2.map(spring2 =>(<div id={spring2.id}
//                                     >{spring2.name}: {spring2.title}</div>))}
      
//     {ct===4 && summer1.map(summer1 =>(<div id={summer1.id}
//                                     >{summer1.name}: {summer1.title}</div>))}
//     {ct===5 && summer2.map(summer2 =>(<div id={summer2.id}
//                                     >{summer2.name}: {summer2.title}</div>))}
                
// </div>);
//document.getElementsByClassName("btn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */

export default CourseListing;
