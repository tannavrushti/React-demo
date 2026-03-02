import {useState} from "react";

function Example() {
    const [name,setName] = useState<string>("");
    return(
        <div>
            <h1 style={{color:"red"}}>Welcome to Example Component</h1>
            <input value={name} 
            type="text" placeholder="Enter your name"
            onChange={(packet)=> setName(packet.target.value)}
              />
    
            

        </div>
    );
}
export default Example;