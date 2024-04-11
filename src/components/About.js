import React from 'react'
import User from './User';
import UserClass from './UserClass';
import React from 'react';
class App extends React.Component{
  constructor(){
    console.log("Parent Constructor is called");
    super();
    
  }
  render(){
    console.log("Parent Render is called")
    return(
      
      <div>
        <h1>About Page(Class)</h1>
        {/* <User name={"Gaytri Thakre"}/> */}
        <UserClass name={"Gaytri Thakre"}></UserClass>
      </div>
    )
  }
  componentDidMount(){
    console.log("Parent Component did Mount");
  }
}
// const App = () => {
//   return (
//     <div>
      
//       <h1>About Page</h1>
//       {/* <User name={"Gaytri Thakre"}/> */}
//       <UserClass name={"Gaytri Thakre"}></UserClass>
//     </div>
//   )
// }

export default App;

