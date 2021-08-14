import './App.css'
import {useState} from 'react'
function App() {
  const [toDos,setTodos]= useState([])
  const [toDo,setToDo]= useState('')

  var d = new Date();
  var day = d.getDay()
  if (day == 1){
  	day="Monday"
  }else if(day==2){
    day = "Tuesday"
  }else if(day==3){
    day = "Thursday"
  }else if(day==4){
    day = "Wednesday"
  }else if(day==5){
    day = "Friday"
  }else if(day==6){
    day = "Saturday"
  }else if(day==7){
    day = "Sunday"
  }

 


  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value = {toDo} onChange ={(e)=>setToDo(e.target.value) }  type="text" placeholder="🖊️ Add item..." />
        <i onClick ={()=>setTodos([...toDos,{id:Date.now(),text:toDo, status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
      
      { toDos.map((obj)=>{
        return(
        <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            console.log(e.target.value)
            console.log(obj)
            setTodos(toDos.filter(obj2=>{
              if(obj2.id === obj.id){
                obj2.status=e.target.checked
              }
              return obj2
            }))
          }} value={obj.status} type="checkbox" name="" id=""/>
          <p> {obj.text}</p>
        </div>
        <div className="right">
          <i  className="fas fa-times"></i> 

        </div>
      </div>)
      })}
       

      </div>
    </div>
  );
}

export default App;

