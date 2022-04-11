const AddTodo = ({handleSubmit, input,setInput}) => {
    return (
        <div className="forms">
            <form onSubmit={handleSubmit}>
                <input type="text"  value={input} onChange= {e =>setInput(e.target.value)}/>
                <button>Add</button>
            </form>
        </div>
    );
}
 
export default AddTodo;