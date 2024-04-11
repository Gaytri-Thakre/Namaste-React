import React from "react"

class UserClass  extends React.Component{
    constructor(props){
        console.log("Child Constructor is called");
        super(props);
        console.log(props);
        this.state={
            count:1,
           
        }
        
    }
    render(){
        console.log("Child Render is called");
        return(
            <div className="UserCard">
                <h4>Count:{this.state.count}</h4>
                <button onClick={()=>{
                        // never update the state variables directly
                          this.setState({
                              count:this.state.count+1,
                          }) 
                }}>Count Increase</button>
                <h1>Name:{this.props.name}</h1>
                <h2>Location: Mumbai</h2>
            </div>
        )
    }
    componentDidMount(){
        console.log("Child Component did Mount")
    }
}
export default UserClass;