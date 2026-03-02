import {useState} from 'react'


function Task() {
    const [taskInput, setTaskInput] = useState("");
    const [tasks, setTasks] = useState<any[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const  handleAdd = () => {
        if (taskInput === "") return;
        
        if (editIndex !== null) {  //updat
            const updated = [...tasks];
            updated[editIndex].text = taskInput;
            setTasks(updated);
            setEditIndex(null);
        } else {  //add
            setTasks([
         ...tasks,
        { text: taskInput}
      ]);
      }
       setTaskInput(""); 
    };
            
        
    
    
 
  // DELETE Task
 const handleDelete = (index: number) => {
     const newTaskInput = tasks.filter((_, i) => i !== index);
     setTasks(newTaskInput);
 };
 // EDIT
 const handleEdit = (index: number) => {
     setTaskInput(tasks[index].text);
     setEditIndex(index);
 };
 // Checkbox
 const handleStatusChange = (index: number) => {
     const updatedTaskInput = [...tasks];
     updatedTaskInput[index].completed = ! updatedTaskInput[index].completed;  
     setTasks(updatedTaskInput);
 };
 
 return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">

            <h1 className="text-2xl font-bold mb-4 text-center">To-do List</h1>
            
            {/* input and add button */}
            <div className="flex mb-4 gap-2">
                <input 
                    type="text" placeholder="Enter A task" value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    className="flex-1 p-2 border rounded"
                    />
               
                <button onClick = { handleAdd } 
                className="bg-blue-500 text-white px-4 py-2 rounded">
                    {editIndex !== null ? "Update" : "Add"}
                </button>
            </div>

            {/* task list */}
            {tasks.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded mb-2 shadow-sm">
                    <div className="flex items-center gap-3">
                        <input  type="checkbox" checked={item.completed} 
                           onChange={() => handleStatusChange(index)}/>
                            
                         <div>
                          <p className={item.completed ? "line-through text-gray-500" : ""}>{item.text}</p>
                         </div>
                    </div>
                        
                    
                    <div className="flex gap-2">
                        <button onClick={() => handleEdit(index)} className="bg-green-500 text-white px-2 py-1 rounded ">Edit</button>
                        <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                    </div>
               </div>
            ))}
        </div>
    </div>
 );
} 

export default Task;         

        
            
        
    
  