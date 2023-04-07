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
    </div>
  )
}

export default MainBody