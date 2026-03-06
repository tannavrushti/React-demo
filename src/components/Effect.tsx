import { useEffect } from "react";

function Effect() {
    useEffect(() => {
        console.log("Component mounted");
        return () => {
            console.log("Component unmounted");
        };
    }, []);
    return (
        <div>
            <h1 style={{color:"blue"}}>Welcome to Effect Component</h1>
        </div>
    );
}
    export default Effect;