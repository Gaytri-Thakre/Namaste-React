import React from "react"

class UserClass  extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.name+"Child Constructor is called");
        
        this.state ={
            userInfo:{
                name: "Gaytri Thakre",
                location: "Mumbai",
                
            },
            
        }
        
        
    }
    async componentDidMount(){
        // console.log(this.props.name+"Child Component did Mount")
        const data = await fetch("https://api.github.com/users/Gaytri-Thakre");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        });
    }
    render(){
        // console.log(this.props.name+"Child Render is called");
        const {name,location,avatar_url} = this.state.userInfo;
        return(
            <div className="UserCard">
                
                <img src={avatar_url}></img>
                <h1>Name:{name}</h1>
                <h2>location: {location}</h2>
            </div>
        )
    }
    componentWillUnmount(){
        console.log("Unmounted User component")
    }
    
}
export default UserClass;