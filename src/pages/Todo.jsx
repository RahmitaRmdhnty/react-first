
// class Todo extends Component{
//     render(){
//         return(
//             <h1>todo</h1>
//         )
//     }
// }

import { useState } from "react"

//functional: cara 1
// function Todo(){
//     return(
//         <h1>To Do List</h1>
//     )
// }

//functional: cara 2
// const Todo = () => {
//     return (
//         <h1>Todo List</h1>
//     )
// }

// export default Todo;

//functional cara 2 with export
// export const Todo = () => {
//     return(
//         <h1>Todo List</h1>
//     )
// }

export const Todo = () => {

    const [todos, set_todos] = useState([
        {
            todo: "Belajar React",
            date: "2022-11-20",
            isDone: true,
        }
    ])

    const [todo, set_todo] = useState("")
    const [date, set_date] = useState("")

    const RenderCard=()=>{
        return todos.map((todo,i) => {
            console.log("ini tes")
            return <Card todo = {todo} index={i} done={done} deleteTodo={deleteTodo}/>
        })
    }

    function deleteTodo(index){
        const temp = todos
        temp.splice(index,1)
        set_todos([...temp])
    }

    function done(index){
        const temp = todos
        temp[index].isDone = !temp[index].isDone
        set_todos([...temp])
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-8 offset-sm-2 offset-md-3">
                    <div className="row">
                        <div className="col-md-8 col-sm-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <input 
                                        onChange={(event) => {
                                            set_todo(event.target.value)
                                        }}
                                    className="form-control" type="text" placeholder="Insert To Do..." />
                                </div>
                                <div className="col-md-6">
                                    <input 
                                        onChange={(e)=>{
                                            set_date(e.target.value)
                                        }}
                                    className="form-control" type="date" placeholder="Insert To Do..." />
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 col-sm-6">
                            <button 
                                onClick={(e) => {
                                    e.preventDefault()
                                    set_todos([...todos,{
                                        todo : todo,
                                        date : date,
                                        isDone : false,
                                    }])
                                }}
                            className="btn btn-primary">Create Todo</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                {
                    RenderCard()
                }
            </div>
        </div>
    )
}

const Card=({todo,index,deleteTodo,done})=>{
    return (
        <div key={index} className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{todo.date}</h5>
                    <p className="card-text">{todo.todo}</p>
                    <button onClick={()=> {
                        done(index)
                    }} className={
                        `btn me-2
                            ${
                                todo.isDone
                                ? "btn-success"
                                : "btn-primary"
                                 
                            }
                        `
                    }>
                        {
                            todo.isDone
                                ? <span>
                                    <i class="bi bi-check-all"></i>
                                    Done
                                </span>
                                : <i className="bi bi-check-lg"></i>
                        }
                    </button>
                    {
                        todo.isDone
                            ? ""
                            : <button 
                            onClick={() => {
                                deleteTodo(index)
                            }}
                            className="btn btn-outline-danger">
                            <i className="bi bi-trash-fill"></i>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

