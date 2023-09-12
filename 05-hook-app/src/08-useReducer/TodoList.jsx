import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoItem } from "./TodoItem";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del tiempo',
        done: false,
    },
]

export const TodoList = () => {
    const [todos, dispatch] = useReducer( todoReducer, initialState );

    const handleNewTodo = ( todo ) => {
        console.log({ todo });
    }

    return (
        <>
            <ul className="list-group">
                {
                    todos.map( todo => (
                       <TodoItem key={ todo.id } />
                    ))
                }
            </ul>
        </>
    )
}