import { useState } from 'react';
import './App.css';
import AddList from './component/AddList';
import ShowList from './component/ShowList';

function App() {

  let db = localStorage.getItem('note-data-db');
  (db===null ? db = [] : db = JSON.parse(db))
  const [list,setList] = useState(db)
  const removeItem = (index) =>{
    let tempList = [...list]  //create a copy of list and store in tempList
    tempList.splice(index, 1)
    setList(tempList)
  }
  const addList = (newList) =>{
    setList(list.concat(newList))
  }
localStorage.setItem('note-data-db',JSON.stringify(list))
  return (
   <>   
   <div className='text-center py-5 bg-gray-100'>Lists</div>
   <ShowList list = {list} remove={removeItem} />
   <AddList add={addList} />
   </>
  );
}

export default App;
