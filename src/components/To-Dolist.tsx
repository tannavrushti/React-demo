import {useState, useEffect} from 'react'

type Task = {
    title : string
    id : number
    completed : boolean
}

function Todo() {
    const [taskInput, setTaskInput] = useState("");
    
    const [editId, setEditId] = useState<number | null>(null);
   
    const [tasks , setTasks]= useState<Task[]>(() =>{
    const savedTasks = localStorage.getItem("tasks")
      return  savedTasks ? JSON.parse(savedTasks):[]  
    })

  const handleAdd = () => {
      if(taskInput.trim() === "") return;

     if(editId !== null) {
         const updatedTasks = tasks.map(task => task.id === editId ? {...task, title:taskInput}:task)
         setTasks(updatedTasks)
         setEditId(null)
       }else {
         const newTask:Task = {
             id : Date.now(),
             title : taskInput,
             completed : false
            }

           setTasks([...tasks,newTask])
       }
     
        setTaskInput("")
    }

    const handleEdit = (task : Task) => {
        setTaskInput(task.title)
        setEditId(task.id)
        
    }

    const handleDelete = (id:number) => {
        const updatedTasks = tasks.filter(task => task.id !== id)

        setTasks(updatedTasks);

        setTaskInput("");
        setEditId(null);
    }

    const handleStatusChange = (id : number) => {
        const updatedTasks = tasks.map ((task) => task.id === id ? {...task,completed : !task.completed} : task);
        setTasks(updatedTasks);

    }

    useEffect(() => {
        localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks])

    
    return ( 
      <div className="min-h-screen  bg-gray-100 flex justify-center p-4"> 
         <div className="bg-white p-6 rounded-xl w-full max-w-lg">
             <h1 className=" text-2xl font-bold mb-4 text-center">To-do Component</h1>

              <form  onSubmit = {(e) => { e.preventDefault(); handleAdd();}} className='flex mb-4 gap-2'>
                 <input type ='text' placeholder='Enter a task' value ={taskInput}
                 onChange={(e) => setTaskInput (e.target.value)} className='flex-1 p-2 border'/>

                 <button  onClick ={handleAdd} type = "submit" 
                    className='bg-blue-500 text-white px-4 py-2'>
                       {editId !== null ? "update" :"Add"}
                 </button>
                  
                </form> 
                <div className='flex justify-between items-center mt-4'>
                  <p>Total :{tasks.length}</p>
                  <p>pending:{tasks.filter(task => !task.completed).length}</p>
                  </div>
             
              {tasks.map (task => (
                   <div key = {task.id} className='flex  justify-between bg-grey-50 p-3 mb-2 shadow-sm'>
                        <div  className='flex items-center gap-3'>
                          <input type="checkbox" checked={task.completed}
                             onChange={() => handleStatusChange(task.id)} />
                            <p className = {task.completed ? "line-through text-gray-500" : ""}> {task.title}</p>
                       </div>
                             
                             
                       <div className='flex ml-auto gap-2'>  
                            <button onClick = {() => handleEdit(task)} className='bg-green-500 text-white py-1 px-2 rounded'>Edit</button>
                             <button onClick = {() => handleDelete(task.id)} className='bg-red-500 text-white py-1 px-2 rounded'>Delete</button>
                       </div>
                       <p></p>
                   </div>
               ))}    
                
            </div>     
        
          
        </div>
     
      
    );
}
export default Todo;
