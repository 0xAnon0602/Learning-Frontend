import React from 'react'

const MainBody = () => {
  return (
    <div className='relative'>
      <button className='text-[#FFFFFF] font-bold border-black ml-12 mt-10 p-2.5 px-5 rounded-2xl bg-[#646FF0]'>ADD TASK</button>
      <select className='absolute right-0 mt-10 mr-16 p-2.5 rounded bg-[#CCCDDE]'>
       <option value="All">All</option>
       <option value="Completed">Completed</option>
       <option value="Incompleted">Incompleted</option>
     </select>
     <div className='border w-[300px] md:w-[780px] h-[90px] mx-auto mt-3 bg-[#ECEDF6] rounded-xl flex items-center justify-center'>
     <p className=' font-bold text-lg border text-[#585858] bg-[#DEDFE1] max-w-[200px] rounded-xl text-center py-1 px-2'>No Todos</p>
     </div>
    </div>
  )
}

export default MainBody