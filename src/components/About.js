import React from 'react'
import User from './User';
import UserClass from './UserClass';
import React from 'react';
class App extends React.Component{
  constructor(){
    console.log("Parent Constructor is called");
    super();
    
  }
  componentDidMount(){
    console.log("Parent Component did Mount");
  }
  render(){
    console.log("Parent Render is called")

    return(
      
      <div>
        <h1>About Page(Class)</h1>
        {/* <User name={"Gaytri Thakre"}/> */}
        <UserClass name={"First Child"}></UserClass>
        <UserClass name={"Second Child"}></UserClass>
      </div>
    )
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

