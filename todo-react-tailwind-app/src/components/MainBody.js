import  React,{useState,useEffect} from 'react'

const MainBody = () => {

const [taskButtonValue,setTaskButtonValue]= useState(false)
const [newTitle,setNewTitle] = useState("")
const [newType,setNewType] = useState("")
const [todoItems,setTodoItems]=useState("")

useEffect(() => {
  var tempData = (JSON.parse(localStorage.getItem('todo_items')));
  if(tempData==null){
    setTodoItems([])
    localStorage.setItem('todo_items',JSON.stringify([]))
  }else{
    setTodoItems(tempData)
  }
}, []);

const renderTodo  = () => {
  const todoLength = todoItems.length
  if(todoLength===0){var height=120}
  else{height = 90*todoLength}

  var allItems = []


  for(var element of todoItems){

    allItems.push(
    <div className='border bg-white rounded-lg mt-2 mb-2 flex flex-row items-center'>
    <span className='w-[730px] h-[55px] py-4 indent-2  '>{element['title']}</span>
    </div>
    )
  
  };

  if(allItems.length===0){
    allItems.push(
      <p className=' font-bold text-lg border text-[#585858] bg-[#DEDFE1] max-w-[200px] rounded-xl text-center py-1 px-2'>No Todos</p>
      )
  }

  return(
    <div className={`border w-[300px] md:w-[780px] h-[${height}px] mx-auto mt-3 bg-[#ECEDF6] rounded-xl flex flex-col items-center justify-center`}>
    {allItems}
    </div>
    )
}

const submitNewData = () => {
  var newData = {'title':newTitle,'type':newType}
  todoItems.push(newData)
  localStorage.setItem('todo_items',JSON.stringify(todoItems))
  setTaskButtonValue(!taskButtonValue)
}

  return (
    <div className='relative'>
      <button className='text-[#FFFFFF] font-bold border-black ml-12 mt-10 p-2.5 px-5 rounded-2xl bg-[#646FF0]'
      onClick={()=>{
        setTaskButtonValue(!taskButtonValue)
      }}
      >ADD TASK</button>
      <select className='absolute right-0 mt-10 mr-16 p-2.5 rounded bg-[#CCCDDE]'>
       <option value="All">All</option>
       <option value="Completed">Completed</option>
       <option value="Incompleted">Incompleted</option>
     </select>

     <div>{renderTodo()}</div>

     {taskButtonValue && (
    <div className="fixed inset-0 backdrop-blur-[1.5px] flex items-center justify-center"> 
    
    <div className=' w-[450px] mx-auto h-[300px] mt-60 bg-[#CCCDDE] rounded-xl inset-0 backdrop-blur-sm bg-opacity-25'>
    <p className='font-bold text-xl ml-4 text-[#646681] py-2 mr-12 inline-block'>Add TODO</p>
     <button className="bg-white rounded-md p-2 text-gray-400 hover:text-white hover:bg-[#e64343] ml-60 "
     onClick={()=>{
        setTaskButtonValue(!taskButtonValue)
      }}
      >
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button> 
     <p className='mt-1 font-bold text-l ml-4 text-[#646681]'>TITLE</p>
     <input type="text" className="p-3 input input-bordered input-accent  w-full max-w-xs mt-2 h-[50px] ml-4 required" onChange={(x)=>{setNewTitle(x.target.value)}}/>
     <p className='mt-1 font-bold text-l ml-4 text-[#646681]'>STATUS</p>
  
     <select className='p-3 input input-bordered input-accent  w-full max-w-xs mt-2 h-[50px] ml-4 bg-white required' onChange={(y)=>{setNewType(y.target.value)}}>
       <option value="Completed">Completed</option>
       <option value="Incompleted">Incompleted</option>
     </select>
     
     <button className='text-[#FFFFFF] font-bold border-black ml-4 mt-7 p-2.5 px-5 rounded-2xl bg-[#646FF0]'
     onClick={()=>{submitNewData()}}
     >ADD TASK</button>
     <button className='text-[#7a7b85] font-bold border-black ml-4 mt-7 p-2.5 px-5 rounded-2xl bg-[#CCCDDE]'
     onClick={()=>{
      setTaskButtonValue(!taskButtonValue)
     }}
     >CANCEL</button>
     </div>

     </div>
      )}

    </div>
  )
}

export default MainBody