const Todos = ({todos,handleDelete}) => { 
    return (
        todos.length !==0 ? (
           todos.map((todo) =>(
               <div className="todos">
                   <span>{todo.task}</span>
                   <button onClick={() => handleDelete(todo.id)}>Delete</button>
               </div>
           ))
        ) : (
            <div className="no-todo">
                <h2>You have no task left!</h2>
            </div>
        )
    );
}
 
export default Todos;