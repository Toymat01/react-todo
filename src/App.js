import { useState } from "react";
import Navbar from "./Navbar";
import AddTodo from "./AddTodo";
import Todos from "./Todos";




const App = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([])
    const handleDelete= (id) =>{
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
} 

    const handleSubmit = (e,id) =>{
        e.preventDefault()
        id= Math.random()
        setTodos ([...todos, {task:input, id:id}])
        setInput('')
        console.log(input)
    }
    return (
            <div className="app">
                 <Navbar/>
                <div className="content">
                    <AddTodo  handleSubmit ={handleSubmit} input ={input} setInput ={setInput}/>
                    <Todos todos = {todos} handleDelete ={handleDelete}/>
                </div>
            </div>
        
      
    );
}
 
export default App;