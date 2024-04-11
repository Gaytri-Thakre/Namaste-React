import { useState } from "react";
const User=({name})=>{
    const[count] = useState(0);
    return (
        <div className="UserCard">
            <h4>Count: {count}</h4>
            <h1>Name: {name}</h1>
            <h2>Location: Mumbai</h2>
            
        </div>
    );
}
export default User;