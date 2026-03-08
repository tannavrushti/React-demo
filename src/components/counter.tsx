import {useState} from 'react'

export const Counter = () => {

   const [count, setCount] = useState<number>(0);

   const increment =() => {
    setCount(count+1);
   }

  const decrement = () => {
    
        setCount(count -1);

    }
  
  const reset =() => {
         setCount(0);
  }



  return (
        <div className='min-h-screen bg-grey-700 text-black flex items-center mt-1'>
            <div className='bg-white shadow-lg rounded-xl p-2 w-full text-center'>
                <h1 className='text-bold mb-5'> Basic Counter App</h1>
                  <div className='text-5xl font-bold text-gray-600 mb-6'>Counter App<br></br>{count}</div>
                  
                    <div className='flex items-center justify-center my-4 gap-3'>
                         <button onClick={increment} className='bg-blue-500  px-4  py-2'>Increase</button>
                        <button onClick={decrement} className='bg-blue-500  px-4  py-2'>Decrease</button>
      
                    </div>
                    <div>
                         <button onClick={reset} className='bg-green-500 text-white px-4  py-2'>Reset</button>
                    </div>
            </div>
       
        </div>
    )
}
export default Counter;