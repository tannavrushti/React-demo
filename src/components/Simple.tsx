type SimpleProps = {
    name: string;
    age: number;
    isLoggedIn: boolean;
}
function Simple({name, age, isLoggedIn}: SimpleProps){
    return(
        <div className="bg-gray-300 p-4 rounded-lg">
            <h2>name: {name},
                 age: {age},
                 isLoggedIn: {isLoggedIn ? "true" : "false"}</h2>
        </div>
    );
}
export default Simple;
 
