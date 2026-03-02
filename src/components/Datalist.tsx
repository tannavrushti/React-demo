import Button from './Data'

function Datalist(){
    const showMessage = () => {
        alert("Button clicked");
    }
    return(
        <div>

         <h1>fuction props example</h1>
         <Button onClick={showMessage}  />
            
        </div>
    );
}
export default Datalist;