import './App.css';
import {useState,useRef} from 'react'
function App() {
  const [toDo,setToDo] = useState('')
  const [toDos,setToDos] = useState([])
  const inputRef = useRef(null)
  return (
    <div className="app">
    <div className = 'mainHeading'>
      <h1>ToDo List</h1>
    </div>
    <div className = 'subHeading'>
      <h2>Yaaayy!!, it's Sunday...</h2>
    </div>
    <div className='input'>
      <input  ref = {inputRef} value={toDo} onChange={(e)=>{setToDo(e.target.value)}} type='text' placeholder='Add lists..'></input>
      {/* <button className='addButton'>Add</button> */}
      <i onClick={()=>{
        if(toDo.trim()!==''){
          setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])
          inputRef.current.focus()
        }else{
          alert('Please fill the field')
        }
    }} className='fas fa-plus'></i>
    </div>
    <div className='todos'>
          {toDos.map((toDo,i)=>{
           return( <div className='todo'>
           <div className='left'>
           <input type='checkbox' onClick={(e)=>{setToDos( toDos.filter((obj)=>{
            if(obj.id===toDo.id){
              obj.status = e.target.checked
            }
            return obj
           }))}} name='' id=''></input>
           <p>{toDo.text}</p>
         </div>
         <div className='right'>
         <i onClick={()=>{setToDos(toDos.filter((obj)=>{
                    if(obj.id===toDo.id){
                      obj = null
                    }
                    return obj
         }))}} className='fas fa-remove'></i>
         </div>
       </div>) 
          })}
    </div>
    </div>
  );
}

export default App;
