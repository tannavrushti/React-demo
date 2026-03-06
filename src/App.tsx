// import Simple from './components/Simple'
// import Datalist from './components/Datalist'
// import Example from './components/Example'
// import Effect from './components/Effect'
import Todo from './components/To-Dolist'
import './App.css'

 




function App() {
  return (
    <div>
     <div className=" flex items-center justify-center bg-black">
       <h1 className="text-white text-4xl  font-bold">welcome to react</h1>
     </div>
  
     <div>
      {/* <Effect /> */}
      <Todo />
      </div>
     
      
      {/* <div>
        <Simple name="hency" age={22} isLoggedIn={true} />
        <br></br>
        <Datalist />
        <br></br>
        <Example />
        <br></br>
        <Child name="Hency"/>
        <br></br>
        <Button handleClick={() => console.log("Button clicked")} />
        <br></br>
        <ArrayComponent items={['HTML', 'CSS', 'Javascript']} />
        <br></br>
        <Object user={{name: "Hency", email: "hency@example.com"}} />
        <br></br>
        <StateExample  />
        </div>
     */}
       

      
      

      </div>
     
      
  );
}

export default App;
 
