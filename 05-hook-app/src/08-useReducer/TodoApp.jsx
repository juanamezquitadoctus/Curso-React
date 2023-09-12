import { TodoList } from "./TodoList";

export const TodoApp = () => {
    return (
        <>
            <h1>TodoApp: 10, <small>Pendientes: 2</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* TodoAdd onNewTodo( todo ) */}
                    {/* { id: new Date()..., description: '', done: false } */}
                    <form>
                        <input type="text" placeholder="Que hay que hacer?" className="form-control" />
                        <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
                    </form>
                    {/* Fin TodoAdd */}
                </div>
            </div>
        </>
    )
}
