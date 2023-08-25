import React from 'react'
const ShowList = props => {
    const theList = props.list
    const handleDelete = (index) => {
      props.remove(index)
    }
    if(theList.length === 0)
    {
      return (
        <>
         <div className='bg-gray-100 p-5 my-2 text-center'>
            <h1>Add Notes....</h1>
            </div>
        </>
      )
    }
    
  return (
    <>
    <div className='m-auto text-center w-2/3 bg-cyan-50 my-2 p-5'>
    {theList.map((item)=>(
        <div key={item.id} className='bg-gray-100 p-5 my-2 text-left'>
            <h1>{item.title}</h1>
            <button onClick={() => handleDelete(theList.indexOf(item))}  className='bg-gray-200 rounded p-1 mt-2'>Delete</button>
        </div>
        ))}
        </div>
        </>
  )
}

export default ShowList