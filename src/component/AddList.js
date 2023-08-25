import React, { useState } from 'react'

const AddList = (props) => {
    const [title,setTitle]=useState('')
    const handleChange = (event) =>{
        setTitle(event.target.value)
        
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        const newData = {
            id: Math.random().toString(),
            title:title
        }
        props.add(newData)
        setTitle('')

    }
  return (
    <>
    <div className='my-5'> 
        <form onSubmit={handleSubmit} className='w-fit m-auto bg-gray-100 p-5 space-x-2'>
            <label htmlFor="addNew" className='block m-3'>ADD More</label>
            <input type="text" placeholder='Title' value={title} onChange={handleChange} className='px-2 rounded-sm' />
            <input type="submit" value="Add" className='cursor-pointer py-0 px-2 bg-gray-600 text-white rounded-md mt-1' />
        </form>
    </div>
    </>
  )
}

export default AddList