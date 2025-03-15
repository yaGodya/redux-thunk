import { useSelector } from "react-redux";

const TodoList = () => {
    const { list: todos, status, error } = useSelector((state) => state.todos);
    return (
        <div>
            todos: {todos.length}. Status: {status}
            {error && <h4>{error}</h4>}
        </div>
    );
};

export { TodoList };
